import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Link from "next/link";
import Image from "next/image";
import old from '../Images/old.jpg';
import newer from '../Images/newer.jpg';

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
            <button> <Link style={{ textDecoration: "none"}} href="/Components/Contact">Get in touch</Link> </button>
          </div>
        </div>
        <div className="homepage-previous-paintings">
          <p> Previous paintings </p>
          <div className="homepage-paintings">
            <Image src={old} alt=''/>
            <Image src={old} alt=''/>
            <Image src={old} alt=''/>
            <Image src={old} alt=''/>
            <Image src={old} alt=''/>
            <Image src={old} alt=''/>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  ];
}
