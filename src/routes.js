import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home title="Olá, Gama Academy" />} />
            <Route path="/repositories" element={<Repositories />} />
        </Routes>
    )
}