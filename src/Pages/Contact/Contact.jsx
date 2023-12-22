import React, { Fragment } from "react";
import '../../styles/contact.css'
import { useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Contact = () => {
  const { colorMode } = useColorMode();
  const reset = (e) =>{
    e.target.form.reset()
  }
  return (
    <div id="contact">

    <div id="Contact" style={{ color: "black" }}>
      {" "}
      <Fragment>
        <section className="contact">
          <div className="contact-heading">
            <h2 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Contact Me </h2>
          </div>
       
          <div className="container">
            <div className="row">
              <div className="column">
                <div className="contact-widget ">
                  <div className="contact-widget-item">
                    <a href="https://maps.app.goo.gl/PkL1HH85qruspy236" target="_blank">
                      <div className="icon" style={{backgroundColor:"#5084e4"}}>
                        <i className="fa fa-location-dot"/>
                      </div>
                    </a>
                    <div className="text">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Address</h5>
                      <a href="https://maps.app.goo.gl/PkL1HH85qruspy236" target="_blank">
                        <p style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Hospet, Karnataka-583201</p>
                      </a>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <a href="tel:+8123483698">
                      <div className="icon" style={{backgroundColor:"#5084e4"}}>
                      <i className="fa fa-phone"></i>
                      </div>
                    </a>
                    <div className="text" id="contact-phone">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Contact me</h5>
                      <p style={colorMode==='dark'?{color:'white'}:{color:'black'}}>+91 8123483698</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <a href="mailto:anandkumark055@gmail.com">
                      <div className="icon" style={{backgroundColor:"#5084e4"}}>
                        <i className="fa-regular fa-envelope"></i>
                      </div>
                    </a>
                    <div className="text" id="contact-email">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Email</h5>
                      <a href="mailto:anandkumark055@gmail.com">
                        <p style={colorMode==='dark'?{color:'white'}:{color:'black'}}>anandkumark055@gmail.com</p>
                      </a>
                    </div>
                  </div>
                  <div className="contact-widget-item">
                    <a href='https://github.com/AnandAK07'>
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                      <i className="fa-brands fa-github"></i>
                    </div>
                    </a>
                    <div className="text" id="contact-github">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Github</h5>
                      <Link to={"https://github.com/AnandAK07"} target="blank" style={colorMode==='dark'?{color:'white'}:{color:'black'}}>@AnandAK07</Link>
                    </div>
                  </div>
                  <div className="contact-widget-item">
                    <a href="https://www.linkedin.com/in/anandak07/">
                      <div className="icon" style={{backgroundColor:"#5084e4"}}>
                        <i className="fa-brands fa-linkedin"></i>
                      </div>
                    </a>
                    <div className="text" id="contact-linkedin">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Linkedin</h5>
                      <Link to={"https://www.linkedin.com/in/anandak07/"} style={colorMode==='dark'?{color:'white'}:{color:'black'}} target="blank">@Anand Kumar K</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="contact-form">
                  <form
                    action="https://getform.io/f/35fb6db6-8957-4e89-a32d-572d1bc07ec5"
                    method="POST">
                    <input type="text" name="name"  placeholder="Name" style={colorMode==='dark'?{color:'white'}:{color:'black'}}/>
                    <input type="email" name="email" placeholder="Email" style={colorMode==='dark'?{color:'white'}:{color:'black'}}/>
                    <textarea
                      placeholder="Message"
                      type="text"
                      style={colorMode==='dark'?{color:'white'}:{color:'black'}}
                      name="message"></textarea>
                    <button
                      type="submit"
                      className="site-btn"
                      style={colorMode==='dark'?{color:'white'}:{color:'black'}}
                      formTarget="_blank" onClick={reset}>
                      {" "}
                      Send a DM
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </div>
  </div>
  );
};

export default Contact;