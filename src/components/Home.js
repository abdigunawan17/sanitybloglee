import React from "react";
import LangeitMalam from "../images/langitmalam.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={LangeitMalam}
        alt="blognya putu"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-200 font-bold cursive leading-none lg:leading-snug">
          Halloww..I'm Bli Putu{" "}
        </h1>
      </section>
    </main>
  );
};

export default Home;
