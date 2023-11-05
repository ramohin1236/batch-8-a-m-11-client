import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
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

                </div>
            </div>
        </div>
    );
};

export default Banner;