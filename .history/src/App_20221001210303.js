import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./component/Globalstyles";
import Following from "~/Pages/Following/Home";
import Home from "~/Pages/Home/Home";
import { publicRoutes } from "~/Routes/index.js";
import { DefaultLayout } from "~/component/Layout";


function App() {
    return (
        <GlobalStyles>
            <BrowserRouter>
                <div className="App">
                <Routes>
                    { 
                        publicRoutes.map((route, index) => {
                            const Page = route.component
                            return <Route path={route.path} key={index} element={<Page />} />
                        }) 
                    }
                    <Route path="/" element={<Home />} />
                    <Route path="/following" element={<Following />} />
                </Routes>
                </div>
            </BrowserRouter>
        </GlobalStyles>
    );
}

export default App;