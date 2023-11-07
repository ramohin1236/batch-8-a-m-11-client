import Category from "../../Other/Category";
import Allblogs from "../Allblogs";
import Banner from "../Banner";

const Home = () => {
    return (
        <div>

            <Banner />


            <div className="w-9/12">
                <div>
                    <Category/>
                    <Allblogs />
                </div>
                <div>
                    <p>right navigate</p>
                </div>
            </div>
        </div>
    );
};

export default Home;