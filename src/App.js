import Courses from "./Component/Courses";
import Features from "./Component/Features";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Quality from "./Component/Quality";
import Testimonial from "./Component/Testimonial";
import WorkFlow from "./Component/WorkFlow";
import Registration from "./Component/Registration";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Quality/>
      <Courses/>
      <Testimonial/>
      <WorkFlow/>
      <Registration/>
      <Footer/>
    </div>
  );
}

export default App;
