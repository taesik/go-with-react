import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About} from "./pages/About";
import {Home} from "./pages/Home";

const root = ReactDOM
    .createRoot(document.querySelector('#application')!);
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path={'/about'} element={<About/>}></Route>
        </Routes>
    </BrowserRouter>
);
