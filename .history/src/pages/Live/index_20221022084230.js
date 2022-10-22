import classNames from 'classnames/bind';
import styles from './Live.module.scss';

const cx = classNames.bind(styles);

function Live() {
    return ( 
        <h1 className={cx('wrapper')}>Live</h1>
     );
}

export default Live;