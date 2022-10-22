import classNames from 'classnames/bind';
import config from '~/config';
import Menu from './Menu';
import MenuItem from './MenuItem';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);


function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.following} icon={null} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
