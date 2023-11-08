/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";


const Login = () => {

    const  {user, signInUser,googleSignUp, logOut} =useContext(AuthContext)
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const location =useLocation()
    const navigate = useNavigate();
    const axios=useAxios()

console.log(user)
   const handleSubmit =async(e)=>{
        e.preventDefault()
          const toastLoading = toast.loading("Loggin in")
        try{
            const user =await signInUser(email,password)
             console.log(user.user.email)
           const res= await axios.post('/jwt',{
            email: user.user.email
           })
           console.log(res.data.success)
           if(res.data.success){
            toast.success("Logged in",{id: toastLoading})
            navigate(location?.state?location.state : "/" )
           }
           else{
            logOut()
           }
        console.log(res)
           
            console.log('login')
        
        }
        catch(err){
            toast.error(err.meassage)
            console.log(err)
        }

        // console.log(name,email,password)
   }

   const handleGoogleSignIn=()=>{
    googleSignUp()
    .then(result=>{
        setSuccess(Swal.fire(
            'Good job!',
            'Successfully Login!',
           
          ))
          navigate(location?.state?location.state : "/" )

        console.log(result.user)
    }) 
    .catch((error)=>{
        const errorMessage = error.message;
        setError(Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${errorMessage}`,
           
          }))
    })
    fetch('https://my-server-nslqzdmr1-ramohin1236.vercel.app/user',{
        method: "POST",
        headers:{
           "content-type":"application/json"
        },
        body: JSON.stringify()
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
      })
    

}




    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          <div>
           
          </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
            onSubmit={handleSubmit}
            className="card-body">
            <div className="form-control">

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" 
                  onBlur={(e)=>setEmail(e.target.value)}
                required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered"
                  onBlur={(e)=>setPassword(e.target.value)}
                required />
                <label className="label">
                  <p >First in this site? <span className="text-xl font-bold hover:text-orange-500 cursor-pointer"><Link to='/registration'>Registration</Link></span></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline hover:text-white ">Login</button>
              </div>
              <div className="form-control mt-6">
                <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline hover:text-white "><FaGoogle/> Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;