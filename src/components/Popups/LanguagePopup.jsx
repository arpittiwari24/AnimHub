import React, { useContext, useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import {CategoryLangContext} from '../../context/CategoryLangContextProvider'

const categories = ["button", "input", "loader", "modal", "navigation", "slider", "switch", "table", "tooltip"]

const languages = ["HTML+CSS", "HTML+CSS+JS", "HTML+Tailwind", "HTML+Tailwind+JS"]

const LanguagePopup = ({ closePopup }) => {

  const {langCategory, setLangCategory} = useContext(CategoryLangContext)
  console.log("contexr", langCategory);
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const handleSubmit = () => {
    if (selectedCategory === "" || selectedLanguage === "") {
      alert("Please select both category and language")
      return
    }
    setLangCategory({
      category: selectedCategory,
      language: selectedLanguage
    })
    closePopup();
    console.log("context", langCategory);
    navigate("/editor")
  }
  return (
    <div className='absolute w-[50vw] bg-[#292929] rounded-lg'>
      <button className="absolute top-2 right-2" onClick={closePopup}>
        <RxCross1 className="text-3xl text-[#6a6a6a]" />
      </button>
      <div className='my-10' id='category'>
        <h1 className='mx-9 font-[600] text-[30px]'>Category</h1>
        {categories.map((category, idx) =>
          <button
            key={idx}
            className={`px-5 py-2 mx-5 my-2.5  rounded-md font-[600]
                        ${selectedCategory !== category && "hover:bg-primary hover:bg-secondary hover:border-primary"}
                        ${selectedCategory !== category && "border border-[#888]"}
                        ${selectedCategory === category && "bg-primary text-[#000] border-primary"}
          `}
            onClick={() => setSelectedCategory(category)}
          >
            {category.toUpperCase()}
          </button>)}

      </div>
      <div className='languages my-10'>
        <h1 className='mx-9 font-[600] text-[30px]'>Language</h1>
        {languages.map((language, idx) =>
          <button
            key={idx}
            onClick={() => setSelectedLanguage(language)}
            className={`px-5 py-2 mx-5 my-2.5  rounded-md font-[600]
            ${selectedLanguage !== language && "hover:bg-primary hover:bg-secondary hover:border-primary"}
            ${selectedLanguage !== language && "border border-[#888]"}
            ${selectedLanguage === language && "bg-primary text-secondary border-primary"}
`}
          >
            {language}
          </button>)}
      </div>
      <button
        className='px-5 py-2 mx-[50%] my-[20px] -translate-x-[50%] bg-primary rounded-md text-secondary font-[600]'
        onClick={handleSubmit}
      >
        Done
      </button>
    </div>
  )
}

export default LanguagePopup