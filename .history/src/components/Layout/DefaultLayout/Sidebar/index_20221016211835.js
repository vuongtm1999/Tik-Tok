import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);


function Sidebar() {
    const id = useLocation().pathname.split("/")

    console.log(id)
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;
