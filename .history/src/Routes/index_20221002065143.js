import Following from "~/pages/Following/Home";
import Home from "~/pages/Home/Home";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload/Upload";


// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/profile', component: Profile }
]


// Private routes
const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }