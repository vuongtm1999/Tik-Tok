import { BrowserRouter, Router} from "react-router-dom";
import GlobalStyles from "./component/Globalstyles";


function App() {
    return (
        <GlobalStyles>
            <BrowserRouter>
                <div className="App">
                <Router>

                </Router>
                </div>
            </BrowserRouter>
        </GlobalStyles>
    );
}

export default App;
