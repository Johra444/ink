"use client";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

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
        <Header />
      </div>
    </>
  );
}
