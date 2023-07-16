import React from "react";

function Contact_con() {
  return (
    <>
        <div class="contact-head">
      <h1>Get In Touch</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        architecto.
      </p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>



      <div class="form-section">
        <div class="iner-form">
          <form action="" method="post">
            <input
              class="form-name"
              type="text"
              placeholder="Enter Your Name..."
            />
            <br />
            <input class="email-phone" type="text" placeholder="Email" />
            <input class="email-phone" type="text" placeholder="Phone" />
            <br />
            <input class="form-name" type="text" placeholder="Website" />
            <br />
            <textarea
              class="text-area"
              name="Your Message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button class="submit-button">Submit</button>
          </form>
        </div>
      </div>

      <div class="find-us-section">
        <h1>Where To Find Us?</h1>

        <div class="find-us-icon">
          <div class="location">
            <div>
              <i class="fa fa-light fa-location-arrow"></i>
            </div>
            <h3>Location</h3>
            <p>loremmmm</p>
          </div>

          <div class="location">
            <div>
              <i class="fa-solid fa-clock-rotate-left"></i>
            </div>
            <h3>Working Time</h3>
            <p>loremmmm</p>
          </div>

          <div class="location">
            <div>
              <i class="fa fa-duotone fa-phone"></i>
            </div>
            <h3>Call Us</h3>
            <p>loremmmm</p>
          </div>

          <div class="location">
            <div>
              <i class="fa fa-solid fa-envelope-circle-check"></i>
            </div>
            <h3>Email</h3>
            <p>loremmmm</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact_con;
