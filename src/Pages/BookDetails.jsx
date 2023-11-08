import { useLoaderData } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";

const BookDetails = () => {
    const bookDetails = useLoaderData()
    console.log(bookDetails)
    const {photo,category,date,longDescription,shortDescription,titel,writers}=bookDetails
    
    const axios= useAxios()
    const {user}= useContext(AuthContext)
  

    const handleWishlist=(e)=>{
        e.preventDefault()
        // console.log("kdjfkjf")
        const email =user.email
        const bookName= titel
        const bookCategory= category
        const information={email,bookName,bookCategory}
        axios.post('/wishlist',information)
        .then(res=>{
            if(res.data?.acknowledged){
                Swal.fire('Book added in wishlist!')
         
            }
        })
        .catch((err)=>{
            console.err("error",err.message)
        })
    }



    return (
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
    );
};

export default BookDetails;