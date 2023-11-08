import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import RecentDetails from "./RecentDetails";
import { useState } from "react";

const Recent = () => {
    const axios =useAxios()
    const [date, setDate]=useState('')

  console.log(date)
  
  

    const getBooks =async()=>{
       const res = await axios.get(`/recent?sortField=date&sortOrder=${date}`);
       console.log(res)
       return res;
    }

    const {data: books,isLoading,isError,error} = useQuery({
       queryKey: ['books',date],
       queryFn: getBooks
    })
    if(isLoading){
       return <span className="loading loading-spinner loading-lg"></span>
    }
    if(isError){
       return <p className="text-red-500">{error}</p>
    }
    console.log(books?.data)
    return (
        <div className="">
               <p className="text-center font-bold font-primary text-lg">Recent Blogs</p>
               <div>
                <input className="btn btn-primary"   onClick={(e)=>setDate(e.target.value)} type="submit" value="asc" />
                </div>
               <div className="grid gap-4 grid-cols-1 p-8">
               {
                    books?.data?.slice(0,6).map(blog=><RecentDetails
                    key={blog._id}
                    blog={blog}
                    >
                    
                    </RecentDetails>)
                }
               </div>
        </div>
    );
};

export default Recent;