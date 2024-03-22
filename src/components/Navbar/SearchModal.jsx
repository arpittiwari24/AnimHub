import  { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { usePremiumContext } from '../../context/IsPremiumContextProvider';
import { getVerifiedComponents } from '../../apis/components.api';
import { ComponentCard } from '../common';

const SearchModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [componentsData, setComponentsData] = useState([])
    const [clicked, setClicked] = useState(false)
    const {premium} = usePremiumContext()
    const category = []

    const handleChange = (event) => {
      setClicked(false)
      setSearchValue(event.target.value);  
  };


    const handleData = async () => {
    const data = await getVerifiedComponents();
    setComponentsData(data);
    setLoading(false);
  };

  useEffect(() => {
    handleData()
  },[])

  for(let i=0;i< componentsData.length;i++){
    category.push(componentsData[i].category)
  }
   const filteredComponents = componentsData.filter((component) =>
    component.category.toLowerCase().includes(searchValue.toLowerCase())
  );

  const searchCategory = (searchValue) => {
    return category.filter(item => item.toLowerCase().includes(searchValue.toLowerCase()));
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
  <>
      <button onClick={toggleModal} className=" px-4 py-2 rounded">
           <BiSearch className="text-[#fff] text-2xl" />
      </button>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-900 bg-opacity-75 p-4">
          <div className="relative mx-auto px-8 py-4 rounded-md bg-white shadow-lg">
            <button
              onClick={toggleModal}
              type="button"
              className="absolute top-0 right-0 pt-1 pr-1 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <span aria-hidden="true" className='text-black'>&times;</span>
            </button>
           <div className=" flex justify-center items-center bg-[#252525] px-4 py-[0.4rem] rounded-full ">
                <input
                  className="appearance-none focus:outline-none all-none w-full bg-[#252525] text-[#fff] text-sm h-8 px-2 py-1  "
                  type="text"
                  placeholder="Search Animated Components"
                  value={searchValue}
                  onChange={handleChange}
                />
              </div> 
              {searchValue.length !== 0 &&  searchValue.length >= 3 && clicked === true &&
              filteredComponents
          .filter((component) => !component.premium || premium)
          .map((card, index) => {
            return <ComponentCard key={index} data={card} />;
          })}
           {premium &&
          filteredComponents
            .filter((component) => component.premium)
            .map((card, index) => (
              <div key={index} className="hidden" /> // Empty container for hidden content
            ))}

           {searchValue.length !== 0 && searchValue.length >= 1 && clicked === false &&
          Array.from(new Set(searchCategory(searchValue))).map((categoryName, index) => {
        return (
          <div key={index} className='shadow'>
            <button onClick={() => {
              setClicked(true)
              setSearchValue(categoryName)
            }} className='text-black text-xl'>{categoryName}</button>
          </div>
        );
    })
}
   {searchValue.length !== 0 && searchValue.length >= 1 && Array.from(new Set(searchCategory(searchValue))).length === 0 &&
       <p className='text-black text-xl'>No results found.</p>
   }
            {loading && <p>Loading...</p>}
          </div>
        </div>
      )}
    </>

  )
}

export default SearchModal