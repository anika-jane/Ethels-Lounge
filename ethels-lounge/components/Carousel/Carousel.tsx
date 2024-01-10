import React from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";

export const Carousel = () => {
  return (
    <div className={styles["Carousel-wrapper"]}>
      <div className={styles["Carousel"]}>
        <div className={styles["slide"]} id="slide-1">
          <Image
            className={styles["carousel-image"]}
            src="/Carousel-Images/Istanbul-stairs.png"
            width={300}
            height={500}
            alt=""
          />
        </div>
        <div className={styles["slide"]} id="slide-2">
          <Image
            className={styles["carousel-image"]}
            src="/Carousel-Images/Istanbul-stairs.png"
            width={300}
            height={500}
            alt=""
          />
        </div>
        <div className={styles["slide"]} id="slide-3">
          <Image
            className={styles["carousel-image"]}
            src="/Carousel-Images/Istanbul-stairs.png"
            width={300}
            height={500}
            alt=""
          />
        </div>
      </div>
      <div className={styles["link-wrapper"]}>
        <a href="#slide-1" className={styles["image-links"]}></a>
        <a href="#slide-2" className={styles["image-links"]}></a>
        <a href="#slide-3" className={styles["image-links"]}></a>
      </div>
    </div>
  );
};
