import { NavLink } from "react-router-dom";

function MenuItem({ title, icon, to}) {
    return ( 
        <NavLink>
            {icon}
            { title }
            { to}
        </NavLink>
     );
}

export default MenuItem;