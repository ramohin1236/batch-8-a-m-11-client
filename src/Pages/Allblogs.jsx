import BlogsCart from "./BlogsCart";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


const Allblogs = () => {


    
    const axios =useAxios()



const [category,setCategory]=useState(null)
const [uiqueC,setUniqueC]=useState('')
const [date,setDate]=useState('')
console.log(category)
// console.log(category)

     useEffect(()=>{
    axios.get('/getcategory')
    .then(res=>setCategory(res.data))
    },[])
// useEffect(()=>{
//     axios.get("http://localhost:5000/getcategory")
//     .then(res=>{
//        setCategory(res.data)
//     })
// }
// ,[])

     
     const getBooks =async()=>{
        const res = await axios.get(`/getbooks?sortField=price&sortOrder=${date}&category=${uiqueC}`);
        console.log(res)
        return res;
     }

     const {data: books,isLoading,isError,error} = useQuery({
        queryKey: ['books'],date,uiqueC,
        queryFn: getBooks
     })
     if(isLoading){
        return <span className="loading loading-spinner loading-lg"></span>
     }
     if(isError){
        return <p className="text-red-500">{error}</p>
     }
     console.log(books?.data?.result)
        
    

    return (
        <div>
            {/* <div className="py-40 bg-black text-center text-gray-300 px-4">
                <h2 className="text-4xl leading-snug font-bold mb-5">Welcome to All Books Page</h2>
            </div>
            <div className="max-w-7xl mx-auto">
            <Blogs/>
            </div> */}

            <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-6 mb-8">
            {/* {
                     category.map(cat=> <button
                     key={cat._id}
                     onClick={(e)=>setUniqueC(e.target.value)}
                     className="btn btn-outline btn-primary w-20 md:w-full">{cat.category}</button>)
            } */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books?.data?.result.map(blog=><Link 
                        to={`/bookDetails/${blog._id}`}
                        key={blog._id}>
                    <BlogsCart
                     blog={blog}
                    ></BlogsCart>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Allblogs;