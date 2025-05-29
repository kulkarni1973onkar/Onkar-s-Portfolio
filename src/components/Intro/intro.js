import React from 'react';
import './intro.css';
import bg from '../../assets/Portfolio.png';
import btnImg from '../../assets/hireme.png';


const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Onkar</span><br/>Fullstack Developer</span>
                <p className="introPara">I build full-stack applications that combine thoughtful design with solid backend architecture. From refining user flows to scaling APIs, I focus on creating systems that work smoothly and make a real impact.</p>
                
                <a href="https://drive.google.com/file/d/1mXP3wBuruI0U233qsfmNBBQvwx6AVdep/view?usp=drive_link" download>
                <button className="btn">
                    <img src={btnImg} alt="Hire" className='btnImg' />
                    Hire Me
                </button>
                </a>

            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}
 
export default Intro;