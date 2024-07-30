import { useEffect, useState } from "react";
import axios from "axios";
import "./products.css";
import { useAppContext } from "../context/appContext";

export default function Product() {
    const [products, setProducts] = useState<any[]>([]);
    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    const favoritesChecker = (id: number) => {
        return favorites.some((product: { id: number }) => product.id === id);
    };

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="product-container">
            {products?.map((product: any) => (
    <div key={product.id} className="product-card">
        <p>{product.title}</p>
        <img src={product.image} alt={product.title} />
        <p>{product.price}</p>
        {favoritesChecker(product.id) ? (
        <button className="favorites-btn" onClick={() => removeFromFavorites(product.id)}>
         Remove from favorites</button>
        ) : (
        <button className="favorites-btn" onClick={() => addToFavorites(product)}>
        Add to favorites
        </button>
        )}
        </div>
            ))}
        </div>
    );
}
