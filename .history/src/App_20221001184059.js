import { BrowserRouter, Router } from "react-router-dom";
import GlobalStyles from "./component/Globalstyles";


function App() {
    return (
        <GlobalStyles>
            <BrowserRouter>
                <div className="App">
                    <h1>React APP</h1>
                </div>
            </BrowserRouter>
        </GlobalStyles>
    );
}

export default App;
