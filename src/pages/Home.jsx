import About from "../components/About.jsx";
import FeaturedMenu from "../components/FeaturedMenu.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Reservation from "../components/Reservation.jsx";
import Team from "../components/Team.jsx";
import Testimonial from "../components/Testimonial.jsx";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedMenu />
      <Team />
      <Testimonial />
      <Reservation />
    </div>
  );
}

export default Home;
