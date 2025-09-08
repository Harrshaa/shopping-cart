
import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";const Home=()=>{
    const [products,setProducts]= useState([]);
    const [page,setPage]=useState(1);

    const fetchProduct=async()=>{
        const data = await fetch("https://dummyjson.com/products?limit=100");
        const json = await data.json();
      

        if(json && json.products) setProducts(json.products);

    }
    useEffect(()=>{
        fetchProduct();

    },[])

    return (
        <div>
        {products.length > 0 && <div className="products border border-black flex flex-wrap  m-8">
            {products.slice(page*10 -10,page*10).map((item,index)=>{
                return (
                <span key={item.id} className='flex flex-col items-center w-40' >
                    <img  src={item.thumbnail} alt={item.title}/> 
                    <span>{item.title}</span>
                </span>
                )
            })}
            
            </div>}


            { products.length > 0 && <div className='flex justify-center'>
                <span>◀️</span>

                {
                    [...Array(products.length/10)].map((_,i)=> {
                        return <button onClick={()=> setPage(i)}
                        className="mx-4 w-6 border border-black" key={i}>{i+1}</button>
                    })
                }

                
                
                
                </div>}
            
        </div>

    )
     
    
}

export default Home;