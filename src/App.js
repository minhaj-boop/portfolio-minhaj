import Header from "./Components/Home/Header/Header";
import './App.css';
import Home from "./Components/Hero/Home";
import Features from "./Components/Features/Features";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
// import Testimonial from "./Components/Testimonial/Testimonial";
// import Blog from './Components/Blog/Blog';
function App() {

  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Features></Features>
      <Portfolio></Portfolio>
      <Resume></Resume>
      {/* <Testimonial></Testimonial> */}
      {/* <Blog></Blog> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
