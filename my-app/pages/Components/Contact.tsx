import React, { useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Navbar from './Navbar';
import FadeInSection from './FadeInSection';
import Footer from './Footer';
import Image from 'next/image';
import thankyou from '../../Images/thankyou.jpg'

export default function Contact() {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs.sendForm('service_yl7a1wr', 'template_ibvi9nl', form.current!, '__Nhze8JNctOj35qs')
        .then((result: EmailJSResponseStatus) => {
            console.log(result.text);
        }, (error: EmailJSResponseStatus) => {
            console.log(error.text);
        });

    alert("Your email has been sent.")
};

    return [
        <Navbar key='navbar' />,
        <div key="homepage" className="app-container">
          <div className='contact-container'>
          <FadeInSection>
            <div className="about-top-container">
              <p id="headers-current"> Contact us </p>
              <p id="headers-current-info"> We believe that Take One Picture projects can have a long-lasting and positive impact on the educational and societal development of children. If you would like to reach out for information or to discuss any potential ideas, feel free to contact us below. </p>
            </div>
          </FadeInSection>

          <FadeInSection>
              <form className='form-contact' ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <button type="submit" value="Send">Submit</button>
              </form>
          </FadeInSection>

          <FadeInSection>
          <div className="component-top-container">
            <div className="component-top-1">
              <p id="headers"> Thanks for visiting </p>
              <p id="info-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nec dui imperdiet faucibus. Ut eget pellentesque tellus. Fusce et orci vel nisl auctor accumsan. Vivamus et nulla vitae felis porta consequat. Cras eu varius diam. Nullam a aliquet risus, placerat facilisis enim. </p>
            </div>
            <div className="component-top-2">
              <Image src={thankyou} alt=''/>
            </div>
          </div>
          </FadeInSection>

          <Footer/>

          </div>
        </div>
    ]
}
