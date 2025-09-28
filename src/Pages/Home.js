import React, { useState, useEffect } from 'react'; 
import "./Home.css";
import axios from 'axios';


const Home = () => {
const [products, setProducts] = useState([]);
const [category, setCategory] = useState("");
const [err, setErr] = useState("");
const [url,setUrl] = useState('https://dummyjson.com/products/categories')

useEffect(() => {
    const fetchProduct = async () => {
    try {
        // let url = 'https://dummyjson.com/products/categories'; 

        const response = await axios.get(url);
        setProducts(response.data); 
        setErr(""); 
    } catch (error) {
        setProducts([]);
        setErr(error.response?.data?.message);
    }
    };
    fetchProduct();
}, [url]); 

    

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
            <p className='category-items' onClick={() => setUrl("https://dummyjson.com/products/category/beauty")}>Beauty</p> 
            <p className='category-items' onClick={() => setCategory("laptops")}>Laptops</p>
            <p className='category-items' onClick={() => setCategory("fragrances")}>Fragrances</p>
            <p className='category-items' onClick={() => setCategory("kitchen-appliances")}>Kitchen</p>
            <p className='category-items' onClick={() => setCategory("mobile-accessories")}>Mobile Fragrances</p>
        </div>
        </div>
    </section>
    <section>
        <h1>Browse through our available products</h1>
        <div className='allproducts'>
    
            {products.map((items) => 
            
            <div className='products' key = {items}>
                    
                    <h2>{items.slug}</h2>
                    <p>{items.name}</p>
                    <button className='btn'>Buy</button>
                </div>
            )}
            </div>
    </section>
    {products.length ===0 && <h1>{err}</h1>}
    </div>
);
};

export default Home; 