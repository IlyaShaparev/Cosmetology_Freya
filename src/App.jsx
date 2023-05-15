import './scss/app.scss';
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage";
import FacePage from "./pages/facePage";
import MassagePage from "./pages/massagePage";
import DevicePage from "./pages/devicePage";
import OrderPage from "./pages/orderPage";
import AdminPage from "./pages/adminPage";

function App() {

    return (
        <div>
            <Routes>
                <Route path="/Cosmetology_Freya/massage" element={<MassagePage />} />
                <Route path="/Cosmetology_Freya/face" element={<FacePage />} />
                <Route path="/Cosmetology_Freya/device-cosmetology" element={<DevicePage /> } />
                <Route path="/Cosmetology_Freya/order" element={<OrderPage />} />
                <Route path="/Cosmetology_Freya/admin" element={<AdminPage />} />
                <Route path="/Cosmetology_Freya/" element={<MainPage />} />
            </Routes>
        </div>
    );
}

export default App;