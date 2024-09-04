import { Outlet } from "react-router-dom";
// import Navbar from "../header/header";

function Applayout() {
    return (<>
        {/* <Navbar /> */}
        <Outlet />
    </>);
}

export default Applayout;