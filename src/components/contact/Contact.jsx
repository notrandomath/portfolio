import { useState  } from "react"
import "./contact.scss"

export default function Contact() {
  const [message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setMessage(true)
  }
  return (
    <div className="contact" id="contact">
        <div className="left">
          <img src="assets/cpp logo.png" alt="" />
        </div>
        <div className="right">
          <h2>Contact (Under Construction)</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email"/>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thank you for the message! I will be sure to reply back ASAP.</span>}
          </form>
        </div>
    </div>
  )
}
