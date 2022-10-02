import Following from "~/Pages/Following/Home";
import Home from "~/Pages/Home/Home";
import Profile from "~/Pages/Profile/Profile";


// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile }
]


// Private routes
const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }