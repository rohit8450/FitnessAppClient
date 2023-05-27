import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from './components/Home/Home';
import Basket from './components/Basket/Basket';
import YogaFitness from './components/YogaFitness/YogaFitness';
import Header from './components/Header/Header';
import MeditationApp from './components/MeditationApp/MeditatioinApp';
import YogaPose from './components/YogaPose/YogaPose';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     
      {/* <Basket /> */}
     
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/get-yoga-poses" element={<YogaFitness /> }/>
          <Route exact path="/get-yoga-poses/:yogaID" element={<YogaPose />}/>
          <Route exact path="/meditation" element={<MeditationApp />}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;



