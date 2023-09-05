import React from "react";

function Map() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height={300}
          src="https://maps.google.com/maps?width=100%25&height=300&hl=en&q=+(newyork)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        >
          &lt;a href="https://www.maps.ie/population/"&gt;Population Estimator
          map&lt;/a&gt;
        </iframe>
      </div>
    </>
  );
}

export default Map;
