/* eslint-disable react/prop-types */




const BlogsCart = ({blog}) => {
    const {category,date,photo,shortDescription,titel,writers}=blog
    return (
        <div className="card shadow-xl p-4 bg-orange-100 h-[600px]">
        <figure><img className="w-72 h-64 rounded-lg object-cover" src={photo}alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
           {titel}
            <div className="badge bg-orange-500 h-8">{category}</div>
          </h2>
          <p>{shortDescription.slice(0,100)}</p>
          <div>
            <p className="font-bold">authors: {writers}</p>
            <p className="font-medium mt-5">published: {date}</p>
          </div>
          <div className="card-actions justify-end">
            <button
             
            className="badge badge-outline hover:bg-orange-600 hover:text-white">Details</button>
            {/* <div className="badge badge-outline">Products</div> */}
          </div>
        </div>
      </div>
    );
};

export default BlogsCart;