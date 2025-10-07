import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Countrydata from "./component/Countrydata"
import Countrydetail from "./component/Countrydetail"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Countrydata></Countrydata>}></Route>
                <Route path="/countrydetail/:name" element={<Countrydetail></Countrydetail>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App