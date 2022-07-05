import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Repositories from "./Repositories";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home title="Olá, Gama Academy" />} />
            <Route path="/repositories" element={<Repositories />} />
        </Routes>
    )
}