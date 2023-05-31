import './Team.css'
import linkedin from '../assets/img/linkedin.svg'
import mail from '../assets/img/mail.svg'
import twitter from '../assets/img/twitter.svg'
import hashbulla from '../assets/img/hashbulla.png'
import { NavBar } from './NavBar'

 const Team = () =>{
    
    return (
        
        <section>
            <div className='tuhh'><NavBar/>   </div> 
            <div class="row">
                <h2> Meet The Team </h2>
            </div>
            <div class="row">
                {/* <!---column 1---> */}
                <div class="column">
                    <div class="card">
                        <div class="img-container">
                        <img src={hashbulla} />
                        </div>
                        <h3>Mohammad Qassim  </h3>
                        <p> Founder</p>
                        <span class='navbar-text'>
                        <div class='icons'>
                            <a  href="https://ca.linkedin.com/in/muhammadqassimy"><img src={linkedin} alt=""/></a>
                            <a  href="https://www.facebook.com/profile.php?id=100092180580959"><img src={mail} alt=""/></a>
                            <a  href="https://twitter.com/HandiFuel"><img src={twitter} alt=""/></a>
                        </div>         
                    </span>
                    </div>
                    
                </div>
                {/* <!---column 1---> */}
                <div class="column">
                    <div class="card">
                        <img class="img-container" src="https://avatars.githubusercontent.com/u/61002548?v=4" alt="" />
                        <h3>Solomon Ukwosah </h3>
                        <p> Founder</p>
                        <span class='navbar-text'>
                            <div class='icons'>
                                <a  href="https://ca.linkedin.com/in/muhammadqassimy"><img src={linkedin} alt=""/></a>
                                <a  href="https://www.facebook.com/profile.php?id=100092180580959"><img src={mail} alt=""/></a>
                                <a  href="https://twitter.com/HandiFuel"><img src={twitter} alt=""/></a>
                            </div>         
                    </span>
                    </div>
                    
                </div>
                {/* <!---column 1---> */}
                <div class="column">
                    <div class="card">
                        <img class="img-container" src="https://avatars.githubusercontent.com/u/61002548?v=4" alt="" />
                        <h3>Joe xu  </h3>
                        <p> Founder</p>
                        <span class='navbar-text'>
                            <div class='icons'>
                                <a  href="https://ca.linkedin.com/in/muhammadqassimy"><img src={linkedin} alt=""/></a>
                                <a  href="https://www.facebook.com/profile.php?id=100092180580959"><img src={mail} alt=""/></a>
                                <a  href="https://twitter.com/HandiFuel"><img src={twitter} alt=""/></a>
                            </div>         
                    </span>
                    </div>
                    
                </div>
                {/* <!---column 1---> */}
                <div class="column">
                    <div class="card">
                        <img class="img-container" src="https://avatars.githubusercontent.com/u/61002548?v=4" alt="" />
                        <h3>Che lindsey lorde </h3>
                        <p> Founder</p>
                        <span class='navbar-text'>
                            <div class='icons'>
                                <a  href="https://ca.linkedin.com/in/muhammadqassimy"><img src={linkedin} alt=""/></a>
                                <a  href="https://www.facebook.com/profile.php?id=100092180580959"><img src={mail} alt=""/></a>
                                <a  href="https://twitter.com/HandiFuel"><img src={twitter} alt=""/></a>
                            </div>         
                    </span>
                    </div>
                    
                </div>
                {/* <!---column 1---> */}
                <div class="column">
                    <div class="card">
                        <img class="img-container" src="#" alt="" />
                        <h3>Wassay Zafar </h3>
                        <p> Founder</p>
                        <span class='navbar-text'>
                            <div class='icons'>
                                <a  href="https://ca.linkedin.com/in/muhammadqassimy"><img src={linkedin} alt=""/></a>
                                <a  href="https://www.facebook.com/profile.php?id=100092180580959"><img src={mail} alt=""/></a>
                                <a  href="https://twitter.com/HandiFuel"><img src={twitter} alt=""/></a>
                            </div>         
                    </span>
                    </div>
                    
                </div>
                {/* <!---column 1---> */}
                <div class="column">
                    <div class="card">
                        <img class="img-container" src="https://avatars.githubusercontent.com/u/61002548?v=4" alt="" />
                        <h3>Sahib  </h3>
                        <p> Founder</p>
                        <span class='navbar-text'>
                            <div class='icons'>
                                <a  href="https://ca.linkedin.com/in/muhammadqassimy"><img src={linkedin} alt=""/></a>
                                <a  href="https://www.facebook.com/profile.php?id=100092180580959"><img src={mail} alt=""/></a>
                                <a  href="https://twitter.com/HandiFuel"><img src={twitter} alt=""/></a>
                            </div>         
                        </span>
                    </div>  
                </div>
            </div>
        </section>
    )
 }
 export default Team;