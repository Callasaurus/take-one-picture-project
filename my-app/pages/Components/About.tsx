import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import lisa from '../../Images/lisa.jpg'
import { FadeInSection } from "./FadeInSection";

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 17
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function About() {
  return [
    <Navbar key='navbar'/>,
    <div key="about" className="app-container">
      <div className="about-container">
        <FadeInSection>
          <div className="about-top-container">
            <p id="headers-current"> Our Take One Picture mission </p>
            <p id="headers-current-info"> Annually, the National Gallery suggests a painting from its collection for schools to use as stimulus for art and cross curricular learning. Schools may enter work to be featured in the Take One Picture exhibition. </p>
            <p id="headers-current-info"> We believe the Take One Picture project has a vast number of benefits, including: raising self-esteem and standards; ensuring all children are seen, heard and included; promoting learning outside the classroom; providing stimulus for building the wider school community; enabling students to build meaningful connections and inspire a lifelong love of learning; developing cultural capital and social conscience. </p>
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
