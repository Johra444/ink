"use client";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundImage: 'url("/home.jpg")', // Replace with the actual image path

    minHeight: "100vh",
  };

  return (
    <>
      <Head>
        <title>Crypto</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div style={backgroundStyle} className="brightness-50 ">
          {/*  <div className="bg-blue-300"> */}
        </div>
        <div className="absolute z-50 w-full h-full top-0">
          <Header />
          <div className="w-full h-full flex items-center justify-center flex-col ">
            <Image
              src="/Foxies.png"
              width={600}
              height={600}
              className="mx-10 px-10"
            />
            <h1 className="font-VT323 text-white text-2xl xl:text-4xl relative bottom-10 sm:bottom-14 text-center">
              First idle-stacking Play-to-earn on Aleph Zero
            </h1>
            <Link href="/mint">
            <button class="relative bottom-10 border-[6px] border-black bg-white rounded-full text-4xl sm:text-6xl text-black px-12 flex items-center">
              <span class="relative font-VT323">Start</span>
              <span class="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl font-bold">
                &gt;
              </span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
