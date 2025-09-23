import React, { useState } from 'react'
import "./Home.css"
import { useEffect } from 'react'
import axios from 'axios'


export const Home = () => {
    const [products,setProducts] =useState([])
    const [category,setCategory] =useState("")

    useEffect(()=>{

        const fetchProduct=async()=>{
            try {
                const url = `https://dummyjson.com/products/categories`

                const response = await axios.get(`https://dummyjson.com/products/categories`)
                setProducts(response.data)
            } catch (error) {
                setProducts([])
            } 
        }
        fetchProduct()
    },[category])

    return (
        <div>
            <section>
                <div className='hero-content'>
                <h1>Welcome to our Ecommerce App</h1>
                <p>A place where you can get all affordable products</p>
                <button className='hero-button'>Explore</button>
                </div>
            </section>
        </div>
    )
}

