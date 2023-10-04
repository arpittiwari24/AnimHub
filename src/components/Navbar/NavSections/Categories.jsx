import { useEffect, useState } from "react";
import { getAllCategories } from "../../../apis/category.api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getAllCategories();
      setCategories(response);
    };

    return () => {
      fetchCategories();
    };
  }, []);

  return (
    <>
      <div className="w-full h-full flex justify-between items-center py-6 px-10">
        <div className="w-full h-full flex flex-col justify-start items-start">
          <h1 className="text-2xl font-bold">Categories</h1>
          <ul className="flex flex-wrap justify-start items-center gap-4 mt-4">

            {categories?.map((category) => (
              <li
                key={category._id}
                className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg cursor-pointer"
              >
                {category.name}
              </li>
            ))}

            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg cursor-not-allowed">
              More coming soon...
            </li>
          </ul>
        </div>
        <div
          className="w-[60%] h-full flex flex-col justify-center items-center"
          style={{ display: "none" }}
        >
          Hello
        </div>
        <div
          className="w-[15%] h-full flex flex-col justify-center items-center"
          style={{ display: "none" }}
        >
          Hello
        </div>
      </div>
    </>
  );
};

export default Categories;
