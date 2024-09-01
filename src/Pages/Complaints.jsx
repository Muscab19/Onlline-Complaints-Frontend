import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Details from "../Components/Details";
import axios from "axios";

function Complaints() {
    const [complaint, setComplaint] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [selectedComplaint, setSelectedComplaint] = useState(null);

    // Fetching complaints data from the backend
    const handleGetData = () => {
        axios.get("http://localhost:3000/complaints")
            .then((response) => {
                setComplaint(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        handleGetData();
    }, []);

    const handleClose = () => {
        setOpen(false);
        setSelectedComplaint(null);
    };

    const handleOpen = (complaint) => {
        setSelectedComplaint(complaint);
        setOpen(true);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/delete/${id}`)
            .then(() => {
                // toast.success('Complaint Deleted successfully!');
                handleGetData(); // Refresh the complaint list
            })
            .catch((error) => console.log(error));
    };
    

    const truncateDescription = (Description) => {
        const words = Description.split(" ");
        return words.length > 2 ? `${words.slice(0, 2).join(" ")}...` : Description;
    };

    return (
        <div className="ml-[20px] mt-[10px] absolute">
            <h1 className="text-green-600 font-semibold text-3xl">
                All Complaints
            </h1>
            <div>
                <table className="w-full text-center flex flex-col gap-6">
                    <thead>
                        <tr>
                            <th className="border-b-2 p-1 pr-[150px] text-lg">S.N</th>
                            <th className="border-b-2 p-1 pr-[150px] text-lg">Title</th>
                            <th className="border-b-2 p-1 pr-[150px] text-lg">Description</th>
                            <th className="border-b-2 p-1 pr-[150px] text-lg">Date</th>
                            <th className="border-b-2 p-1 pr-[100px] text-lg">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {complaint.map((data, index) => {
                            const dateObject = new Date(data.date);
                            const formattedDate = isNaN(dateObject) ? "Invalid Date" : dateObject.toLocaleString();
                            return (
                                <tr key={index}>
                                    <td className="border-b-2 p-1 pr-[150px] text-lg">{index + 1}</td>
                                    <td className="border-b-2 p-1 pr-[150px] text-lg">{data.title}</td>
                                    <td className="border-b-2 p-1 pr-[150px] text-lg">{truncateDescription(data.Description)}</td>
                                    <td className="border-b-2 p-1 pr-[150px] text-lg">{formattedDate}</td>
                                    <td className="border-b-2 p-1">
                                        <button onClick={() => handleOpen(data)} className="bg-green-500 p-1 rounded font-semibold text-white">Details</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {isOpen && selectedComplaint && (
                    <Details 
                        close={handleClose} 
                        complaint={selectedComplaint} 
                        onDelete={handleDelete} 
                    />
                )}
            </div>
            <Toaster />
        </div>
    );
}

export default Complaints;
