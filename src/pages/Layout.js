import { Outlet, Link } from "react-router-dom";
const Layout = () =>{
    return(
        <>
        <ul>
            <li>
                <link to="/">Home</link>
            </li>
            <li>
                <link to="Loginform">Loginform</link>
            </li>
        </ul>
        <Outlet/>
        </>
    )
};
export default Layout;