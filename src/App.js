import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/primitives/router/ScrollToTop";
import Layout from "./components/sections/layout/Layout";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Error from "./components/pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
