import React from "react";

const GoogleMap = () => {
  return (
    <div className="pb-100">
      <div className="container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115468.51594000727!2d0.08687013480029906!3d35.93633800887286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1281a801320c13af%3A0x4e46c77b60f28a6a!2sMostaganem%2C%20Algeria!5e0!3m2!1sen!2sbd!4v1691042374679!5m2!1sen!2sbd"
            width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default GoogleMap;
