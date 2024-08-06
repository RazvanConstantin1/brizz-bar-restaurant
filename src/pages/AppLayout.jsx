import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
