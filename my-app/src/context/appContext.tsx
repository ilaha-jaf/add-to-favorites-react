import { createContext,ReactNode,useState,useContext } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }
export const AppContext =createContext<any>(null);

export const useAppContext=()=>{
    const context=useContext(AppContext)
    if(context===undefined){
        throw new Error('Appcontext must be within appContextProvider!')
    }
    return context
}

type AppContextProvider_T = {
    children: ReactNode
}
const AppContextProvider=({children}:AppContextProvider_T)=>{
    

    const [favorites, setFavorites] = useState<Product[]>([]);

    const addToFavorites=(product:any)=>{
const oldFavorites=[...favorites];
const newFavorites=oldFavorites.concat(product);
setFavorites(newFavorites);
    }
    const removeFromFavorites=(id:any)=>{
const oldFavorites=[...favorites]
const newFavorites=oldFavorites.filter((product)=>product.id!==id)
    setFavorites(newFavorites)
}
    return (
     <AppContext.Provider value={{favorites, addToFavorites,removeFromFavorites}}>
        
     {children}</AppContext.Provider>
    )
}
export default AppContextProvider