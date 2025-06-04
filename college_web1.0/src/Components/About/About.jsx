import React from 'react'
import './About.css'
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img"/>
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h2>About University</h2>
        <p>Purwanchal Campus, formerly known as Eastern Region (ERC) Campus is one of constituent campuses of Tribhuvan University (TU) and one of the associate engineering campuses of Institute of Engineering (IOE) which is a comprehensive, non-profit making institution and pioneering institution of higher education level in Nepal funded by Government of Nepal.Currently this campus runs seven (Agricultural, Architecture, Civil, Computer, Electrical, Electronics Communication & Information, Mechanical) bachelors degree program and one (Land and Water) master degree program It is situated at Gangalal Marg, Tinkune, Dharan-8, Sunsari district in the eastern region of Nepal. It occupies an area of 443 ropani (34-13-11.75 Bigahas)</p>
      </div>
    </div>
  )
}

export default About