import Following from "~/pages/Following/Home";
import Home from "~/pages/Home/Home";
import Profile from "~/pages/Profile/Profile";
import Upload from "~/pages/Upload/Upload";

//Layout
import { HeaderOnly } from "~/components/Layout";
import { Search } from "~/components/Pages/Search";



// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null }
]


// Private routes
const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }