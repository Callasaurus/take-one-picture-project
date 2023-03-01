import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import angela from '../../Images/angela.jpg';
import plants from '../../Images/plants.jpg';
import who from '../../Images/who.jpg';
import jade from '../../Images/jade.webp';
import Link from "next/link";
import { FadeInSection } from "./FadeInSection";

export default function Previous() {
  return [
    <Navbar key='navbar'/>,
    <div key="current" className="app-container">
      <div className="previous-container">
        
      <FadeInSection>
        <div className="previous-top-container">
          <p id="headers-current"> 2022: Take This Planet </p>
        </div>

        <div className="component-top-container">
            <div className="component-top-1">
              <p id="headers"> Take This Planet  </p>
              <p id="info-text"> In 2022, we aimed to empower Kilmorie children with the knowledge of the climate crisis, the effects this will have within our own community and how our actions can shape the future. The project focused on plants in light of the changing climate and what we can do to help them adapt and survive.  </p>
            </div>
            <div className="component-top-2">
              <Image src={plants} alt=''/>
            </div>
        </div>
        <div className="component-top-container">
          <div className="component-top-2">
            <Image src={angela} alt=''/>
          </div>
          <div className="component-top-1">
            <p id="headers"> Angela Wright </p>
            <p id="info-text"> Angela is an installation artist and makes work that is site-specific and relates to its environment. She draws on nature for inspiration. Her work includes a woven cocoon/safe haven made from twigs which she installed in the garden if Southwark Cathedral.  </p>
          </div>
        </div>
        
        <div className="previous-button">
          <button> <Link style={{ textDecoration: "none", color: "black"}} href="/ttp2022.pdf" target="_blank">Read full TTP 2022 presentation</Link> </button>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="previous-middle-container">
          <p id="headers-current"> 2021: Take This Picture </p>
        </div>

        <div className="component-top-container">
            <div className="component-top-2">
              <Image src={who} alt=''/>
            </div>
            <div className="component-top-1">
              <p id="headers"> Take This Picture  </p>
              <p id="info-text"> In 2021, we wanted to ensure that we diversified our summer art project and we wanted to look for a living artist who lived in or near our community. An artist who our children could relate to. The project focused on the idea of identity and self-reflection.   </p>
            </div>
        </div>
        <div className="component-top-container">
          <div className="component-top-1">
            <p id="headers"> Jadé Fadojutimi </p>
            <p id="info-text"> Jadé grew up in East London and attended the Slade School of Art and The Royal College of Art. She has exhibited across the world and in 2020, she became the youngest artist ever to have work in the permanent collection of the Tate Gallery.  </p>
          </div>
          <div className="component-top-2">
            <Image src={jade} alt=''/>
          </div>
        </div>
        
        <div className="previous-button">
          <button> <Link style={{ textDecoration: "none", color: "black"}} href="/ttp2021.pdf" target="_blank">Read full TTP 2021 presentation</Link> </button>
        </div>
      </FadeInSection>

      <Footer/>
      </div>
    </div>
  ]
}
