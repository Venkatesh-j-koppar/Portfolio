import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum
          perspiciatis minima aut ex eum! Error odio eius nisi officia
          perferendis, repellat mollitia corporis dignissimos repellendus eaque,
          inventore et sequi optio sapiente, molestiae vel vitae accusamus ex
          voluptatem architecto placeat id a soluta assumenda! Assumenda
          quisquam consequuntur nihil excepturi rem.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          repudiandae, neque quae ducimus fugiat expedita. Laborum veniam,
          temporibus aliquam praesentium perspiciatis non odit exercitationem
          quia ipsum quisquam at quibusdam mollitia veritatis sint similique
          incidunt! Odit molestias sint autem, culpa tempore repellendus
          voluptatem illum debitis quasi ab dicta. Fugiat, accusantium
          praesentium?
        </p>
      </div>
    </div>
  );
}

export default About;
