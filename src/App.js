import './App.css';

import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer/>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
    </div>
  );
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
}

export default App;
