import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "pages/layout";
import Home from "pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
