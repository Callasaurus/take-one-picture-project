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
            <p id="headers-current-info"> At Kilmorie, we became concerned at the suggested paintings by The National Gallery, because whilst they stimulate a huge and exciting variety of art work, the paintings themselves tend to be painted by white men for white men. Over the past few years we have tackled this issue by choosing our own artwork and topics to focus on, including diversity and identity. In 2023, we want to address another burning societal issue in our art project - the climate crisis.   </p>
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
              <p id="info-text"> The Parting Cheer deals with the subject of emigration. It is a bustling dockside scene depicting emigrants about to sail for a new life overseas - most likely North America - and their friends and relatives left behind.  </p>
              <button onClick={() => { window.open("https://www.rmg.co.uk/collections/objects/rmgc-object-266156", "_blank")?.focus(); }}> Find out more </button>
            </div>
          </div>
        <div className="component-top-container">
          <div className="component-top-1">
            <p id="headers"> Ships of Fools (2017) </p>
            <p id="info-text"> Ships of Fools also deals with emigration. It depicts a group of Black men at sea, struggling to reach the land – a metaphor for both historical and contemporary histories of migration.  </p>
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
          <p id="headers-current-info"> The Parting Cheer and Ships of Fools were chosen for a number of reasons. Firstly, both are visually arresting and are both local - based in South East London and, whilst 162 years apart, they both are both comments on their times. Secondly, both paintings deal with a similar theme. They are a vehicle for understanding the concept of economic migrancy and how economic migrants have been within and without this country from time immemorial. </p>
        </div>
        </FadeInSection>

        <FadeInSection>
        <div className="component-top-container">
          <div className="component-top-2">
            <Image src={kehinde} alt=''/>
          </div>
          <div className="component-top-1">
            <p id="headers"> Kehinde Wiley </p>
            <p id="info-text"> Kehinde Wiley is perhaps most famous for being the painter of the official portrait of the first African American president in the US. He is also known for his huge, colourful portraits of black men and women in poses taken directly from Old Master paintings.  </p>
            <button onClick={() => { window.open("https://en.wikipedia.org/wiki/Kehinde_Wiley", "_blank")?.focus(); }}> Find out more </button>
          </div>
        </div>
        <div className="component-top-container">
          <div className="component-top-1">
            <p id="headers"> Henry Nelson O’Neil  </p>
            <p id="info-text"> Henry Nelson O’Neil was famous for his paintings of modern life, particularly of busy scenes of departing and returning ships. Two of his most noted paintings depict troops leaving to fight against the Indian mutiny - Eastward Ho and, their return in Home Again.  </p>
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
