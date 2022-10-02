import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes/index.js";
import GlobalStyles from "./components/Globalstyles";
import { DefaultLayout } from "~/components/Layout";
import { Fragment } from "react";


function App() {
    return (
        <GlobalStyles>
            <BrowserRouter>
                <div className="App">
                <Routes>
                    { 
                        publicRoutes.map((route, index) => {
                            const Layout = route.layout == null ? Fragment :DefaultLayout;
                            const Page = route.component
                            return <Route path={route.path} key={index} 
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
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
