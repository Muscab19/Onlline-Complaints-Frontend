import { Toaster, toast } from "react-hot-toast";

function Details({ close, complaint, onDelete }) {
    const handleDelete = async () => {
        try {
            await onDelete(complaint._id); 
            toast.success("Complaint deleted successfully!");
            close(); 
        } catch (error) {
            toast.error("Failed to delete complaint. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="bg-white w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto p-6 md:p-8 rounded-xl shadow-lg relative">
                <i onClick={close} className="fa-solid fa-xmark cursor-pointer absolute top-4 right-4 text-xl text-gray-700 hover:text-gray-500 transition-colors"></i>
                <h2 className="text-2xl font-bold mb-4">Complaint Details</h2>
                <p><strong>Title:</strong> {complaint.title}</p>
                <p><strong>Description:</strong> {complaint.Description}</p>
                <p><strong>Date:</strong> {new Date(complaint.date).toLocaleString()}</p>
                <div className="flex justify-end mt-6 space-x-4">
                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-lg font-semibold transition-colors">
                        Delete
                    </button>

                    <button onClick={close} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-lg font-semibold transition-colors">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Details;
