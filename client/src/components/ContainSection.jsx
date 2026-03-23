import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Rentease Platform",
    category: "PRODUCT • MERN • FULL STACK",
    image: "/download.jpg",
    live: "https://your-live-link.com",
  },
  {
    title: "Voting Management System",
    category: "PRODUCT • REACT • NODE",
    image: "/project2.jpg",
    live: "https://your-live-link.com",
  },
];

const ContainSection = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".fade-up");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            scrub: 1,
          },
        },
      );
    });
  }, []);

  return (
    <section className="scroll-section" ref={sectionRef}>
      <div className="bg-[#b1b8be]/20 p-3 rounded-lg w-fit">
        <h2 className="fade-up font-bold  ">My Work</h2>
      </div>

      <div className="cards">
        {projects.map((p, i) => (
          <div className="project-card fade-up" key={i}>
            {/* IMAGE */}
            <div className="card-img">
              <img src={p.image} alt={p.title} />
            </div>

            {/* TEXT */}
            <div className="card-content">
              <p className="category">{p.category}</p>
              <h3>{p.title}</h3>

              <a href={p.live} target="_blank" rel="noreferrer">
                View Product →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContainSection;
