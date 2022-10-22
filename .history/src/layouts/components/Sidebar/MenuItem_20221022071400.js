import { NavLink } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ title, icon, to, activeIcon }) {
    return ( 
        <NavLink to={to}>
            <span>{ icon }</span>
            <span>{ activeIcon }</span>
            <span>{ title }</span>
        </NavLink>
     );
}

export default MenuItem;