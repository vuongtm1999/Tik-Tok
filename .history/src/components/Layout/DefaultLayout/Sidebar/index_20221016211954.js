import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);


function Sidebar() {
    const id = useLocation().pathname.split("/")

    console.log(id)
    return (
        <aside className={cx('wrapper')}>
            <Link to="user/1">u1 <br></br></Link>
            <Link to="user/2">u2</Link>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;
