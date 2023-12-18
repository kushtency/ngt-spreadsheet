import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateTablePage from "../pages/CreateTablePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/create',
        element: <CreateTablePage/>
    }
]);