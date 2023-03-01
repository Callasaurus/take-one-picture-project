import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import lisa from '../../Images/lisa.jpg'
import { FadeInSection } from "./FadeInSection";

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function About() {
  return [
    <Navbar key='navbar'/>,
    <div key="about" className="app-container">
      <div className="about-container">
        <FadeInSection>
          <div className="about-top-container">
            <p id="headers-current"> Our Take One Picture mission </p>
            <p id="headers-current-info"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nec dui imperdiet faucibus. Ut eget pellentesque tellus. Fusce et orci vel nisl auctor accumsan. Vivamus et nulla vitae felis porta consequat. Cras eu varius diam. Nullam a aliquet risus, placerat facilisis enim. Fusce rhoncus, eros vel lacinia lobortis, eros elit fermentum enim, id vehicula mi mi ac ante. Nulla facilisi. Nunc id egestas lorem, at malesuada augue. </p>
          </div>
          </FadeInSection>

        <FadeInSection>
          <div className="about-carousel-container">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </FadeInSection>
          
        <FadeInSection>
          <div className="component-top-container">
            <div className="component-top-1">
              <p id="headers"> Lisa Drage </p>
              <p id="info-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nec dui imperdiet faucibus. Ut eget pellentesque tellus. Fusce et orci vel nisl auctor accumsan. Vivamus et nulla vitae felis porta consequat. Cras eu varius diam. Nullam a aliquet risus, placerat facilisis enim. </p>
            </div>
            <div className="component-top-2">
              <Image src={lisa} alt=''/>
            </div>
          </div>
          </FadeInSection>

          <Footer/>        
        </div>
    </div>
  ]
}
