import React,{ useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../scss/Home.scss'
import Hero from './Hero'
import HomeItem from './HomeItem'
import EmailCapture from './EmailCapture'
import img1 from '../assets/hero/hero1.webp'
import img2 from '../assets/hero/hero2.webp'
import img3 from '../assets/hero/hero3.webp'


export default class Home extends React.Component { 
constructor(props) {
    super(props)

    this.state = {
         isVisible: false
    }
}

componentDidMount(){
    setTimeout(() => {
        this.setState({isVisible: true})}, 400) 
    
}

render(){
return (
<div id="home">
     <Hero />
     <form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name-input" />
  <input type="email" name="email-input" />
</form>
    <EmailCapture />
        <div id="gallery">
            {
                this.state.isVisible ? <> 
                <HomeItem
                id={"gallery-item-container-1"}
                image={img1}
                title={"Overview"}
                copy={ <>
                        Mastering Hope was started by a group of educators and community members from Lynwood, California, in April of 2020, to help support low socio-economic communities who were suffering increased unemployment and decreased food/resource accessibility due to the devastation of the coronavirus pandemic. Our immediate goal was to assist families with no tax, stimulus, or unemployment benefit prospects. However, the mission quickly expanded to aid our community at large and also surrounding cities. Mastering Hope is donation-based and has been able to, through the assistance of generous and hardworking community members, the dream team, accomplish a lot of goals towards combating pandemic poverty and hunger in the past three months.
                 </> }/>
            <HomeItem
                id={"gallery-item-container-2"}
                image={img2}
                title={"Leadership"}
                copy={<> 
                        The leaders of the organization have been activists for communities throughout Los Angeles County for decades. Audrey Casas, president, a Lynwood Unified School District educator, has worked with at-risk youth for over 20 years, advocating for student and family rights. Mrs. Casas believes going the extra mile should be the norm for the good of society and even though we are not individually rich, together we are wealthy. Angela Baber,  vice-president, worked in community relations for 20 years, educated at-risk youth for the Lynwood Unified School District, and is currently a behavior coach and English teacher for Lynwood Unified. Ms. Baber believes in helping others understand their worth and reach their potential because nurturing and supporting others will result in a strength that will positively affect humanity. Adolph Lopez III, secretary, has been working in education for 13 years and a classroom teacher for 7 years. Adolph has been an inspiration to special education students and families advocating for their rights. Adolph believes a good leader supports the vision, which will lead to the success of the objectives set forth.
            </>}/>
            <HomeItem
                id={"gallery-item-container-3"}
                image={ img3}
                title={"Impact"}
                copy={<>
                        Mastering Hope's impact has been tremendous. The organization has received over $80,000 in donations from the community, holding more than 11 distribution events, supplying over 6,000 food kits, 2,000 school supply kits, 700 gift cards, 700 toys, in addition to providing tons of clothes to men, women, and children. We have also distributed informational resources varying from food bank lists, free clinics, church services, and school district resources. Every dollar received is used to support our communities.

            </>}/> </>
            :null}
        </div>
</div>
)}
}