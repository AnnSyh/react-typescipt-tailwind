import React, { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import './locomotive-scroll.css';



export function LocomotiveScrollPage() {

  useEffect(() => {

    const body = document.body as HTMLAreaElement;
    const backToTop = document.querySelector(".back-to-top");
    const opacityClass = "opacity-0";
    const visibilityClass = "invisible";

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]") as HTMLAreaElement,
      smooth: true,
      // tablet: { smooth: true },
      smartphone: { smooth: true }
    });

    const arrayOfColors = [
      "#0a9396",
      "#005f73",
      "#ae2012",
      "#3d405b",
      "#003049",
      "#bc6c25",
      "#ff006e",
      "#ef476f",
      "#1982c4",
      "#ee964b",
      "#0ead69",
      "#390099",
      "#f6aa1c",
      "#54101d",
      "#2b2c28",
      "#85c7f2",
      "#e15a97",
      "#2b70e3",
      "#b36a5e"
    ];
    
    function getRandomColor() {
      const arrayLength = arrayOfColors.length;
      const randomValue = Math.random() * arrayLength;
      const roundedNumber = Math.floor(randomValue);
      const color = arrayOfColors[roundedNumber];
      return color;
    }
    
    // scroll.on("call", (value, way, obj) => {
    //   if (value === "randomizeTextColor") {
    //     if (way === "enter") {
    //       obj.el.style.color = getRandomColor();
    //     }
    //   } else if (value === "toggleBackToTop") {
    //     if (way === "enter") {
    //       backToTop.classList.add(opacityClass, visibilityClass);
    //     } else {
    //       backToTop.classList.remove(opacityClass, visibilityClass);
    //     }
    //   }
    // });
    
    scroll.on("scroll", (instance) => {
      const visibleSubSectionHeading = document.querySelector(
        ".sub-section h2.is-inview"
      );
    
      if (visibleSubSectionHeading) {
        const a =visibleSubSectionHeading.parentElement  as HTMLAreaElement;
        const parentSection = a.parentElement  as HTMLAreaElement;

        // const bodyStyle = body.style  as HTMLAreaElement;
        // bodyStyle.backgroundColor = parentSection.dataset.bgColor;
      } else {
        body.style.backgroundColor = "";
      }
    });
    
    



  })



  return (
    <>
      <div data-scroll-container>
        <section id="intro" className="h-screen flex items-center justify-center text-center bg-green-200" data-scroll-section>
          <div className="container px-5 mx-auto">
            <h1 className="text-5xl font-bold" data-scroll data-scroll-repeat data-scroll-call="toggleBackToTop">A Simple Demo With <a className="underline" href="https://locomotivemtl.github.io/locomotive-scroll/" target="_blank">Locomotive Scroll</a></h1>
            <p className="text-2xl mt-2">Scroll down 👇</p>
          </div>
        </section>
        <section className="py-40" data-scroll-section>
          <div className="lg:container px-5 mx-auto">
            <nav>
              <ul className="grid md:grid-flow-col gap-4 lg:gap-16 justify-center text-center">
                <li>
                  <a className="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:border-green-400 focus:border-green-400 rounded-md transition" href="#about-section" data-scroll-to>
                    About
                  </a>
                </li>
                <li>
                  <a className="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:border-green-400 focus:border-green-400 rounded-md transition" href="#office" data-scroll-to>
                    Office
                  </a>
                </li>
                <li>
                  <a className="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:border-green-400 focus:border-green-400 rounded-md transition" href="#services" data-scroll-to>
                    Services
                  </a>
                </li>
                <li>
                  <a className="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:border-green-400 focus:border-green-400 rounded-md transition" href="#case-studies" data-scroll-to>
                    Case Studies
                  </a>
                </li>
                <li>
                  <a className="inline-block relative text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:border-green-400 focus:border-green-400 rounded-md transition" href="#clients-section" data-scroll-to>
                    Clients
                  </a>
                </li>
                <li>
                  <a className="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:border-green-400 focus:border-green-400 rounded-md transition" href="#contact" data-scroll-to>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section id="about-section" className="py-40 bg-green-50" data-scroll-section>
          <div className="container px-5 mx-auto">
            <div id="about" className="lg:grid grid-cols-2 gap-4 items-start">
              <h2 className="text-5xl font-extrabold" data-scroll data-scroll-sticky data-scroll-target="#about">About</h2>
              <div className="text-xl pt-4 lg:pt-0">
                <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium, ante sed lacinia ultricies, sapien massa ultricies erat, eu tristique justo est ut tortor. In nibh est, porttitor vulputate erat et, faucibus volutpat felis. Curabitur eleifend nisi quis consectetur euismod. Morbi ac condimentum ante. Aliquam euismod sodales arcu et iaculis. Cras porttitor nisl felis, eget interdum magna cursus et. Curabitur vehicula dignissim ornare.</p>
                <p className="mb-8">Cras lacinia sit amet justo ut maximus. Integer sapien felis, gravida a commodo et, porttitor non libero. Maecenas lacinia accumsan eros eu dapibus. Mauris dolor odio, vulputate vitae purus vitae, tincidunt egestas orci. Maecenas sollicitudin fringilla justo, id tempus metus elementum sit amet. Nullam vestibulum mauris vitae condimentum sagittis. Suspendisse sed purus vel neque ullamcorper ornare egestas vel ligula. Duis ac mattis odio. Aliquam sodales turpis nec diam maximus, nec fermentum massa mollis.</p>
                <p>Praesent finibus egestas velit, vitae tristique leo luctus sit amet. Vivamus eu facilisis neque, a venenatis mi. Vestibulum ultricies venenatis arcu sit amet fringilla. Curabitur non tincidunt sem. Sed quis quam ut nulla tincidunt dapibus quis ac lorem. Nulla lobortis ac metus ut molestie.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="office" className="py-20" data-scroll-section>
          <div className="sm:grid grid-cols-2 gap-40">
            <figure className="flex items-end">
              <img className="shadow-lg" width="1000" height="667" src="https://assets.codepen.io/162656/office1.jpg?format=auto" alt="" data-scroll data-scroll-speed="4.8" />
            </figure>
            <figure>
              <img className="shadow-lg" width="1000" height="1498" src="https://assets.codepen.io/162656/office2.jpg?format=auto

" alt="" data-scroll data-scroll-speed="1.2" />
            </figure>
          </div>
        </section>
        <section id="services" className="relative py-60 bg-green-50" data-scroll-section>
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -skew-x-12 whitespace-nowrap text-6xl sm:text-9xl font-extrabold py-4">
            <span className="inline-block" data-scroll data-scroll-repeat data-scroll-speed="3" data-scroll-call="randomizeTextColor">S</span>
            <span className="inline-block" data-scroll data-scroll-repeat data-scroll-speed="2" data-scroll-call="randomizeTextColor">e</span>
            <span className="inline-block" data-scroll data-scroll-repeat data-scroll-speed="3" data-scroll-call="randomizeTextColor">r</span>
            <span className="inline-block" data-scroll data-scroll-repeat data-scroll-speed="2" data-scroll-call="randomizeTextColor">v</span>
            <span className="inline-block" data-scroll data-scroll-repeat data-scroll-speed="3" data-scroll-call="randomizeTextColor">i</span>
            <span className="inline-block" data-scroll data-scroll-repeat data-scroll-speed="2" data-scroll-call="randomizeTextColor">c</span>
            <span className="inline-block" data-scroll data-scroll-repeat data-scroll-speed="3" data-scroll-call="randomizeTextColor">e</span>
            <span className="inline-block" data-scroll data-scroll-repeat data-scroll-speed="2" data-scroll-call="randomizeTextColor">s</span>
          </h2>
          <div className="transform rotate-6 skew-x-12">
            <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="20" data-scroll-target="#services">
              <span className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl bg-green-400 p-5 whitespace-nowrap">Social Media — Email Marketing — Digital Advertising</span>
            </div>
          </div>
          <div className="transform -rotate-6 -skew-x-12 mt-40">
            <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-20" data-scroll-target="#services">
              <span className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl bg-green-400 p-5 whitespace-nowrap">Web Development - Motion Design - Graphic Design</span>
            </div>
          </div>
        </section>
        <section id="case-studies" className="text-center" data-scroll-section>
          <section className="py-32 border-b-2 border-gray-400 sub-section" data-bg-color="#aed9e0">
            <div className="container px-5 mx-auto">
              <h2 className="text-5xl font-extrabold" data-scroll data-scroll-repeat>Case Study #1</h2>
              <figure className="my-16">
                <img className="shadow-lg mx-auto" width="1000" height="667" src="https://assets.codepen.io/162656/case-study-1.jpg" alt="" />
              </figure>
              <a className="text-3xl" href="#" data-scroll>View case study ⟶</a>
            </div>
          </section>
          <section className="py-32 border-b-2 border-gray-400 transition sub-section" data-bg-color="#faf3dd">
            <div className="container px-5 mx-auto">
              <h2 className="text-5xl font-extrabold" data-scroll data-scroll-repeat>Case Study #2</h2>
              <figure className="my-16">
                <img className="shadow-lg mx-auto" width="1000" height="667" src="https://assets.codepen.io/162656/case-study-2.jpg" alt="" />
              </figure>
              <a className="text-3xl" href="#">View case study ⟶</a>
            </div>
          </section>
          <section className="py-32 transition sub-section" data-bg-color="#b8f2e6">
            <div className="container px-5 mx-auto">
              <h2 className="text-5xl font-extrabold mb-5" data-scroll data-scroll-repeat>Case Study #3</h2>
              <figure className="my-16">
                <img className="shadow-lg mx-auto" width="1000" height="667" src="https://assets.codepen.io/162656/case-study-3.jpg" alt="" />
              </figure>
              <a className="text-3xl" href="#">View case study ⟶</a>
            </div>
          </section>
        </section>
        <section id="clients-section" className="py-40" data-scroll-section>
          <div className="container px-5 mx-auto">
            <div id="clients" className="lg:grid grid-cols-2 gap-4 items-start">
              <h2 className="text-5xl font-extrabold" data-scroll data-scroll-sticky data-scroll-target="#clients">Clients</h2>
              <div className="text-xl pt-4 lg:pt-0">
                <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium, ante sed lacinia ultricies, sapien massa ultricies erat, eu tristique justo est ut tortor. In nibh est, porttitor vulputate erat et, faucibus volutpat felis. Curabitur eleifend nisi quis consectetur euismod. Morbi ac condimentum ante. Aliquam euismod sodales arcu et iaculis. Cras porttitor nisl felis, eget interdum magna cursus et. Curabitur vehicula dignissim ornare.</p>
                <p className="mb-8">Cras lacinia sit amet justo ut maximus. Integer sapien felis, gravida a commodo et, porttitor non libero. Maecenas lacinia accumsan eros eu dapibus. Mauris dolor odio, vulputate vitae purus vitae, tincidunt egestas orci. Maecenas sollicitudin fringilla justo, id tempus metus elementum sit amet. Nullam vestibulum mauris vitae condimentum sagittis. Suspendisse sed purus vel neque ullamcorper ornare egestas vel ligula. Duis ac mattis odio. Aliquam sodales turpis nec diam maximus, nec fermentum massa mollis.</p>
                <p>Praesent finibus egestas velit, vitae tristique leo luctus sit amet. Vivamus eu facilisis neque, a venenatis mi. Vestibulum ultricies venenatis arcu sit amet fringilla. Curabitur non tincidunt sem. Sed quis quam ut nulla tincidunt dapibus quis ac lorem. Nulla lobortis ac metus ut molestie.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-80 border-t-2 border-solid border-gray-50" data-scroll-section>
          <div className="container px-5 mx-auto text-center">
            <h2 className="text-2xl sm:text-5xl font-extrabold py-4" data-scroll data-scroll-repeat data-scroll-call="randomizeTextColor">
              <span className="inline-block" data-scroll data-scroll-delay="0.15" data-scroll-speed="5">h</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.095" data-scroll-speed="5">e</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.085" data-scroll-speed="5">l</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.075" data-scroll-speed="5">l</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.065" data-scroll-speed="5">o</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.055" data-scroll-speed="5">@</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.045" data-scroll-speed="5">g</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.035" data-scroll-speed="5">e</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.035" data-scroll-speed="5">o</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.045" data-scroll-speed="5">r</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.055" data-scroll-speed="5">g</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.065" data-scroll-speed="5">e</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.075" data-scroll-speed="5">.</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.085" data-scroll-speed="5">c</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.095" data-scroll-speed="5">o</span>
              <span className="inline-block" data-scroll data-scroll-delay="0.15" data-scroll-speed="5">m</span>
            </h2>
          </div>
        </section>
        <section className="h-screen flex items-center justify-center text-center bg-green-200" data-scroll-section>
          <div className="container px-5 mx-auto">
            <p className="text-3xl">Check more <a className="underline" href="https://tutsplus.com/authors/george-martsoukos" target="_blank">hands-on tutorials</a> 🤓</p>
          </div>
        </section>
        <a className="back-to-top fixed bottom-24 right-4 text-red-500 hover:text-red-600 focus:text-red-600 transition opacity-0 invisible" href="#intro" role="button" aria-label="Back to top" data-scroll-to>
          <svg className="fill-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z" />
          </svg>
        </a>
      </div>

      <footer className="page-footer">
        <span>made by </span>
        <a href="https://georgemartsoukos.com/" target="_blank">
          <img width="24" height="24" src="https://assets.codepen.io/162656/george-martsoukos-small-logo.svg" alt="George Martsoukos logo" />
        </a>
      </footer>
    </>
  )
}