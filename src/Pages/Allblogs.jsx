import Blogs from "./Blogs";

const Allblogs = () => {
    return (
        <div>
            <div className="py-40 bg-black text-center text-gray-300 px-4">
                <h2 className="text-4xl leading-snug font-bold mb-5">Welcome to All Books Page</h2>
            </div>
            <div className="max-w-7xl mx-auto">
            <Blogs/>
            </div>
        </div>
    );
};

export default Allblogs;