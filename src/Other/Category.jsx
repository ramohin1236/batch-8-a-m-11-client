import axios from "axios";
import { useEffect, useState } from "react";
import Categorybtn from "./Categorybtn";



const Category = () => {
    const [category,setCategory]=useState([])
// console.log(category)
useEffect(()=>{
    axios.get("https://book-blog-server.vercel.app/getcategory")
    .then(res=>{
       setCategory(res.data)
    })
}
,[])
    return (
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-6 mb-8">
          
    
    {category.map(cat=><Categorybtn
    cat={cat}
    key={cat._id}
    ></Categorybtn>)}
    
    
 
        </div>
    );
};

export default Category;