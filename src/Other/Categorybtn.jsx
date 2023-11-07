/* eslint-disable react/prop-types */


const Categorybtn = ({cat}) => {
    return (
        <div>
        <button className="btn btn-outline btn-primary w-20 md:w-full">{cat.category}</button>
        </div>
    );
};

export default Categorybtn;