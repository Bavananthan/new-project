
import './App.css';
import './App1.css';


import './components/Navbar'
import Navbar from './components/Navbar';
import Firstcom from './components/Firstcom';
import Secondcom from './components/Secondcom';
import Thirdcom from './components/Thirdcom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Firstcom/>
      <Secondcom/>
      <Thirdcom/>
      <Footer/>
    </div>
  );
}


export default App;
