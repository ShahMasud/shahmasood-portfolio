import './App.css';
import Projects from './components/projects';
// import Menu from './components/menu';
import Navbar from './components/Navbar';
import Banner from './components/banner';
import About from './components/about';
import BasicCard from './components/card';
import MySkills from './components/mySkills';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}
    <Banner/>
    <About/>
    <BasicCard/>
    <MySkills/>
     <Projects/>
     <Footer/>
    </div>
  );
}

export default App;
