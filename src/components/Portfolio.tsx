import React from "react";
import { caveat } from "@/font";
import Image from "next/image";

function Portfolio() {
  // Define an array of image paths and titles
  const images = [
    { src: "/myimage/resumee.png", title: "Resumee builder"},
    { src: "/myimage/table.png", title: "Periodic table" },
    { src: "/myimage/number-game.png", title: "Number guessing game" },
    { src: "/myimage/todos.jpg", title: "To Do List" },
    { src: "/myimage/calculator.jpeg", title: "Simple calculator" },
    { src: "/myimage/multipage.png", title: "Multipage website",width:400, height:500 },

  ];

  return (
    <>
      <section id="portfolio" className="w-full py-36 px-8 text-center bg-[#0a0908]">
        <h4 className={`${caveat.className} text-white text-4xl lg:text-5xl`}>
          <span className="text-[#f6953a]">M</span>y{" "}
          <span className="text-[#f6953a]">L</span>ast{" "}
          <span className="text-[#f6953a]">W</span>ork
        </h4>

        <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-sm lg:text-lg leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          deserunt laudantium officia fuga ipsam quasi corrupti in numquam dolor
          libero explicabo, inventore aperiam, commodi et! Quia iste tempora
          aut, illum culpa ipsum possimus saepe eligendi.
        </p>

        <div className="w-full mt-24 grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-28">
          {images.map((image, index) => (
            <div className="flex flex-col" key={index}>
              <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={500}
                  height={600}
                  className="w-full rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
                />
              </div>
              <p className="mt-6 text-xl">{image.title}</p>
            </div>
          ))}
        </div>
      </section> 
    </>
  );
}

export default Portfolio;
