import { useAppContext } from "../context/appContext";
import "./products.css"
const Favorite=()=>{

    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    const favoritesChecker = (id: number) => {
        return favorites.some((product: { id: number }) => product.id === id);
    };


    return (
        <div className="favorites-container">
            {favorites.length > 0 ? (favorites.map((product: any) => (
        <div key={product.id} className="product-card">
            <p>{product.title}</p>
            <img src={product.image} alt={product.title} />
            <p>{product.price}</p>
        <div>
    {favoritesChecker(product.id) ? (
    <button className="favorites-btn" onClick={() => removeFromFavorites(product.id)}>
     Remove from favorites</button>
    ) : (
    <button className="favorites-btn" onClick={() => addToFavorites(product)}>
     Add to favorites</button>
    )}
    </div>
    </div> ))
            ) : (
         <h1>You don't have any items yet</h1>
            )}
        </div>
    );
    
}
export default Favorite