import lightIntro from '../assets/bg_transparent.png'; // Light mode image
import darkIntro from '../assets/inv_t_bg.png'; // Dark mode image
import '../styles/Home.css';

function homedecor() {
  alert("hey there!");
}

function Home({ theme }) {  // Accept theme as a prop
  // Select image based on the theme
  const introImage = theme === "dark" ? darkIntro : lightIntro;

  return (
    <div className="home-container">
      <img src={introImage} alt="Intro" onClick={homedecor} className="intro-image" />
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      <p>Feel free to explore the articles, researches, and about sections.</p>
    </div>
  );
}

export default Home;
