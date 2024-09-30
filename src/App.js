import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./component/Header/Header";
import DetailPage from "./pages/DetailPage/DetailPage";
import LearnHook from "./pages/LearnHook/LearnHook";

import ReduxHook from "./pages/ReduxHook/ReduxHook";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import TaiXiuPage from "./pages/TaiXiuPage/TaiXiuPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="detail/:id" element={<DetailPage />} />
        <Route path="learn-hook" element={<LearnHook />} />
        <Route path="redux-hook" element={<ReduxHook />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<TaiXiuPage />} />
      </Routes>
    </div>
  );
}

export default App;
