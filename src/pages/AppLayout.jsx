import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer.jsx";

function AppLayout() {
  return (
    <div>
      <main>
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
