import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Project from './Components/Project';

function App() {

  return (
    <>
      <Header YourNameLogo="TS" YourName="Tayyab."/>

      <Home Skill1="Front-end Devloper" Skill2="Web-Designer" YourInfo="A passionate Front-end React Developer and fully Responsive Designer based in Lahore, Pakistan. 📍" LinkedIn="" GitHub="https://github.com/Tayyab-Tech" YourImg="/src/my-img.png" YourImgAlt="my-img" />
      
      <About AboutHeading="Meet the React Enthusiast behind the Screen. Crafting Dynamic User Interfaces with Passion and Precision." AboutData="I'm a front-end developer skilled in React.js, with a focus on creating responsive, user-friendly web apps. I have expertise in JavaScript, HTML5, CSS3, and frameworks like Tailwind CSS, React Bootstrap, and Bootstrap for clean, scalable designs. I also specialize in converting Figma designs into responsive websites using HTML, CSS3, Tailwind CSS, and JavaScript. I'm dedicated to optimizing performance, ensuring cross-browser compatibility, and delivering seamless digital experiences." TechStackImg1="/Html.png" TechStackImg1Alt="html-logo" TechStackImg2="/Css.png" TechStackImg2Alt="css-logo" TechStackImg3="/Bootstrap.png" TechStackImg3Alt="bootstrap-logo" TechStackImg4="/Tailwind.png" TechStackImg4Alt="tailwind-logo" TechStackImg5="/Javascript.png" TechStackImg5Alt="JS-logo" TechStackImg6="/React.png" TechStackImg6Alt="react-logo" />
      
      <Project />
      
      <Contact YourEmail="tayyabtechnology@gmail.com" YourEmailLink="mailto:tayyabtechnology@gmail.com" YourEmailLink2="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=tayyabtechnology@gmail.com" YourContactLink="https://wa.me/923194020684?text=Hi Tayyab..." YourContact="+92 319 4020684" />
      
      <Footer LinkedIn="" GitHub="https://github.com/Tayyab-Tech" YourName="Tayyab Saleem" />
    </>
  );
}

export default App;