import Header from "./Components/Home/Header/Header";
import './App.css';
import Home from "./Components/Hero/Home";
import Features from "./Components/Features/Features";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";

function App() {

  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Features></Features>
      <Portfolio></Portfolio>
      <Resume></Resume>
    </div>
  );
}

export default App;
