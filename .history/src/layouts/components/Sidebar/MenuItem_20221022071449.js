import { NavLink } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ title, icon, to, activeIcon }) {
    return ( 
        <NavLink to={to}>
            <span className={cx('icon')}>{ icon }</span>
            <span className={cx('active-icon')}>{ activeIcon }</span>
            <span className={cx('icon')}>{ title }</span>
        </NavLink>
     );
}

export default MenuItem;