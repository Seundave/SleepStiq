import Hero from "./Hero";
import Mission from "./Mission";
import ProductReviews from "./ProductReview";
import Reviews from "./Reviews";
import Shop from "./Shop";
import Story from "./Story";
import VisitShop from "./VisitShop";

const Home = () => {
  return (
    <div>
      <Hero />
      <Story />
      <Reviews />
      <Shop />
      <Mission />
      <VisitShop />
      <ProductReviews />
    </div>
  );
};

export default Home;
