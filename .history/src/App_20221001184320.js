import { BrowserRouter, Router} from "react-router-dom";
import GlobalStyles from "./component/Globalstyles";
import Home from "./Pages/Home/Home";


function App() {
    return (
        <GlobalStyles>
            <BrowserRouter>
                <div className="App">
                <Router>
                    <Router path="/" element={<Home />} />
                </Router>
                </div>
            </BrowserRouter>
        </GlobalStyles>
    );
}

export default App;
