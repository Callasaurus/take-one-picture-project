import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import angela from '../../Images/angela.jpg';
import plants from '../../Images/plants.jpg';
import who from '../../Images/who.jpg';
import jade from '../../Images/jade.webp';
import Link from "next/link";

export default function Previous() {
  return [
    <Navbar key='navbar'/>,
    <div key="current" className="app-container">
      <div className="previous-container">
        <div className="previous-top-container">
          <p id="headers-current"> 2022: Take This Planet </p>
        </div>

        <div className="homepage-top-container">
            <div className="homepage-top-1">
              <p id="headers"> Take This Planet  </p>
              <p id="info-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nec dui imperdiet faucibus. Ut eget pellentesque tellus. Fusce et orci vel nisl auctor accumsan. Vivamus et nulla vitae felis porta consequat. Cras eu varius diam. Nullam a aliquet risus, placerat facilisis enim.  </p>
            </div>
            <div className="homepage-top-2">
              <Image src={plants} alt=''/>
            </div>
        </div>
        <div className="homepage-top-container">
          <div className="homepage-top-2">
            <Image src={angela} alt=''/>
          </div>
          <div className="homepage-top-1">
            <p id="headers"> Angela Wright </p>
            <p id="info-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nec dui imperdiet faucibus. Ut eget pellentesque tellus. Fusce et orci vel nisl auctor accumsan. Vivamus et nulla vitae felis porta consequat. Cras eu varius diam. Nullam a aliquet risus, placerat facilisis enim.  </p>
          </div>
        </div>
        
        <button> <Link style={{ textDecoration: "none", color: "black"}} href="/ttp2022.pdf" target="_blank">Read full TTP 2022 presentation</Link> </button>

        <div className="previous-middle-container">
          <p id="headers-current"> 2021: Take This Picture </p>
        </div>

        <div className="homepage-top-container">
            <div className="homepage-top-2">
              <Image src={who} alt=''/>
            </div>
            <div className="homepage-top-1">
              <p id="headers"> Take This Planet  </p>
              <p id="info-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nec dui imperdiet faucibus. Ut eget pellentesque tellus. Fusce et orci vel nisl auctor accumsan. Vivamus et nulla vitae felis porta consequat. Cras eu varius diam. Nullam a aliquet risus, placerat facilisis enim.  </p>
            </div>
        </div>
        <div className="homepage-top-container">
          <div className="homepage-top-1">
            <p id="headers"> Jadé Fadojutimi </p>
            <p id="info-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nec dui imperdiet faucibus. Ut eget pellentesque tellus. Fusce et orci vel nisl auctor accumsan. Vivamus et nulla vitae felis porta consequat. Cras eu varius diam. Nullam a aliquet risus, placerat facilisis enim.  </p>
          </div>
          <div className="homepage-top-2">
            <Image src={jade} alt=''/>
          </div>
        </div>
        
        <button> <Link style={{ textDecoration: "none", color: "black"}} href="/ttp2021.pdf" target="_blank">Read full TTP 2021 presentation</Link> </button>
        <Footer/>
      </div>
    </div>
  ]
}
