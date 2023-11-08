import BlogsCart from "./BlogsCart";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";


const Allblogs = () => {


    
    const axios =useAxios()


     
     const getBooks =async()=>{
        const res = await axios.get('/getbooks');
        return res;
     }

     const {data: books,isLoading,isError,error} = useQuery({
        queryKey: ['books'],
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books?.data?.result.map(blog=><Link 
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