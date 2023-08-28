import { createContext, useState } from "react";
import { supabase } from "../supabase/supabaseConfig";


const {getItems} = createContext({CategoryContext})


const CategoryProvider = ({children}) => {
    const [items, setItems] = useState([])

    const getItems = async () => {
        try {
            const { data, error } = await supabase.from('categories').select()

            if (data) {
                console.log(data)
            }

            if (error) {
                console.log(error)
            }

        } catch (error) {
            console.log(error)
        }
    }
}

