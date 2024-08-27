// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 m-auto ">
//       <div className="text-center md:text-left md:w-1/2">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
//           Hi, I'm <span className="text-yellow-400">[Your Name]</span>
//         </h1>
//         <p className="mt-4 text-lg md:text-xl text-gray-200">
//           A passionate developer specializing in [Your Specialization]. Let's build something amazing together.
//         </p>
//         <div className="mt-6">
//           <a
//             href="#contact"
//             className="inline-block bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>
//       <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
//         <img
//           src="[Your Image URL]"
//           alt="Hero"
//           className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-full shadow-lg"
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
///////////////////////////////////////////////
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 m-auto">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-yellow-400">Talha Nawaz</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            A passionate developer specializing in React JS. Let's build something amazing together.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300 hover:cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="[Your Image URL]"
            alt="Hero"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
