import Footer from "../../components/Footer";
import Brands from "./Brands";
import Hero from "./Hero";
import Mission from "./Mission";
import ProductReviews from "./ProductReview";
import Reviews from "./Reviews";
import Shop from "./Shop";
import Story from "./Story";
import Testimonials from "./Testimonial";
import VisitShop from "./VisitShop";

const Home = () => {
  return (
    <div
      
     
    >
      <Hero />
      {/* <Brands /> */}
      <Story />
      <Reviews />
      <Shop />
      <Mission />
      <VisitShop />
      <ProductReviews />
      <Footer />
    </div>
  );
};

export default Home;
