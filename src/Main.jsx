import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Skill from './Skill';
import Work from './Work';
import Work1 from './works-image/Work1.png'
import Work2 from './works-image/Work2.png'
import Work3 from './works-image/Work3.png'
import Work4 from './works-image/Work4.png'
import Resume from './works-image/Resume.png'
const Main = () =>{

    return(
        <div className =" animate__animated animate__fadeInDown">
            <div style={{"height":10+'px','backgroundColor':'white'}}></div>
            <div className='w3-text-white w3-center w3-padding-24 w3-container w3-margin-top' style={{"fontSize":60+"px"}} id="title">
                    <ReactTypingEffect
                        text={["I am Belal","میں بلال ہوں","Yo soy Belal"]}
                        eraseDelay={4000}
                        typingDelay={100}
                    />
            </div>
            <div className='w3-row w3-center w3-container w3-text-white'>
                <div className="w3-third">&nbsp;</div>
                <div className='w3-third' style={{'fontSize':22+"px","textAlign":"justify"}}>
                    A computer science student and a full stack web developer,
                    started coding with BASIC in 6th standard and fell in love with computers,
                    faced ups and downs, played hide and seek with bugs and still trying to fix
                    that error on line 21 ;) 
                </div>
                <div className="w3-third"></div>
            </div>
            <div className='w3-text-white w3-center' style={{"fontSize":30+"px"}}>
                <div className='w3-padding-16' style={{"fontSize":24+'px',"marginTop":40+"px"}}>My social handles</div>
                <span className='w3-margin w3-section'>
                    <i className='fa fa-instagram'></i>
                </span>

                <span className='w3-margin w3-section'>
                    <i className='fa fa-facebook'></i>
                </span>

                <span className='w3-margin w3-section'>
                    <i className='fa fa-linkedin'></i>
                </span>
            </div>
            <div className='w3-white w3-padding-24' style={{'marginTop':60+"px"}}>
                <div className='w3-center' style={{'fontSize':24+"px"}}>My skills</div>
                <div className='w3-row'>
                    <div id="skill-box" >
                    <Skill name={"React JS"} per={"80"}/>
                    <Skill name={"Node JS"} per={"90"}/>
                    <Skill name={"Express JS"} per={"95"}/>
                    <Skill name={"Mongo DB"} per={"85"}/>
                    <Skill name={"Firebase"} per={"75"}/>
                    <Skill name={"RestFul API"} per={"90"}/>
                    <Skill name={"Bootstrap"} per={"90"}/>
                    <Skill name={"OAuth"} per={"88"}/>
                    <Skill name={"JWT Auth"} per={"90"}/>
                    <Skill name={"Redux"} per={"80"}/>
                    <Skill name={"Git"} per={"70"}/>
                    <Skill name={"Github"} per={"90"}/>
                    <Skill name={"Wordpress"} per={"70"}/>
                    <Skill name={"WooCommerce"} per={"60"}/>
                    </div>  
                </div>
            </div>

            <div className='w3-padding-24'>
                <div className='w3-center w3-text-white' style={{'fontSize':24+"px"}}>My works </div>
                <div className='w3-row'>
                   <div id="skill-box">
                       <div className='row'>
                           
                            <Work title={"BookWorm"} about={"A web app built on React JS and Node JS for all the bookworms out there, Search -> Add to cart and get happiness delivered"} image={Work1}/>
                            <Work title={"Purvanvchal mirror"} about={"A news portal built with React and Node with Mongo DB databse, Front-end styling done with Bootstrap and a lots of love"} image={Work3}/>
                            <Work title={"The cookbook"} about={"A recipie application for the wannabe cooks who don't know what to cook and how to cook, Built with React JS and Firebase"} image={Work2}/>
                            <Work title={"Weather Web"} about={"Real time weather application built with React JS and OpenWeatherMap API, Just enter your city name to check if you need an umbrella or a hot chocolate ;)"} image={Work4}/>
                            
                       </div>

                       
                   </div>
                </div>
            </div>

            <div className='w3-white w3-container'>
                <div className='w3-center w3-padding-16' style={{"fontSize":24+"px"}}>My resume</div>
                <div className='w3-row' id="skill-box">
                    <div className='w3-half w3-margin-top'>
                        <div style={{"fontSize":32+"px"}}>
                            <b>Everything about me on a PDF</b>
                        </div>
                        <div style={{"fontSize":22+"px"}}>
                            Download my resume to know more about my skills, work experience, hobbies,
                            and achievemnets <br /><br />

                            Contact me for website related solutions and let's rock on the web 🤟
                        </div>
                        <div className='w3-margin-top w3-padding-16'>
                            <button className='w3-button w3-black' style={{"fontSize":18+"px"}}>Download</button>
                        </div>
                    </div>
                    <div className='w3-half w3-center w3-margin-top'>
                        <img src={Resume} alt="" style={{"width":65+"%"}} className="w3-card"/>
                    </div>
                </div>
            </div>
            <div className='w3-text-white w3-center w3-padding-24' style={{"fontSize":22+"px"}}>
                Developed with ❤ by Belal
            </div>

        </div>
    )
}
export default Main