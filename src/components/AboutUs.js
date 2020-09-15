import React from 'react'
import '../scss/AboutUs.scss'
import img from '../assets/ITEL MODEL.png'
import img1 from '../assets/ITEL MOBILE.png'


const AboutUs = () => <div className="bx"> 

    <div id="about-us-container">

        <img src={img} alt="ITEL MODEL" id="ITEL-Model" />
        <img src={img1} alt="ITEL MODEL" id="ITEL-Mobile-Model" />
        <div id="About-us-copy">        
            <h1>About Us</h1>
            <p
            >Mastering Hope exists to enhance the quality of life for community members by using collective resources and benefits that will support essential needs, raise the spirits, and infuse hope. Relying on generous donations (monetary and material) from our community, we put resources in place so that vulnerable community members thrive. When members of a community have food, shelter, and clothing, they can positively contribute to and participate in society because their basic needs are met. Mastering Hope’s motivation is to improve life for the community, so the community can improve life for all.   </p>

            <p>Moving into the future, Mastering Hope will enter the realm of virtual education training/mentorship, increased food/resource distributions, education/scholarship, job placement, housing, mental health assistance, and motivational speaking. All of these efforts will support long term lifestyle improvement for people and communities who need it most. Community improvement equals societal gains, resulting in an improved world. The organization’s I.T.E.L. Model is a synopsis of our future endeavors.</p>
        </div>

    </div>

</div>

export default AboutUs