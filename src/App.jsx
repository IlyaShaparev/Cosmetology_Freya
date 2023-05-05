import './scss/app.scss';
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage";
import FacePage from "./pages/facePage";
import MassagePage from "./pages/massagePage";
import DevicePage from "./pages/devicePage";
import AboutPage from "./pages/aboutPage";

function App() {

    return (
        <div>
            <Routes>
                <Route path="/massage" element={<MassagePage />}/>
                <Route path="/face" element={<FacePage />}/>
                <Route path="/device-cosmetology" element={<DevicePage /> }/>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/" element={<MainPage/>} />
            </Routes>
        </div>
    );
}

export default App;