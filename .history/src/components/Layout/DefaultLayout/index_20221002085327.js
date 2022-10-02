import Header from '~/components/Layout/components/Header/'
import Sidebar from './Sidebar/index.js'
import classNames from 'classnames/bind';
import styles from './Header.module.scss';


const cx = classNames.bind(styles);


function DefaultLayout({ children }) {
    return ( 
        <div>
            <Header/>
            <div className='container'>
                <Sidebar/>
                <div className='content'>
                    { children }
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;