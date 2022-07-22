import React, { useEffect, useState } from "react";

const ButtonToScrollUp = () => {
  const [backToTop, setBackTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTop && (
        <button
          className="btn btn-primary sm "
          onClick={scrollUp}
          style={{
            position: "fixed",
            bottom: "50px",
            left: "95%",
            top: "91%",
            width: "50px",
            height: "50px",
            borderRadius: 40,
          }}
        >
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default ButtonToScrollUp;
