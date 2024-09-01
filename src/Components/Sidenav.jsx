import { NavLink } from "react-router-dom";

function Sidenav() {
    return (
        <div className="absolute top-0 left-0 w-[20%] h-full bg-green-600 text-white p-4">
            <ul className="mt-[100px] ml-10 font-semibold text-3xl text-white flex flex-col gap-12 ">
                <NavLink to="/dashboard"><li><i className="fa-brands fa-microsoft"></i> Dashboard</li></NavLink>
                <NavLink to="/complaints"><li><i class="fa-solid fa-book"></i> Complaints</li></NavLink>
                <NavLink to="/logout"><li><i class="fa-solid fa-gear"></i> Logout</li></NavLink>
            </ul>
        </div>
    );
}

export default Sidenav;
