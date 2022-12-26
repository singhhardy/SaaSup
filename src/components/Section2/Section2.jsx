import React from "react";
import "./Section2.css";

function Section2() {
  return (
    <div className="section-2">
      <div className="sec-2-box-1">
        <h1 className="sec-head">Images</h1>
        <div className="sec-2-box-1-head">
          <img src="pexels.png" />
          <a href="#">
            Pexels <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="sec-2-box-1-content">
          <p>
            You can check the licenses and download <br></br>the images for free
            on <a style={{fontSize:"20px", marginLeft:"-3%"}} href="#">Pexels</a>
          </p>
        </div>

        <div className="sec-2-box-1 box-two">
          <div className="sec-2-box-1-head">
            <img src="unsplash.png" />
            <a href="#">
              Unsplash <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="sec-2-box-1-content">
            <p className="text">
              You can check the licenses and download <br></br>the images for
              free on<a style={{fontSize:"20px",  marginLeft:"-2%"}} href="#">Unsplash</a>
            </p>
          </div>
        </div>
      </div>
      <div className="sec-2-box-2">
      <h1 className="sec-head">Fonts</h1>
      <div className="sec-2-box-1">
        <div className="sec-2-box-1-head">
          <img src="nunito.png" />
          <a href="#">
            Nunito <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="sec-2-box-1-content">
          <p>
          Workment template uses free licensed<a href="#" style={{fontSize:"20px",  marginLeft:"-2%"}}>Google Fonts</a>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Section2;
