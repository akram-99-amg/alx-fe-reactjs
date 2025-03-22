import {createBrowserRouter} from "react-router-dom"
import RegistrationForm from "./components/RegistrationForm"
import FormikForm from "./components/formikForm"

const Router = createBrowserRouter([{
    path:"/",
    Component:RegistrationForm
},{
    path:"/formik",
    Component:FormikForm
}

])
export default Router