import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Categories Participant for Registration BISF
                2025
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <Link href="/homeindo" legacyBehavior>
            <a className="btn-regist btn-action text-center me-lg-5 m-2">
              Indonesia Participant{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a>
            </Link>
            <Link href="/homeinter" legacyBehavior>
            <a className="btn-regist btn-action text-center me-lg-5 m-2">
              International Participant{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
