import { useEffect, useState } from "react";
import BlogsCart from "./BlogsCart";
import { Link } from "react-router-dom";


const Allblogs = () => {


    const [blogs,setBlogs]=useState([]);
console.log(blogs)
     
         useEffect(()=>{
            async function fetchBlogs(){
                let url ='http://localhost:5000/getbooks'

                const response = await fetch(url);
                const data= await response.json();
                setBlogs(data)
            }
            fetchBlogs()
         },[])
    

    return (
        <div>
            {/* <div className="py-40 bg-black text-center text-gray-300 px-4">
                <h2 className="text-4xl leading-snug font-bold mb-5">Welcome to All Books Page</h2>
            </div>
            <div className="max-w-7xl mx-auto">
            <Blogs/>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    blogs.map(blog=><Link 
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