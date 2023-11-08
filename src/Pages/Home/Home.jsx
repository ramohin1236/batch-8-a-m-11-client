import Recent from "../../Other/Recent";
// import RecentBlogs from "../../Other/RecentBlogs";
import Allblogs from "../Allblogs";
import Banner from "../Banner";

const Home = () => {
    return (
        <div>

            <Banner />


            <div className=" md:flex lg:flex">
                <div className="w-3/4 ml-12">
                    <p className="text-2xl font-bold text-center">All Blogs</p>
                    <Allblogs />
                </div>
                <div className=" ml-16 mt-20 w-72">
                    {/* <RecentBlogs/> */}
                        <Recent/>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;