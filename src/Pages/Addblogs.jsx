import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Authentication/AuthProvider";

const Addblogs = () => {
    const {user}= useContext(AuthContext)
    const [selectedPhotoFile, setSelectedPhotoFile] = useState(null);
    const [startDate, setStartDate] = useState(new Date());

    const handleFileChange = (e) => {
        const photoFile = e.target.files[0];
        setSelectedPhotoFile(photoFile);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const titel = form.titel.value;
        const photo = form.photo1.value;
        const category = form.category.value;
        const shortDescription = form.short.value;
        const longDescription = form.long.value;
        const writers = form.writers.value;
        const emails = form.email.value;
        const date = form.date.value;
        const info = {titel,photo,category,shortDescription,longDescription,writers,emails,date}
        console.log(info)

        axios.post('https://book-blog-server.vercel.app/postbooks',info)
        .then((res)=>{

            if(res.data?.acknowledged){
                Swal.fire('Book is added!')
                form.reset()
            }
            // console.log("daata",res.data)
        })
        .catch((err)=>{
            console.err("error",err.message)
        })
    }

    return (
        <div className="font-primary ">
            <div className="py-40 bg-black text-center text-gray-300 px-4">
                <h2 className="text-4xl leading-snug font-bold mb-5">Welcome to add Books Page</h2>
            </div>
            <div className="max-w-7xl mx-auto mt-12 ">
                {/* img url addded */}
                {/* form submit createred */}
                <form
                onSubmit={handleSubmit}
                className="text-center" action="">
                    <div className=" w-3/4 ">
                        <h2>Upload Book Photo</h2>
                        <input
                            className="cursor-pointer"
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        {selectedPhotoFile && (
                            <div>
                                <p>Selected File: {selectedPhotoFile.name}</p>
                                <img
                                    src={URL.createObjectURL(selectedPhotoFile)}
                                    alt="Selected"
                                    style={{ maxWidth: '200px' }}
                                />
                            </div>
                        )}
                    </div>

                    <div className="w-3/4 mt-5">
                        <label className="text-lg bg-slate-200 py-3 rounded-md px-3 -mr-2 font-semibold">Books Titel</label>
                        <input type="text" placeholder="Books Titel" name="titel" className="input input-bordered input-primary w-full max-w-xs" />
                        
                        <br />
                        <br />

                        <label className="text-lg bg-slate-200 py-3 rounded-md px-3 -mr-2 font-semibold">Photo Url</label>
                        <input type="text" placeholder="Enter photo url here" name="photo1" className="input input-bordered input-primary w-full max-w-xs" />
                        
                        <br />
                        <br />

                        <label className="text-lg bg-slate-200 py-3 rounded-md px-3 -mr-2 font-semibold">Books category</label>
                        <select name="category" className="select select-success w-full max-w-xs">
                            <option disabled selected>Pick your favorite category</option>
                            <option>Islamic</option>
                            <option>Fresh with book</option>
                            <option>Bangla literature</option>
                            <option>English literature</option>
                            <option>Invent with science</option>
                            <option>Travell with books</option>
                            <option>Adventure books</option>
                        </select>
                                  <br /><br />
                        <label className="text-lg bg-slate-200 py-3 rounded-md px-3 -mr-2 font-semibold">Short Description</label>
                        <input type="text" name='short' placeholder="Books Short Description"className="input input-bordered input-primary w-full max-w-xs" />
                                
                                  <br /><br />
                        <label className="text-lg bg-slate-200 py-3 rounded-md px-3 -mr-2 font-semibold">Long Description</label>
                        <input type="text" name='long' placeholder="Books Long Description"className="input input-bordered input-primary w-full max-w-xs" />

                        
                        <br /><br />
                        <label className="text-lg bg-slate-200 py-3 rounded-md px-3 -mr-2 font-semibold"> Writers</label>
                        <input type="text" name='writers' placeholder="Books Long Description"className="input input-bordered input-primary w-full max-w-xs" />
                      
                        <br /><br />
                        <label className="text-lg bg-slate-200 py-3 rounded-md px-3 -mr-2 font-semibold"> Email</label>
                        <input type="text" name='email' defaultValue={user.email} placeholder="Books Long Description"className="input input-bordered input-primary w-full max-w-xs" />

                        
                        <br /><br />
                        <label className="text-lg bg-slate-200 py-3 rounded-md px-3 -mr-2 font-semibold">Added Date</label>
                        <DatePicker name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
                        <br /><br />

                        <input type="submit" value="submit" className="cursor-pointer bg-orange-400 px-6 py-2 font-semibold rounded-lg text-white hover:bg-orange-600  transition-all duration-300 ease-in" />
                       
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addblogs;