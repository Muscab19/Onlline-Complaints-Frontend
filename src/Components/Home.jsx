import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MakeComplaint from "./Makeomplaint";

function Home() {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);

    const handleAdminArea = () => {
        navigate('/complaints');
    };
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return <div>
        <div className="px-10 flex py-4 bg-white top-0 left-0 ">
            <h1 className="text-4xl pl-10 font-bold tracking-wide">OCMS</h1>
            <ul className="flex space-x-8 font-semibold text-orange-500 pl-[25%] pr-[30%] text-3xl">
                <li className="cursor-pointer transition duration-300">Home</li>
                <li className="cursor-pointer transition duration-300">About Us</li>
            </ul>
            <button className="bg-orange-600 text-white font-bold text-2xl px-4 py-2 rounded-3xl shadow hover:bg-yellow-500 transition duration-300" onClick={handleAdminArea}>
                Admin Area
            </button>
        </div>
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white text-center py-[150px]">
            <h1 className="text-6xl pb-4 font-bold">Make Your Complaints way easier ever</h1>
            <p className="font-semibold">We are committed to solving your complaints. Make any complaints you could have.</p>
            <button onClick={handleOpen} className="bg-orange-600 text-white mt-10 font-bold text-2xl px-4 py-2 rounded-3xl shadow hover:bg-yellow-500 transition duration-300">
                Make Complaint
            </button>
            
            {isOpen && <MakeComplaint close={handleClose} />}
        </div>
    </div>
}

export default Home;
