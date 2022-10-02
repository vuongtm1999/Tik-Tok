import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./component/Globalstyles";
import Following from "~/Pages/Following/Home";
import Home from "~/Pages/Home/Home";


function App() {
    return (
        <GlobalStyles>
            <BrowserRouter>
                <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/following" element={<Following />} />
                </Routes>
                </div>
            </BrowserRouter>
        </GlobalStyles>
    );
}

export default App;
