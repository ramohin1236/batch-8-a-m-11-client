/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {

    const  {user, createUser} =useContext(AuthContext)
    const [name,setName]=useState('')
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate();
console.log(user)
   const handleSubmit =async(e)=>{
        e.preventDefault()
        if(password.length <6 ){
            setError(Swal.fire({
                icon: 'error',
            
                text: 'Password should be at least 6 character!'
                
              }))
            
            return
        }
        else if(!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~]).{6,}$/.test(password)){
            setError(Swal.fire({
                icon: 'error',
            
                text: "password should have uppercase,lowercase,special charecter,and number"
                
              }))
                  
                     return
            }
            else{
                setSuccess(Swal.fire(
                    'Good job!',
                    'User created',
                    'success'
                  ))
            }
    

        try{
            await createUser(email,password)
            
            .then(result=>{
                console.log(result)
                setSuccess(Swal.fire(
                    'Good job!',
                    'user created successfully!',
                    'success'
                  ))
                  navigate('/')
                  e.target.reset()
             })
             .catch((error) => {
          
                const errorMessage = error.message;
               setError(Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${errorMessage}`,
               
              }))
                // ..
              })
            console.log('createad')
        
        }
        catch(err){
            console.log(err)
        }

        // console.log(name,email,password)
   }






    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration now!</h1>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
            onSubmit={handleSubmit}
            className="card-body">
            <div className="form-control">

                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Enter Name here" className="input input-bordered" 
                onBlur={(e)=>setName(e.target.value)}
                required />
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
                  <p >Already have an account? <span className="text-xl font-bold hover:text-orange-500 cursor-pointer"><Link to='/login'>Login</Link></span></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Registration;