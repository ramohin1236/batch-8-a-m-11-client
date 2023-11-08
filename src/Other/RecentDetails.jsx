/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const RecentDetails = ({blog}) => {
    return (
        <div className="w-full mr-44">
            <div className="card h-96 bg-cover bg-base-100 shadow-xl">
        <figure><img src={blog.photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
         {blog.titel}
            <div className="badge badge-secondary">NEW</div>
          </h2>
         
          <div className="card-actions justify-end">
          <Link><button className="badge badge-outline hover:bg-orange-600 hover:text-white">Details</button></Link>

            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default RecentDetails;