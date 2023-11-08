/* eslint-disable react/prop-types */
import { } from 'react-icons/fa'
import Swal from 'sweetalert2';
import useAxios from '../Hooks/useAxios';
import { useState } from 'react';





const WishlistCart = ({ item,bookings }) => {

    const axios = useAxios()
    // console.log(axios)     

    const { _id, bookName, bookCategory } = item;

    const {data}=bookings
    
    // console.log(data)
    // console.log(bookings.data)

    const [books, setBooks]=useState(data)
// console.log(data)



console.log(data)
console.log(books)

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`/book/${_id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = books.filter(bk=>bk._id !== _id);
                                setBooks(remaining)
                              
                                // console.log("delete confirm")
                        }
                    })

            }
        });
    }

    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <p>{bookCategory}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-primary">Delete</button>

                </div>
            </div>
        </div>
    );
};

export default WishlistCart;