import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
  FaWhatsapp,
  FaMedium,
} from "react-icons/fa";
import * as THREE from "three";

function Hero() {
  const titles = [
    "Software Engineer",
    "Web Developer",
    "Back-End Developer",
    "Tech Enthusiast",
  ];
  const [currentTitle, setCurrentTitle] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  // 3D Scene Setup
  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create a complex geometric shape
    const geometry = new THREE.IcosahedronGeometry(1, 2);
    const material = new THREE.MeshStandardMaterial({
      color: 0x10b981, // Emerald-500 color
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Camera positioning
    camera.position.z = 3;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the shape
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.005;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/priyanshudubey",
      color: "hover:text-gray-100",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/priyanshudubey/",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:priyanshu0dubey@gmail.com",
      color: "hover:text-emerald-500",
    },
    {
      icon: <FaGlobe />,
      href: "https://priyanshudubey.com",
      color: "hover:text-emerald-500",
    },
    {
      icon: <FaWhatsapp />,
      href: "http://wa.me/+447444764677",
      color: "hover:text-emerald-600",
    },
    {
      icon: <FaMedium />,
      href: "https://medium.com/@priyanshu0dubey",
      color: "hover:text-black",
    },
  ];

  // Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Item Variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen relative flex items-center overflow-hidden bg-[#1A1A1A]">
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 opacity-30 pointer-events-none"
      />

      {/* Animated Background Particles */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.2, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}>
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-emerald-500/20 rounded-full"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div
          className="md:w-1/2 space-y-6"
          variants={containerVariants}>
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300">
            Hello world!
          </motion.h2>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold">
            <span className="text-emerald-400 block mb-2">Priyanshu Dubey</span>
          </motion.h1>

          {/* Animated Title Rotation */}
          <div className="relative overflow-hidden h-12">
            <AnimatePresence mode="wait">
              <motion.h3
                key={currentTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300,
                }}
                className="absolute top-0 text-3xl md:text-4xl font-semibold text-gray-200">
                {titles[currentTitle]}
              </motion.h3>
            </AnimatePresence>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-md">
            Passionate Software Engineer with over 3 years of experience in
            designing and building scalable solutions in cloud and back-end
            development. Proficient in Node.js, AWS, and serverless
            architectures.
            <br />
            Currently I am studying Master's in
            <strong className="text-emerald-400">
              {" "}
              Advance Computer Science
            </strong>{" "}
            from Swansea University.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex space-x-4 pt-4">
            <motion.a
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1kaSAUFixvZdDSwU3uswYaSA5E_5Ro3Uq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-emerald-500 text-black 
              rounded-md hover:bg-emerald-600 
              transition-colors duration-300">
              View Resume
            </motion.a>
          </motion.div>

          {/* Social Links with Advanced Hover Effects */}
          <motion.div
            variants={itemVariants}
            className="flex space-x-6 pt-6 text-2xl">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-300 ${link.color} transition-colors duration-300`}>
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Profile Placeholder */}
        <motion.div
          variants={itemVariants}
          className="md:w-1/3 mt-8 md:mt-18">
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: [0, 2, -2, 0],
              transition: { duration: 0.5 },
            }}
            className="relative w-full max-w-lg mx-auto">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -inset-2 bg-emerald-500 rounded-lg opacity-50 blur-lg"
            />
            <div className="relative z-10 border-4 border-emerald-500 rounded-lg p-2">
              <div className="w-full aspect-square bg-gray-800 rounded-lg opacity-70" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
