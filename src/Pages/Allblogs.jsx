/* eslint-disable no-unused-vars */
import BlogsCart from "./BlogsCart";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


const Allblogs = () => {



    const axios = useAxios()



    const [category, setCategory] = useState('')
    const [categories,setCategories] = useState('')
    const [date, setDate] = useState('')
    // console.log(category)
    console.log(categories)



    // axios.get('/getcategory')
    // .then(res=>{
    //     setCategory(res.data)
    // })

    // useEffect(()=>{
    //     axios.get("https://book-blog-server.vercel.app/getcategory")
    //     .then(res=>{
    //         setCategories(res.data)
    //     })
    // }
    // ,[axios])


    // get books category
    // const getCategory = async()=>{
    //     const res =await axios.get(

    //         `https://book-blog-server.vercel.app/getbycategory?category=${category}`,


    //     )
    // }
    // const { data: books } = useQuery({
    //     queryKey: ['categories', category],
    //     queryFn: getCategory
    // })

   
    // console.log(categories)







// sort
    const getBooks = async () => {
        const res = await axios.get(`/getbooks?sortField=price&sortOrder=${date}`,
        // `https://book-blog-server.vercel.app/getbycategory?category=${category}`
        );
        console.log(res)
        return res;
    }

    const { data: books, isLoading, isError, error } = useQuery({
        queryKey: ['books' ,date,categories],
        queryFn: getBooks
    })
    if (isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (isError) {
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

            <div className=" mt-6 mb-8">
                {/* {
                     category.map(cat=> <button
                     key={cat._id}
                     onClick={(e)=>setUniqueC(e.target.value)}
                     className="btn btn-outline btn-primary w-20 md:w-full">{cat.category}</button>)
            } */}
            <label htmlFor="">Category</label>
            <br />
                <select 
                onChange={(e)=>setCategory(e.target.value)}
                className="select select-primary w-full max-w-xs">
               
                        {/* {
                            categories.map((item)=>(
                                <option
                                key={item._id}
                                >{item.category}</option>
                            ))
                        } */}
                        
                    {/* <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option> */}
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books?.data?.result.map(blog => <Link
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