import { createBrowserRouter } from "react-router-dom";
import Layout from "../CRUD/Layout.jsx"
import CreateStudent from "../CRUD/CreateStudent.jsx"
import Read_Delete_Student from "../CRUD/Read_Delete_Student.jsx"
import UpdateStudent from "../CRUD/UpdateStudent.jsx"
export let routing = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children :[
            {
                index : true,
                element : <CreateStudent/>
            },
            {
                path : "/read_delete",
                element : <Read_Delete_Student/>
            },
            {
                path : "/update/:id",
                element : <UpdateStudent/>
            }
        ]
    }
])