import Recent from "../../Other/Recent";
// import RecentBlogs from "../../Other/RecentBlogs";
import Allblogs from "../Allblogs";
import Banner from "../Banner";

const Home = () => {
    return (
        <div>

            <Banner />


            <div className=" flex">
                <div className="w-3/4 ml-12">
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