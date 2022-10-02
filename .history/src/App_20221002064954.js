import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes/index.js";
import GlobalStyles from "./components/Globalstyles";
import { DefaultLayout } from "~/components/Layout";


function App() {
    return (
        <GlobalStyles>
            <BrowserRouter>
                <div className="App">
                <Routes>
                    { 
                        publicRoutes.map((route, index) => {
                            const Layout = route.layout || DefaultLayout;
                            const Page = route.component
                            return <Route path={route.path} key={index} 
                            element={
                                
                                            <Page />
                            } />
                        }) 
                    }
                    {/* <Route path="/" element={<Home />} />
                    <Route path="/following" element={<Following />} /> */}
                </Routes>
                </div>
            </BrowserRouter>
        </GlobalStyles>
    );
}

export default App;
