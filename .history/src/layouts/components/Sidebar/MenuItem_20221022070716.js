import { NavLink } from "react-router-dom";
import classNames from 'classnames/bind';



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