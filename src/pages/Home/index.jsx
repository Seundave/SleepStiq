import Footer from "../../components/Footer";
import Brands from "./Brands";
import Hero from "./Hero";
import Mission from "./Mission";
import ProductReview from "./ProductReview";
import Reviews from "./Reviews";
import Shop from "./Shop";
import Story from "./Story";
import Testimonials from "./Testimonial";
import VisitShop from "./VisitShop";

const Home = () => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: "url(/Slider.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Hero />
      <Brands />
      <Story />
      <Reviews />
      <Shop />
      <Mission />
      <VisitShop />
      <ProductReview />
      <Footer />
    </div>
  );
};

export default Home;
