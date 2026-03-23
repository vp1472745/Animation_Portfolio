import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import gsap from "gsap";

// 🔥 Avatar
function Avatar() {
  const group = useRef();
  const { scene, animations } = useGLTF("/model.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction?.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  useFrame(({ mouse }) => {
    if (group.current) {
      group.current.rotation.y += (mouse.x * 0.3 - group.current.rotation.y) * 0.08;
      group.current.rotation.x += (mouse.y * 0.2 - group.current.rotation.x) * 0.08;
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={1.6} position={[0, -1.2, 0]} />
    </group>
  );
}
// 🚀 Hero
const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Prevent stale opacity/transform after refresh or strict-mode remounts.
      gsap.set([".hero-title", ".hero-subtitle", ".btn-primary", ".hero-visual"], {
        clearProps: "opacity,transform",
      });

      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(".hero-subtitle", {
          y: 40,
          opacity: 0,
          duration: 0.7,
        }, "-=0.6")
        .from(".btn-primary", {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
        }, "-=0.4")
        .from(".hero-visual", {
          x: 80,
          opacity: 0,
          duration: 1,
        }, "-=0.7");
    }, heroRef);

    // 🖱️ mouse parallax
    const move = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      ctx.revert();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>

      {/* 🌊 Background */}
    <div
    className="ripple"
    style={{
      left: `${mouse.x * 5 + 50}%`,
      top: `${mouse.y * 5 + 50}%`,
    }}
  />

      {/* 🧠 LEFT TEXT */}
   <div className="hero-content">
  <p className="hero-kicker">Portfolio</p>

  <h1 className="hero-title">
    Showcasing my work with
    <span className="text-gradient"> real world MERN projects</span>
  </h1>

  <p className="hero-subtitle">
    Explore my projects including rental platforms, voting systems and modern web applications.
  </p>

  <button className="btn-primary">
    View Projects 🚀
  </button>
</div>

      {/* 🎮 RIGHT 3D */}
      <div className="hero-visual">
        <Canvas
          camera={{ position: [0, 0.5, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }} // ✅ transparent bg
        >
          <Suspense fallback={null}>
            {/* lights */}
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <pointLight position={[-5, 5, 5]} color="#6366f1" intensity={1.2} />
            <pointLight position={[5, -5, 5]} color="#06b6d4" intensity={1} />

            <Avatar />
          </Suspense>

          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={3}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;

useGLTF.preload("/model.glb");