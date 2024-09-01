import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MakeComplaint({ close }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); 

    const handleRegisterComplaint = (e) => {
        e.preventDefault();

        if (title === "" || description === "") {
            setError(true);
        } else {
            setError(false);

            const newComplaint = {
                title: title,
                Description: description,  
                date: new Date().toISOString()
            };

            // Save to backend
            axios.post("http://localhost:3000/create", newComplaint)
                .then(() => {
                    toast.success('Complaint added successfully!');
                    navigate("");  
                })
                .catch((error) => {
                    console.log(error);
                });

            // Optionally, save to localStorage as well
            const getData = localStorage.getItem("Data");
            let Data = getData ? JSON.parse(getData) : [];
            Data = [...Data, newComplaint];
            localStorage.setItem("Data", JSON.stringify(Data));
        }
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50" style={{ backgroundColor: 'rgba(0, 0, 2, 0.5)' }}>
            <div className="bg-white w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto p-6 md:p-8 rounded-xl shadow-lg relative">
                <i onClick={close} className="fa-solid fa-xmark cursor-pointer absolute top-4 right-4 text-xl text-gray-700 hover:text-gray-500 transition-colors"></i>

                {error && <p className="text-red-500">Please fill out all fields</p>}

                <h2 className="text-2xl font-bold mb-4">Send Your Complaints Here</h2>
                <form>
                    <input
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        className="w-full mb-4 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        type="text"
                        placeholder="Enter title"
                    />
                    <textarea
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        className="w-full mb-4 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        rows={8}
                        placeholder="Write Details here"
                    ></textarea>
                    <button onClick={handleRegisterComplaint} type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 mt-2 rounded-lg text-lg font-semibold transition-colors">
                        Save
                    </button>
                    <Toaster />
                </form>
            </div>
        </div>
    );
}

export default MakeComplaint;
