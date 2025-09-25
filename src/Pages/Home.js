import React, { useState, useEffect } from 'react'; 
import "./Home.css";
import axios from 'axios';

//Correct back to normal code
const Home = () => {
const [products, setProducts] = useState([]);
const [category, setCategory] = useState("");
const [err, setErr] = useState("");

useEffect(() => {
    const fetchProduct = async () => {
    try {
        let url = 'https://dummyjson.com/products/categories'; 
        if (category) {
        url = `https://dummyjson.com/products/category/${category}`; 
        }
        const response = await axios.get(url);
        setProducts(response.data); 
        setErr(""); 
    } catch (error) {
        setProducts([]);
        setErr(error.response?.data?.message || "Failed to fetch data");
    }
    };
    fetchProduct();
}, [category]); 

const renderItem = (item) => {
    if (typeof item === 'string') {
    
    return (
        <div className='products' key={item}>
        <h2>{item}</h2>
        <p>Category: {item}</p>
        </div>
    );
    } else {
    
    return (
        <div className='products' key={item.id || item.slug}>
        <h2>{item.title || item.slug}</h2> 
        <p>{item.name || item.description || item.slug}</p>
        
    </div>
    );
    }
};

return (
    <div>
    <section>
        <div className='hero-content'>
        <h1>Welcome to our Ecommerce App</h1>
        <p>A place where you can get all affordable products</p>
        <button className='hero-button'>Explore</button>
        </div>
    </section>

    <section>
        <div className='categories'>
        <h1>Product Categories</h1>
        <div className='allcategories'>
            <p className='category-items' onClick={() => setCategory("smartphones")}>Smartphones</p> 
            <p className='category-items' onClick={() => setCategory("laptops")}>Laptops</p>
            <p className='category-items' onClick={() => setCategory("fragrances")}>Fragrances</p>
        </div>
        </div>
    </section>
    <section>
        <h1>Browse through our available products</h1>
        <div className='products'>
        {products.length > 0 ? (
            products.map((item) => renderItem(item))
        ) : (
            <p>No products available yet...</p>
        )}
        </div>
    </section>
    {err && <h1>Error: {err}</h1>}
    </div>
);
};

export default Home; 