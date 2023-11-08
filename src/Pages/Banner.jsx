import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";



const Banner = () => {
    const axios =useAxios()

    const handleSubmit =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email= form.email.value;
        const info ={email}
        axios.post('/subscribe',info)
        .then(res=>{
            if(res.data.acknowledged){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Congratulation!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
          
            
        })
     
    }

    return (
        <div className="px-4 py-28 mx-auto bg-black">


            <div className=" lg:flex  ">
                <div className=" lg:w-[900px] h-[500px]">
                    <img className="w-full object-cover h-full rounded-md" src="/public/book.jpg" alt="" />
                </div>
                <div className=" flex-1  ml-5 text-gray-300 font-primary">

                    <p className="text-4xl lg:text-5xl  font-bold mb-5 align-middle text-center lg:mt-36 text-gray-200">Book <span className="text-orange-500">Hub</span></p>
                    <p>At <span className="text-2xl font-bold">Book <span className="text-orange-500">Hub</span></span>, we are devoted to the magic of books. Dive into our world of literary adventures, where each page offers a new story, a fresh perspective, and a chance to escape into the boundless realms of the written word. Join us on a journey of discovery and celebrate the art of storytelling.

                        Replace <span className="text-2xl font-bold">Book <span className="text-orange-500">Hub</span></span>  with your actual blog name for a personalized touch.

                    </p>

                    <div className="mt-8 text-center">
                        <Link to='' className="font-extrabold hover:text-orange-500 inline-flex items-center text-center">Learn More <FaArrowRight className=" ml-2"/></Link>
                    </div>
                    <header className="footer-title mt-16">Newsletter</header>
                       <form 
                       onSubmit={handleSubmit}
                       action="">
                       <input type="email" name="email" placeholder="Email here" className="input input-bordered input-secondary w-full max-w-xs text-black"  />
                         <input type="submit" value="Subscribe" className="btn hover:bg-orange-500 hover:text-white" />
                       </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;