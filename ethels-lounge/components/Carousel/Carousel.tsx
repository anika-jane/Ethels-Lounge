"use client";
import React, { useState } from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const changeSlide = (newSlide: React.SetStateAction<number>) => {
    setCurrentSlide(newSlide);
  };

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
        <a
          onClick={() => changeSlide(1)}
          className={
            currentSlide === 1 ? styles["active"] : styles["image-links"]
          }
        ></a>
        <a
          onClick={() => changeSlide(2)}
          className={
            currentSlide === 2 ? styles["active"] : styles["image-links"]
          }
        ></a>
        <a
          onClick={() => changeSlide(3)}
          className={
            currentSlide === 3 ? styles["active"] : styles["image-links"]
          }
        ></a>
      </div>
    </div>
  );
};
