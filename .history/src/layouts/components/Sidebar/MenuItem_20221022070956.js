import { NavLink } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from 'Sidebar.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ title, icon, to}) {
    return ( 
        <NavLink to={to}>
            <span>{ icon }</span>
            <span>{ icon }</span>
            <span>{ title }</span>
        </NavLink>
     );
}

export default MenuItem;