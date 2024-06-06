import './App.css';
import Navbar from './components/Navbar';
import FirstMain from './components/FirstMain';
import Header from './components/Header';
import SecondMain from './components/SecondMain';
import ThirdMain from './components/ThirdMain';
import FourthMain from './components/FourthMain';
import Footer from './components/Footer';
import Lastnain from './components/Lastnain';
import { useEffect, useState } from 'react';
import Loadingstate from './components/Loadingstate';

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return !loading ? (
    <div className="App">
      <Navbar />
     <Header /> 
      <FirstMain />
      <SecondMain />
      <ThirdMain />
      <FourthMain />
      <Footer />
      <Lastnain/>
    </div>
  ):(<Loadingstate />)
}
export default App;
