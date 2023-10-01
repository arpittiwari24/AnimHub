import React, {useState, createContext} from 'react'

export const CategoryLangContext = createContext({})



const CategoryLangContextProvider = ({children}) => {
    const [langCategory, setLangCategory] = useState({
        category: "",
        language: "",
    })
    return (
        <CategoryLangContext.Provider value={{ langCategory, setLangCategory }}>
            {children}
        </CategoryLangContext.Provider>
    )
}

export default CategoryLangContextProvider