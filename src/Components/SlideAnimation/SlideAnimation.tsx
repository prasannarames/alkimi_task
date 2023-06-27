import React from "react";
import styles from "./SlideAnimation.module.css";

const SlideAnimation = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.marquee}>
        <p className={` text-[18px] text-white font-bold uppercase m-auto`}>
          <span className="ml-5">lorem ipsum</span>
          <span className="ml-5">lorem ipsum</span>
          <span className="ml-5">lorem ipsum</span>
          <span className="ml-5">lorem ipsum</span>
          <span className="ml-5">lorem ipsum</span>
          <span className="ml-5">lorem ipsum</span>
          <span className="ml-5">lorem ipsum</span>
          <span className="ml-5">lorem ipsum</span>
          <span className="ml-5">lorem ipsum</span>
          <span className="ml-5">lorem ipsum</span>
        </p>
      </div>
    </div>
  );
};

export default SlideAnimation;
