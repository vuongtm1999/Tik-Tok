import classNames from 'classnames/bind';
import { HomeActiveIcon } from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);


function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<FollowingIcon/>} />
                <MenuItem title="LIVE" to={config.routes.live} icon={null} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
