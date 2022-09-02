import { createContext, useState } from "react";

export const SetTitleCate = createContext()

export const SetTitleCateProvider = ({ children }) => {

    const [title, setTitle] = useState("")

    const [image, setImage] = useState("")

    return (
        <SetTitleCate.Provider value={{ title, setTitle, image, setImage }} >
            {children}
        </SetTitleCate.Provider>
    )
}