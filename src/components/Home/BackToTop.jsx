import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa6";
function BackToTop() {
  function reveal() {
    let reveals = document.querySelectorAll(".reveal, .revealUp");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("show");
      } else {
        reveals[i].classList.remove("show");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <>
      <ScrollToTop
        smooth
        top={500}
        className="BackToTop"
        component={<FaArrowUp className="mx-auto text-white text-2xl" />}
      />
    </>
  );
}

export default BackToTop;
