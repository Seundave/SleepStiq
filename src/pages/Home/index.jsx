import Hero from "./Hero";


const Home = () => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: "url(/Slider.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Hero />
    </div>
  );
};

export default Home;
