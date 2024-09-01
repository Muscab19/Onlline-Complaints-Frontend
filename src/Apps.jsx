import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Complaints from "./Pages/Complaints";
import Logout from "./Pages/Logout";
import Sidenav from "./Components/Sidenav";

function Apps() {
    return (
        <div className="relative h-screen flex">
            <Sidenav />
            <div className="ml-[20%] w-[80%]">
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="complaints" element={<Complaints />} />
                    <Route path="logout" element={<Logout />} />
                </Routes>
            </div>
        </div>
    );
}

export default Apps;
