import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/icons8-gmail-48.png'
import location_icon from '../../assets/icons8-google-maps-48.png'
import call_icon from '../../assets/icons8-add-phone-48.png'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d18a6258-0f48-4a1e-8870-2d04dbd79f68");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message);
    }
  };

  return (
    <div>
      <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get In Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. you can contact anytime</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>Haileyesus2024@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Ethiopia, Addis Ababa</p>
                    </div>
                    <div className="contact-detail"> 
                    <img src={call_icon} alt="" /> <p>+251989853281</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contant-right">
               <label htmlFor="">Your Name</label>
               <input type="text"  placeholder=' Enter Your Name' name='name'/>
               <label htmlFor="">Your Email</label>
               <input type="Email"  placeholder='Enter Your Email' name="email"  />
               <label htmlFor="">Write your message here</label>
               <textarea name="message" rows="8" placeholder='Enter Your Message' ></textarea>
               <button type='submit' className="content-submit">Submit now</button>
            </form>
        </div>
      </div>
    </div>
  )
}
export default Contact
