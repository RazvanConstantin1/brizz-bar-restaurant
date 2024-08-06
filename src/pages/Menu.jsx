import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Menu() {
  return (
    <>
      <Header />
      <div className="container mx-auto min-h-[980px] bg-menu flex justify-center items-center">
        <div>Menu</div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
