

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom"; // ← Import useNavigate
import "swiper/css";
import "swiper/css/effect-fade";
import "./HeroSection.css";

const heroSlides = [
  {
    image: "https://t3.ftcdn.net/jpg/12/74/96/44/360_F_1274964458_Hqp75qCp0EQDvQk5DCXuXV6FvyWzuXN5.jpg",
    title: "Handmade with Love",
    description: "Each garland is uniquely designed to perfection",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/2690/0106/files/DSC7808_c8ba71ff-f134-4f67-b000-773599ee3a54_480x480.jpg?v=1699524427",
    title: "Sacred Puja Essentials",
    description: "Premium puja accessories to enhance your spiritual rituals.",
  },
  {
    image: "https://i.ytimg.com/vi/_L4DyC_35LE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHir2LMx6ZslITrLMtdUvUQAWCqQ",
    title: "Luxury Wedding Garlands",
    description: "Perfectly crafted flowers for your special day",
  },
  {
    image: "https://i.etsystatic.com/39616001/r/il/88fe89/6442968069/il_fullxfull.6442968069_pl24.jpg",
    title: "Exquisite Flower Jewelry",
    description: "Delicate floral jewelry, handcrafted for your special moments.",
  },
  {
    image: "https://img.freepik.com/premium-photo/marigold-yellow-flower-garland-decoration-wedding-ceremony_935722-5130.jpg",
    title: "Elegant Floral Arrangements",
    description: "Fresh, handcrafted garlands for every occasion",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // ← Hook to navigate

  const handleShopClick = () => {
    navigate("/shop"); // ← Navigates to the shop page
  };

  return (
    <section className="hero">
      {/* Background Image Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="hero-slider"
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Animated Text Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2>{heroSlides[currentIndex].title}</h2>
          <p>{heroSlides[currentIndex].description}</p>
          <motion.button
            className="shop-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShopClick} // ← Trigger navigation
          >
            Shop Now
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;

