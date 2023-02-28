import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import old from '../../Images/old.jpg';
import newer from '../../Images/newer.jpg';
import kehinde from '../../Images/kehinde.webp';
import henry from '../../Images/henry.jpg';
import { FadeInSection } from "./FadeInSection";

export default function Current() {
  return [
    <Navbar key='navbar'/>,
    <div key="current" className="app-container">
       <div className="current-container">
        <FadeInSection>
          <div className="current-top-container">
            <p id="headers-current"> Take These Paintings 2023 </p>
            <p id="headers-current-info"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nec dui imperdiet faucibus. Ut eget pellentesque tellus. Fusce et orci vel nisl auctor accumsan. Vivamus et nulla vitae felis porta consequat. Cras eu varius diam. Nullam a aliquet risus, placerat facilisis enim. Fusce rhoncus, eros vel lacinia lobortis, eros elit fermentum enim, id vehicula mi mi ac ante. Nulla facilisi. Nunc id egestas lorem, at malesuada augue. </p>
            <button> Read full TTP 2023 presentation</button>
          </div>
          </FadeInSection>

          <FadeInSection>
          <div className="component-top-container">
            <div className="component-top-2">
              <Image src={old} alt=''/>
            </div>
            <div className="component-top-1">
              <p id="headers"> The Parting Cheer (1861)  </p>
              <p id="info-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nec dui imperdiet faucibus. Ut eget pellentesque tellus. Fusce et orci vel nisl auctor accumsan. Vivamus et nulla vitae felis porta consequat. Cras eu varius diam. Nullam a aliquet risus, placerat facilisis enim.  </p>
              <button onClick={() => { window.open("https://www.rmg.co.uk/collections/objects/rmgc-object-266156", "_blank")?.focus(); }}> Find out more </button>
            </div>
          </div>
        <div className="component-top-container">
          <div className="component-top-1">
            <p id="headers"> Ships of Fools (2017) </p>
            <p id="info-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nec dui imperdiet faucibus. Ut eget pellentesque tellus. Fusce et orci vel nisl auctor accumsan. Vivamus et nulla vitae felis porta consequat. Cras eu varius diam. Nullam a aliquet risus, placerat facilisis enim.  </p>
            <button onClick={() => { window.open("https://www.artfund.org/supporting-museums/art-weve-helped-buy/artwork/13669/ship-of-fools", "_blank")?.focus(); }}> Find out more </button>
          </div>
          <div className="component-top-2">
            <Image src={newer} alt=''/>
          </div>
        </div>
        </FadeInSection>

        <FadeInSection>
        <div className="current-middle-container">
          <p id="headers-current"> Why these paintings together? </p>
          <p id="headers-current-info"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nec dui imperdiet faucibus. Ut eget pellentesque tellus. Fusce et orci vel nisl auctor accumsan. Vivamus et nulla vitae felis porta consequat. Cras eu varius diam. Nullam a aliquet risus, placerat facilisis enim. Fusce rhoncus, eros vel lacinia lobortis, eros elit fermentum enim, id vehicula mi mi ac ante. Nulla facilisi. Nunc id egestas lorem, at malesuada augue. </p>
        </div>
        </FadeInSection>

        <FadeInSection>
        <div className="component-top-container">
          <div className="component-top-2">
            <Image src={kehinde} alt=''/>
          </div>
          <div className="component-top-1">
            <p id="headers"> Kehinde Wiley </p>
            <p id="info-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nec dui imperdiet faucibus. Ut eget pellentesque tellus. Fusce et orci vel nisl auctor accumsan. Vivamus et nulla vitae felis porta consequat. Cras eu varius diam. Nullam a aliquet risus, placerat facilisis enim.  </p>
            <button onClick={() => { window.open("https://en.wikipedia.org/wiki/Kehinde_Wiley", "_blank")?.focus(); }}> Find out more </button>
          </div>
        </div>
        <div className="component-top-container">
          <div className="component-top-1">
            <p id="headers"> Henry Nelson O’Neil  </p>
            <p id="info-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nec dui imperdiet faucibus. Ut eget pellentesque tellus. Fusce et orci vel nisl auctor accumsan. Vivamus et nulla vitae felis porta consequat. Cras eu varius diam. Nullam a aliquet risus, placerat facilisis enim.  </p>
            <button onClick={() => { window.open("https://en.wikipedia.org/wiki/Henry_Nelson_O%27Neil", "_blank")?.focus(); }}> Find out more </button>
          </div>
          <div className="component-top-2">
            <Image src={henry} alt=''/>
          </div>
        </div>
        </FadeInSection>
        
        <Footer/>
       </div>
    </div>
  ]
}
