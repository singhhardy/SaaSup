import React from "react";
import "./Section1.css";

function Section1() {
  return (
    <div className="section-1">
      <div className="box-1">
        <div className="box-1-head">
          <div className="box-1-head-image">
            <img src="victorflow.png" width='100px' alt="victorFlow" />
          </div>
          <div className="box-1-head-content">
            <h1>VictorFlow </h1>
            <p>
              Webflow Design & <br></br> Development Agency
            </p>
          </div>
        </div>
        <div className="box-1-body">
          <h1>Follow Us</h1>
          <div className="box-1-body-content">
            <div className="box-1-body-content-1">
              <div className="box-1-body-content-icon">
              <i class="fa-brands fa-instagram"></i>              </div>
              <div className="box-1-body-content-text">
                <a href="#" target="_blank">
                  Instagram <i class="fa-solid fa-arrow-right"></i>
                </a>
                <p>
                  Join our instagram page, we share UI/UX <br></br>Design tips.
                </p>
              </div>
            </div>
            <div className="box-1-body-content-1">
              <div className="box-1-body-content-icon">
              <i class="fa-brands fa-twitter"></i>              </div>
              <div className="box-1-body-content-text">
                <a href="#" target="_blank">
                  Twitter <i class="fa-solid fa-arrow-right"></i>
                </a>
                <p>
                  Join our Twitter page, we share UI/UX <br></br>Design tips.
                </p>
              </div>
            </div>
            <div className="box-1-body-content-1">
              <div className="box-1-body-content-icon">
              <i class="fa-brands fa-linkedin"></i>              
              </div>
              <div className="box-1-body-content-text">
                <a href="#" target="_blank">
                  Linkedin <i class="fa-solid fa-arrow-right"></i>
                </a>
                <p>
                  Join our Linkedin page, we share UI/UX <br></br>Design tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blank"></div>
      
      <div className="box-2">
        <h1>File info</h1>
        <div className="box-pop">
        <div className="box-1-body-content-1">
              <div className="box-1-body-content-icon">
              <img src="figmalogo.png" width='50px'/>
              </div>
              <div className="box-1-body-content-text">
              <h2>Figma File of <a href="#" style={{color:"#4353FF"}}>FREE</a></h2>
                <p>
                  It is free to use for personal and<br></br> commercial purposes.
                </p>
              </div>
            </div>
            <div className="box-1-body-content-1">
              <div className="box-1-body-content-icon">
              <img src="webflow.png" width='50px'/>
              </div>
              <div className="box-1-body-content-text">
              <h2>Webflow</h2>
                <p>
                  The complete design is available as a<br></br> Webflow template.
                </p>
              </div>
            </div>

            <div className="button">
              <a href="#" className="btn">Get Template $79 USD</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
