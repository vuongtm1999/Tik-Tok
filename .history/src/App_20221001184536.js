import { BrowserRouter, Router} from "react-router-dom";
import GlobalStyles from "./component/Globalstyles";
import Following from "./Pages/Following/Home";
import Home from "./Pages/Home/Home";


function App() {
    return (
        <GlobalStyles>
            <BrowserRouter>
                <div className="App">
                <Routers>
                    <Router path="/" element={<Home />} />
                    <Router path="/following" element={<Following />} />
                </Routers>
                </div>
            </BrowserRouter>
        </GlobalStyles>
    );
}

export default App;
