import React from 'react'
import '../scss/EmailCapture.scss'



const EmailCapture = () => <div id="email-capture">



            <p>Please join our mailing list today!
            We'll keep in touch and keep you informed.</p>
               <form name="contact" method="POST" data-netlify="true"  id="form">

               <input type="hidden" name="form-name" value="contact" />

                <label className="label" name="email" htmlFor="email">Email: </label>
                <input type="text" name="email-input" id=""/>

                <label className="label" name="name" htmlFor="name">Name: </label>
                <input type="text" name="name-input" id=""/>
                
                  <button type="submit"> Submit </button>
               </form> 
            </div>

export default EmailCapture