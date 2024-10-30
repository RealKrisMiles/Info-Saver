import Navbar from "./components/Navbar"
// import {BrowserRouter,Routes,Route} from "react-router-dom"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Create from "./components/Create"
import Update from "./components/Update"
import Read from "./components/Read"

export default function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/>  <Create/></>
    },
    {
      path:"/all",
      element:<><Navbar/>  <Read/></>
    },
    {
      path:"/:id",
      element:<><Navbar/>  <Update/></>
    }
  ])
  return (
  <div className="App">
    <RouterProvider router={router}/>
    
  </div>
  );
}


// {/* <BrowserRouter>
//   <Navbar/>
//   <Routes>
//     <Route exact path="/" element={<Create/>}/>
//     <Route exact path="/all" element={<Read/>}/>
//     <Route exact path="/update" element={<Update/>}/>
//   </Routes>
//   </BrowserRouter> */}