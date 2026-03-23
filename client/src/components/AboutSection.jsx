import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../service/golbalColorCombinaton.css"; // adjust path as needed";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title underline animation
      gsap.fromTo(
        ".title-underline",
        { width: "0%" },
        {
          width: "100%",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Staggered paragraphs
      gsap.fromTo(
        ".about-text p",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(0.6)",
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Card 3D tilt on scroll
      gsap.fromTo(
        ".about-card",
        { rotationY: 10, scale: 0.95, opacity: 0 },
        {
          rotationY: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-card",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        }
      );

      // Skills stagger
      gsap.fromTo(
        ".skills span",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "elastic.out(1, 0.4)",
          scrollTrigger: {
            trigger: ".skills",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Background blob parallax
      gsap.to(".blob-bg", {
        y: 100,
        x: 50,
        duration: 3,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup all GSAP animations
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      {/* Decorative background blob */}
      <div className="blob-bg"></div>

      <div className="container">
        <h2 className="about-title fade-up">
          Building <span>scalable digital products</span> with modern
          technologies.
          <div className="title-underline"></div>
        </h2>

        <div className="about-grid">
          <div className="about-text fade-up">
            <p>
              I am a Full Stack Developer specializing in the MERN stack,
              currently pursuing B.Tech in Computer Science Engineering. I focus
              on building scalable, high-performance web applications.
            </p>
            <p>
              I have developed real-world systems like rental platforms and
              voting management applications, working with modern technologies
              and production-level architectures.
            </p>
            <p>
              Along with development, my BPO experience has enhanced my
              communication, problem-solving, and teamwork skills.
            </p>
          </div>

          <div className="about-card fade-up">
            <h3>Experience</h3>
            <ul>
              <li>💼 MERN Stack Development</li>
              <li>🚀 Full Stack Internship</li>
              <li>🧠 Real-world Product Development</li>
              <li>📞 BPO Professional Experience</li>
            </ul>
          </div>
        </div>

        <div className="skills fade-up">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;