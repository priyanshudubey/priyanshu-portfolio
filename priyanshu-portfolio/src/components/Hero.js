"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
  FaWhatsapp,
  FaMedium,
  FaArrowDown,
  FaYoutube,
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const titleRef = useRef(null);

  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      setUnderlineWidth(titleRef.current.offsetWidth);
    }
  }, [currentTitle]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  // Optimized mouse tracking with throttling
  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: -(e.clientY / window.innerHeight) * 2 + 1,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Optimized 3D Scene Setup
  useEffect(() => {
    if (!canvasRef.current) return;

    // Check for device capabilities
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency < 4;

    // Scene setup with optimized settings
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
      antialias: !isMobile, // Disable antialiasing on mobile
      powerPreference: "high-performance",
    });

    // Optimize renderer settings
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
    renderer.shadowMap.enabled = false; // Disable shadows for performance

    sceneRef.current = { scene, camera, renderer };

    // Create optimized geometric shapes
    const shapes = [];
    const particleCount = isMobile ? 15 : isLowEnd ? 25 : 35; // Reduce particles on low-end devices

    // Main icosahedron with lower detail
    const mainGeometry = new THREE.IcosahedronGeometry(1.2, isMobile ? 1 : 2);
    const mainMaterial = new THREE.MeshBasicMaterial({
      // Use MeshBasicMaterial for better performance
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const mainMesh = new THREE.Mesh(mainGeometry, mainMaterial);
    mainMesh.position.set(2, 0, 0);
    scene.add(mainMesh);
    shapes.push({ mesh: mainMesh, speed: { x: 0.01, y: 0.005 } });

    // Secondary torus with lower segments
    const torusGeometry = new THREE.TorusGeometry(
      0.8,
      0.3,
      isMobile ? 8 : 12,
      isMobile ? 24 : 48
    );
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.position.set(-2, 1, -1);
    scene.add(torusMesh);
    shapes.push({ mesh: torusMesh, speed: { x: 0.008, y: 0.012 } });

    // Optimized particle system using instanced geometry
    const particleGeometry = new THREE.SphereGeometry(0.02, 4, 4); // Lower detail spheres
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.8,
    });

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      scene.add(particle);
      shapes.push({
        mesh: particle,
        speed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
        },
        originalPosition: particle.position.clone(),
      });
    }

    // Simplified lighting for better performance
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Reduce point lights on mobile
    if (!isMobile) {
      const pointLight1 = new THREE.PointLight(0x10b981, 0.8, 50);
      pointLight1.position.set(5, 5, 5);
      scene.add(pointLight1);
    }

    // Camera positioning
    camera.position.z = 4;

    // Optimized animation loop with frame limiting
    let lastTime = 0;
    const targetFPS = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime) => {
      requestAnimationFrame(animate);

      // Limit frame rate for better performance
      if (currentTime - lastTime < frameInterval) return;
      lastTime = currentTime;

      shapes.forEach((shape, index) => {
        if (shape.originalPosition) {
          // Floating animation for particles with reduced calculations
          shape.mesh.position.y =
            shape.originalPosition.y +
            Math.sin(currentTime * 0.001 + index) * 0.5;
          shape.mesh.rotation.x += shape.speed.x;
          shape.mesh.rotation.y += shape.speed.y;
        } else {
          // Rotation for main shapes
          shape.mesh.rotation.x += shape.speed.x;
          shape.mesh.rotation.y += shape.speed.y;
        }
      });

      // Reduced parallax effect calculation frequency
      if (currentTime % 3 === 0) {
        // Only update every 3rd frame
        camera.position.x += (mousePosition.x * 0.3 - camera.position.x) * 0.04;
        camera.position.y += (mousePosition.y * 0.3 - camera.position.y) * 0.04;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };
    animate(0);

    // Optimized resize handler with debouncing
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 250);
    };
    window.addEventListener("resize", handleResize);

    // Enhanced cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);

      // Dispose of geometries and materials
      shapes.forEach((shape) => {
        if (shape.mesh.geometry) shape.mesh.geometry.dispose();
        if (shape.mesh.material) shape.mesh.material.dispose();
      });

      renderer.dispose();
      scene.clear();
    };
  }, []); // Remove mousePosition dependency to prevent recreating scene

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/priyanshudubey",
      color: "hover:text-gray-100",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/priyanshudubey/",
      color: "hover:text-blue-400",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:priyanshu0dubey@gmail.com",
      color: "hover:text-emerald-400",
      label: "Email",
    },
    {
      icon: <FaGlobe />,
      href: "https://priyanshudubey.com",
      color: "hover:text-emerald-400",
      label: "Website",
    },
    {
      icon: <FaWhatsapp />,
      href: "http://wa.me/+447444764677",
      color: "hover:text-green-400",
      label: "WhatsApp",
    },
    {
      icon: <FaMedium />,
      href: "https://medium.com/@priyanshu0dubey",
      color: "hover:text-gray-100",
      label: "Medium",
    },
    {
      icon: <FaYoutube />,
      href: "https://www.youtube.com/@toastercode",
      color: "hover:text-red-500",
      label: "YouTube",
    },
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen relative flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 opacity-40 pointer-events-none"
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Optimized floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map(
          (
            _,
            index // Reduced from 20 to 8
          ) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25, 0], // Reduced movement range
                y: [0, Math.random() * 50 - 25, 0],
                opacity: [0.1, 0.3, 0.1], // Reduced opacity
                scale: [1, 1.1, 1], // Reduced scale change
              }}
              transition={{
                duration: Math.random() * 6 + 6, // Longer duration for smoother animation
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.5,
                ease: "easeInOut", // Smoother easing
              }}>
              <div
                className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full blur-sm"
                style={{
                  boxShadow: "0 0 8px rgba(16, 185, 129, 0.3)", // Reduced glow
                }}
              />
            </motion.div>
          )
        )}
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12">
        {/* Left Content */}
        <div className="lg:w-3/5 space-y-4">
          <motion.div
            variants={itemVariants}
            className="space-y-2">
            <motion.span
              className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}>
              👋 Hello world!
            </motion.span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Priyanshu
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent">
                Dubey
              </span>
            </h1>
          </motion.div>

          {/* Enhanced animated title rotation */}
          <motion.div
            variants={itemVariants}
            className="relative h-16 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTitle}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -50, rotateX: 90 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                className="absolute inset-0 flex items-center">
                {/* Title + Underline wrapper */}
                <span className="relative inline-block">
                  <span className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                    {titles[currentTitle]}
                  </span>

                  {/* Glowing underline */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  />
                </span>

                {/* Blinking cursor */}
                {/* <motion.div
                  className="ml-2 w-1 h-8 bg-emerald-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                /> */}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Software Engineer with 3+ years of experience building scalable,
            cloud-native back-end systems using Node.js, AWS, and serverless
            tech.
            <br />
            <br />
            Recently completed my{" "}
            <span className="text-emerald-400 font-semibold">
              Master's in Advanced Computer Science
            </span>{" "}
            from Swansea University. Actively seeking full-time roles in the UK
            or remote, with full visa eligibility.
          </motion.p>
          {/* Enhanced CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1-lssjoGdIoeHpE50HRZAW5PJ66J27wwa/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-xl hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 flex items-center justify-center gap-2">
              View Resume
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}>
                →
              </motion.span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 backdrop-blur-sm">
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Enhanced social links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                }}
                whileTap={{ scale: 0.9 }}
                className={`group p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-gray-400 ${link.color} transition-all duration-300 hover:border-emerald-400/50`}
                title={link.label}>
                <span className="text-xl">{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Enhanced Profile Section */}
        <motion.div
          variants={itemVariants}
          className="lg:w-2/5 flex justify-center">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative">
            {/* Glowing background effect */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 rounded-3xl blur-2xl"
            />

            {/* Profile container */}
            <motion.div
              whileHover={{
                scale: 1.02,
                rotateY: 5,
              }}
              className="relative z-10 w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 p-1">
                <div className="w-full h-full bg-gray-900 rounded-3xl" />
              </motion.div>

              {/* Profile placeholder with enhanced styling */}
              <div className="absolute inset-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-full h-full bg-gradient-to-br from-emerald-500/10 to-blue-500/10 flex items-center justify-center">
                  <span className="text-6xl text-gray-600">👨‍💻</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer">
          <span className="text-sm">Scroll down</span>
          <FaArrowDown className="text-emerald-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
