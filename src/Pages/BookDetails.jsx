import { useLoaderData } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";
import BookDetailsCartt from "./BookDetailsCartt";

const BookDetails = () => {
    const bookDetails = useLoaderData()
    const [getcomment,setGetComment]=useState([])
    console.log(bookDetails)
    const { photo, category, date, longDescription, shortDescription, titel, writers } = bookDetails

    const axios = useAxios()
    const { user } = useContext(AuthContext)


    const handleWishlist = (e) => {
        e.preventDefault()
        // console.log("kdjfkjf")
        const email = user.email
        const bookName = titel
        const bookCategory = category
        const information = { email, bookName, bookCategory }
        axios.post('/wishlist', information)
            .then(res => {
                if (res.data?.acknowledged) {
                    Swal.fire('Book added in wishlist!')

                }
            })
            .catch((err) => {
                console.err("error", err.message)
            })
    }

    const handleComment=(e)=>{
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        // console.log("jaj")
        const email = user.email
        const bookName = titel
        const information = { email, bookName,comment }
    //    console.log(information);
        axios.post('https://book-blog-server.vercel.app/comment', information)
            .then(res => {
                console.log(res);
                if (res.data?.acknowledged) {
                    Swal.fire('Book added in wishlist!')

                }
            })
            .catch((err) => {
                console.err("error", err.message)
            })
    }
  
    useEffect(()=>{
        axios.get('https://book-blog-server.vercel.app/comment')
        .then(res=>setGetComment(res.data))
    },[axios])
    
     
console.log(getcomment);


    return (
        <div>
            <div className="mt-10 container mx-auto md:flex mb-20">
                <div className="flex-1">
                    <img className="w-[500px] h-[550px] rounded-xl object-cover" src={photo} alt="" />
                    <h1 className="text-xl font-primary font-bold" >{category} </h1>
                </div>
                <div className="ml-10 flex-1">
                    <h1 className="text-4xl font-primary font-bold" >{titel}</h1>

                    <h1 className="text-xl font-primary font-bold" >[{writers}] </h1>

                    <p>{shortDescription}</p>
                    <p>{longDescription}</p>
                    <p className="mt-8 font-semibold">submited date: {date}</p>
                </div>
                
                <div>
                    
                    <button
                        onClick={handleWishlist}
                        className="btn bg-orange-400 hover:bg-orange-700 bg:text-white">Wishlist</button>
                </div>
                <div>

                </div>




            </div>
            <div className="flex flex-col w-full">
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Comment</div> 
  <div>
    {
        getcomment.map(cmnt=><BookDetailsCartt
        cmnt={cmnt}
        key={cmnt._id}
        ></BookDetailsCartt>)
    }
  </div>
  <div className="divider"></div> 
  
</div>
            <div className="container mx-auto">
               
               <form onSubmit={handleComment}>
               <label className="text-xl font-semibold">Write a comment</label> <br />
                <textarea placeholder="Bio" name="comment" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
                <br />
                <input className="btn btn-outline" type="submit" value="post" />
               </form>
               

            </div>
        </div>
    );
};

export default BookDetails;