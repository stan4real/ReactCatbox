import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./ui/screens/Home/Home"
import CarDetail from "./ui/screens/Home/car-detail/CarDetail"
const Router = () => {
    return <BrowserRouter>
    <Routes>
        <Route element = {<Home/>} path='/'></Route>
        <Route element ={<CarDetail/>} path ='/cat/:id'/>
        <Route path='*' element={<div>Not found</div>}></Route>
    </Routes>
    </BrowserRouter>
}

export default Router