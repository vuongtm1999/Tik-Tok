import { NavLink } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from 'Sidebar.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ title, icon, to}) {
    return ( 
        <NavLink to={to}>
            {icon}
            { title }
        </NavLink>
     );
}

export default MenuItem;