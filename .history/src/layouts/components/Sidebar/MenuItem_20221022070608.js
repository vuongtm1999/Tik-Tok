import { NavLink } from "react-router-dom";

function MenuItem({ title, icon, to}) {
    return ( 
        <NavLink>
            {icon}
            { title }
            { to}
        </NavLi>
     );
}

export default MenuItem;