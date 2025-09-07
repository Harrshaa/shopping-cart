import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
const App=()=>{

    const [products,setProducts]= useState([]);

    const fetchProduct=async()=>{
        const data = await fetch("https://dummyjson.com/products");
        const json = await data.json();
      

        if(json && json.products) setProducts(json.products);

    }
    useEffect(()=>{
        fetchProduct();

    },[])



    return (
      <div>
        {products.length > 0 && <div className="products my-8">
            {products.map((item,index)=>{
                return (
                <span key={item.id} className='flex flex-col items-center' >
                    <img  src={item.thumbnail} alt={item.title}/>
                    <span>{item.title}</span>
                </span>
                )
            })}
            
            </div>}
            
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);