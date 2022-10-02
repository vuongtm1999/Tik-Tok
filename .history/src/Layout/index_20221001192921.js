import Header from './Header/index.js'
import Sidebar from './Sidebar/index.js'


function DefaultLayout() {
    return ( 
        <div>
            <Header></Header>
            <div className='container'>
                <Sidebar/>
                <div className='sidebar'></div>
            </div>
        </div>
     );
}

export default DefaultLayout;