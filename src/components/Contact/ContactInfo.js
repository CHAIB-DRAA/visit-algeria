import React from "react";
import contactinfo1 from "../../../public/images/contact-info/contact-info-1.png";
import Image from "next/image";

import contactinfo2 from "../../../public/images/contact-info/contact-info-2.png";
import contactinfo3 from "../../../public/images/contact-info/contact-info-3.png";
import border from "../../../public/images/border.png";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area ptb-100">
        <div className="container">
          <div className="contact-info-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-contact-nfo">
                  <Image
                    src={contactinfo1}
                    width={"auto"}
                    height={"auto"}
                    alt="contact"
                  />
                  <h3>Call Us</h3>
                  <a href="tel:(257)-563-7401">(257) 563-7401</a>
                  <a href="tel:(372)-587-2335">(372) 587-2335</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-contact-nfo">
                  <Image
                    src={contactinfo2}
                    width={"auto"}
                    height={"auto"}
                    alt="contact"
                  />
                  <h3>Mail Us</h3>
                  <a href="mailto:contact@beautealgerienne.com>contact@beautealgerienne.com</a>
                </div>
              </div>
             
            </div>
            <Image
              className="border-shape"
              src={border}
              width={"auto"}
              height={"auto"}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
