import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";


const Login = () => {

    const  {user, signInUser} =useContext(AuthContext)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const location =useLocation()
    const navigate = useNavigate();
console.log(user)
   const handleSubmit =async(e)=>{
        e.preventDefault()
          const toastLoading = toast.loading("Loggin in")
        try{
            await signInUser(email,password)
           toast.success("Logged in",{id: toastLoading})
           navigate(location?.state?location.state : "/" )
            console.log('login')
        
        }
        catch(err){
            toast.error(err.meassage)
            console.log(err)
        }

        // console.log(name,email,password)
   }






    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;