import { NavLink } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import PropTypes from 'prop-types';

const cx = classNames.bind(styles)

function MenuItem({ title, icon, to, activeIcon }) {
    return ( 
        <NavLink to={to}>
            <span className={cx('icon')}>{ icon }</span>
            <span className={cx('active-icon')}>{ activeIcon }</span>
            <span className={cx('title')}>{ title }</span>
        </NavLink>
     );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;