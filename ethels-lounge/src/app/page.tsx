import Image from "next/image";
import React from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import { Instagram } from "../../components/SocialMedia/Instagram";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        hello gorgeous
        <Carousel />
      </div>
    </main>
  );
}
