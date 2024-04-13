import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import React, {startTransition} from "react";
import { lazy } from "react";
const Landing = lazy(() => import('./components/Landing'))
const Dashboard = lazy(() => import('./components/Dashboard'))



function App() {




  // Suspense API

  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          background: "yellow",
          color: "white",
          height: "40px",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button
          style={{ borderRadius: 30, background: "white", height: 30 }}
          onClick={() => {
            startTransition(() => {navigate("/");})
          }}
        >
          Landing Page
        </button>
        <button
          style={{ borderRadius: 30, background: "white", height: 30 }}
          onClick={() => {
           startTransition(() => { navigate("/dashboard");})
          }}
        >
          Dashboard Page
        </button>
      </div>
    </div>
  );
}
export default App;

