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
                  <h3>Par téléphone</h3>
                  <a href="tel:(33)772339892">(33) 72 33 98 92</a>
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
                  <h3>Par mail</h3>
                  <a href="mailto:contact@dzairtrips.com">contact@dzairtrips.com</a>
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
