import { useState, useRef  } from "react"
import "./contact.scss"
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [message,setMessage] = useState(false)
  const form = useRef();

  const handleSubmit = (e)=>{
    e.preventDefault()
    setMessage(true)

    emailjs.sendForm('service_0f4gfqh', 'template_586u20f', form.current, 'mfhSRFn8vVYOym1sC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="contact" id="contact">
        <div className="left">
          <img src="https://cdn.pixabay.com/photo/2016/03/31/21/22/communication-1296385_960_720.png" alt="" />
        </div>
        <div className="right">
          <h2>Contact</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email"/>
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thank you for the message! You should receive an email shortly confirming that I have received your message.</span>}
          </form>
        </div>
    </div>
  )
}
