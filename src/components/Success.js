import React from 'react'
import { FcMoneyTransfer } from "react-icons/fc"


const style1 = {
height: 600,
marginTop: '114px',
paddingTop: '3%',
}
 const Success =  (params) => 
<div style={style1}>
<FcMoneyTransfer size={200}/>
<h3>Success!</h3>
<p>Thank you for your donation! <br/> We could not do this without you.<br/>Please check your email for a receipt.</p>

</div>


export default Success