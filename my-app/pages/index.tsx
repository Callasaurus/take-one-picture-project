import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Link from "next/link";
import Image from "next/image";
import old from '../Images/old.jpg';
import newer from '../Images/newer.jpg';
import prev1 from '../Images/prev1.jpg'
import prev2 from '../Images/prev2.png'
import prev3 from '../Images/prev3.png'
import prev4 from '../Images/prev4.jpg'
import prev5 from '../Images/prev5.png'
import prev6 from '../Images/prev6.png'

export default function Home() {
  return [
    <Navbar key='navbar'/>,
    <div key="homepage" className="app-container">
      <div className="homepage-container">
        <div className="homepage-top-container">
          <div className="homepage-top-1">
            <p id="headers"> Take These Paintings 2023  </p>
            <p id="info-text"> Featuring Kehinde Wiley and Henry Nelson O’Neil </p>
            <button> <Link style={{ textDecoration: "none", color: "black"}} href="/Components/Current">Find out more</Link> </button>
          </div>
          <div className="homepage-top-2">
            <Image src={old} alt=''/>
          </div>
        </div>
        <div className="homepage-top-container">
          <div className="homepage-top-2">
            <Image src={newer} alt=''/>
          </div>
          <div className="homepage-top-1">
            <p id="headers"> Contact us  </p>
            <p id="info-text"> If you’d like to learn more about how our Take One Picture projects work, don’t hesitate to reach out </p>
            <button> <Link style={{ textDecoration: "none", color: "black"}} href="/Components/Contact">Get in touch</Link> </button>
          </div>
        </div>
        <div className="homepage-previous-paintings">
          <p> Previous paintings </p>
          <div className="homepage-paintings">
            <Image onClick={() => { window.open("https://en.wikipedia.org/wiki/An_Experiment_on_a_Bird_in_the_Air_Pump", "_blank")?.focus(); }} src={prev1} alt=''/>
            <Image onClick={() => { window.open("https://www.nationalgallery.org.uk/paintings/peter-paul-rubens-a-roman-triumph", "_blank")?.focus(); }} src={prev2} alt=''/>
            <Image onClick={() => { window.open("https://www.nationalgallery.org.uk/paintings/george-bellows-men-of-the-docks", "_blank")?.focus(); }} src={prev3} alt=''/>
            <Image onClick={() => { window.open("https://www.wikiart.org/en/thomas-gainsborough/mr-and-mrs-andrews-1749", "_blank")?.focus(); }} src={prev4} alt=''/>
            <Image onClick={() => { window.open("https://www.nationalgallery.org.uk/paintings/georges-seurat-bathers-at-asnieres", "_blank")?.focus(); }} src={prev5} alt=''/>
            <Image onClick={() => { window.open("https://www.nationalgallery.org.uk/paintings/pintoricchio-penelope-with-the-suitors", "_blank")?.focus(); }} src={prev6} alt=''/>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  ];
}
