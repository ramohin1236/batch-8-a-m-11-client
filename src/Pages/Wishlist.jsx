
import useAxios from "../Hooks/useAxios";

import { useQuery } from "@tanstack/react-query";
import { auth } from "../../public/firebase.config";
import WishlistCart from "./WishlistCart";

const Wishlist = () => {


    const axios =useAxios()

    const {data: bookings } =useQuery({
        queryKey: ['bookings'],
        queryFn: async()=>{
    const email=auth.currentUser.email;

            const res = await axios.get(`/wishlist?email=${email}`)
            return res
        }
    })
    // const [list, setList]=useState([])
    console.log(bookings)

    // console.log(list)
    // const axios =useAxios()

    // axios.get('/wishlist')
    // .then(res=>{
    //     if(user.email === list.email)
    //     setList(res.data)
    // })

    return (
        <div>
          <div className="py-40 bg-black text-center text-gray-300 px-4">
                <h2 className="text-4xl leading-snug font-bold mb-5">Welcome to Wishlist Books Page</h2>
            </div>
            <div className="container mx-auto mt-20 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    bookings?.data?.map(item=><WishlistCart
                    key={item._id}
                    item={item}
                    bookings={bookings}
                    ></WishlistCart>)
                }
            </div>
        </div>
    );
};

export default Wishlist;