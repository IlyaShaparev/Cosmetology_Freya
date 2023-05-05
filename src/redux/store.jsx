import {configureStore} from "@reduxjs/toolkit";
import switcher from "./slices/menuSlice";

export default configureStore({
    reducer: {
        menu: switcher
    }
})