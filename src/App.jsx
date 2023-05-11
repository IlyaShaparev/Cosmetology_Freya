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
                <Route path="/Cosmetology_Freya/massage" element={<MassagePage />} />
                <Route path="/Cosmetology_Freya/face" element={<FacePage />} />
                <Route path="/Cosmetology_Freya/device-cosmetology" element={<DevicePage /> } />
                <Route path="/Cosmetology_Freya/about" element={<AboutPage />} />
                <Route path="/Cosmetology_Freya/" element={<MainPage />} />
            </Routes>
        </div>
    );
}

export default App;