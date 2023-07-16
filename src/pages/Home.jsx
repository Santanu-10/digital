import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carasol from "../components/Carasol";


function Home() {
  return (
    <>
      <div>
        <Header logo={<>Lu<br/>FFy</> }/>

        {/* <!-- <section>
      <div>
        <div>

        </div>          
      </div>
    </section> --> */}

        {/* <!-- hero section --> */}
        <div className="dezian-By">
          <div>
            <h2>
              Dezian By Nika, <span>The Sun God</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est
              in non cupiditate eveniet vel blanditiis dolorem aperiam
              voluptatum voluptate?
            </p>
          </div>
        </div>
        {/* <!-- first box section --> */}

        <div className="model-of-box">
          <div className="first-last">
            <div className="model-no gg">
              <div>
                <i className="fa fa-light fa-gear"></i>
              </div>
              <h4>Eazy to customize</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, saepe iure!
              </p>
            </div>

            <div className="model-no gg">
              <div>
                <i className="fa fa-light fa-gear"></i>
              </div>
              <h4>Eazy to customize</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, saepe iure!
              </p>
            </div>
          </div>

          <div className="middle-class">
            <div className="middle-div">
              <div>
                <i className="fa fa-light fa-gear"></i>
              </div>
              <h4>Eazy to customize</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, saepe iure!
              </p>
            </div>

            <div className="middle-div">
              <div>
                <i className="fa fa-light fa-gear"></i>
              </div>
              <h4>Eazy to customize</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, saepe iure!
              </p>
            </div>
          </div>

          <div className="first-last">
            <div className="model-no gg">
              <div>
                <i className="fa fa-light fa-gear"></i>
              </div>
              <h4>Eazy to customize</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, saepe iure!
              </p>
            </div>

            <div className="model-no gg">
              <div>
                <i className="fa fa-light fa-gear"></i>
              </div>
              <h4>Eazy to customize</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, saepe iure!
              </p>
            </div>
          </div>
        </div>

        <div className="carasol-12">
          <div className="for-carasol12">
            <Carasol/>
            </div>

        </div>
        <div className="product-section">
          <div className="product-caption ">
            <h1>
              Our <b>Awesome Works</b>
            </h1>
            <p className="tracking-in-expand-fwd">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              tempora non rerum iste temporibus sint soluta, sapiente,
              perferendis, ullam accusantium consequatur. Tenetur deserunt enim
              molestias perferendis magni nam, delectus vitae?
            </p>
          </div>

          <div className="images-3">
            <div className="first-sec">
              <img src="./assets/images/photo-1.jpg" alt="" />
              <img src="./assets/images/photo-4.jpg" alt="" />
            </div>
            <div className="first-sec">
              <img src="./assets/images/photo-6.jpg" alt="" />
              <img src="./assets/images/photo-7.jpg" alt="" />
            </div>
            <div className="first-sec">
              <img src="./assets/images/photo-9.jpg" alt="" />
              <img src="./assets/images/photo-2.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="with-us-section">
          <div className="claints">
            <h4>Who Love To Work With Us</h4>
          </div>
          <div className="icons-claints">
            <div>
              <img
                src="./assets/images/Microsoft-Logo.wine.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="./assets/images/pngimg.com-google_PNG102344.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="./assets/images/Tata-logo-2000-2560x1440.png"
                alt=""
              />
            </div>
            <div>
              <img src="./assets/images/meta-logo.png" alt="" />
            </div>
          </div>
        </div>

        {/* <!-- footer --> */}

        <Footer />
      </div>
    </>
  );
}

export default Home;
