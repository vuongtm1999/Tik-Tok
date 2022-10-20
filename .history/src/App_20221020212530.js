import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes/index.js";
import GlobalStyles from "./components/Globalstyles";
import { Fragment } from "react";
import { MainLayout } from "./layouts";


function App() {
    return (
        <GlobalStyles>
            <BrowserRouter>
                <div className="App">
                <Routes>
                    { 
                        publicRoutes.map((route, index) => {
                            const Page = route.component

                            let Layout = MainLayout;
                            if(route.layout){
                                Layout = route.layout
                            }else if(route.layout === null) {
                                Layout = Fragment
                            }
                            
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
