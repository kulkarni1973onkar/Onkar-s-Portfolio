import React from 'react';
import './contact.css';
import LinkIcon from '../../assets/Linkedin.jpg';
import InstagramIcon from '../../assets/instagram.png';
import GithubIcon from '../../assets/github.png';

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Let's Connect</h1>
        <p className="contactSubtitle">I'm always ready for new opportunities or a quick chat.</p>
        <div className="contactLinks">
          <a href="https://www.linkedin.com/in/onkar1973/" target="_blank" rel="noopener noreferrer" className="contactIconWrapper">
            <img src={LinkIcon} alt="LinkedIn" className="contactIcon" />
          </a>
          <a href="https://www.instagram.com/_.onkark._1911._/" target="_blank" rel="noopener noreferrer" className="contactIconWrapper">
            <img src={InstagramIcon} alt="Instagram" className="contactIcon" />
          </a>
          <a href="https://github.com/kulkarni1973onkar" target="_blank" rel="noopener noreferrer" className="contactIconWrapper">
            <img src={GithubIcon} alt="GitHub" className="contactIcon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
