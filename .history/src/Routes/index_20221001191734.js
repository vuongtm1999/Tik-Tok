import Following from "~/Pages/Following/Home";
import Home from "~/Pages/Home/Home";


// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
]


// Private routes
const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }