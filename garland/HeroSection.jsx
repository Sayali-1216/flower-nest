// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "./HeroSection.css";

// const heroSlides = [
//   {
//     image: "https://t3.ftcdn.net/jpg/12/74/96/44/360_F_1274964458_Hqp75qCp0EQDvQk5DCXuXV6FvyWzuXN5.jpg",
  
//     title: "Handmade with Love",
//     description: "Each garland is uniquely designed to perfection",
//   },
//   {
//     image: "https://img.freepik.com/fotos-premium/pooja-material-gegenstaende-oder-puja-sahitya-in-der-hinduistischen-religion-aus-indien-in-einer-gruppe-angeordnet-selektiver-fokus_466689-41722.jpg",
//     title: "Sacred Puja Essentials",
//     description: "Premium puja accessories to enhance your spiritual rituals."
//   },
  

//   {
//     image: "https://i.ytimg.com/vi/_L4DyC_35LE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHir2LMx6ZslITrLMtdUvUQAWCqQ",
//     title: "Luxury Wedding Garlands",
//     description: "Perfectly crafted flowers for your special day",
//   },

//   {
//     image: "https://images.unsplash.com/photo-1611956426712-9c2f6cd314ec",
//     title: "Exquisite Flower Jewelry",
//     description: "Delicate floral jewelry, handcrafted for your special moments."
//   },
  
//   {
//     image: "https://t3.ftcdn.net/jpg/00/95/35/66/360_F_95356603_CTTbKTzCL7Aavkk1BixR0dhKw7UP1Fi4.jpg",
//     title: "Elegant Floral Arrangements",
//     description: "Fresh, handcrafted garlands for every occasion",
//   },
// ];

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <section className="hero">
//       {/* Background Image Slider */}
//       <Swiper
//         modules={[Autoplay, EffectFade]}
//         effect="fade"
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop={true}
//         className="hero-slider"
//         onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)} // Update content on slide change
//       >
//         {heroSlides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <motion.div
//               className="hero-slide"
//               style={{ backgroundImage: `url(${slide.image})` }}
//               initial={{ scale: 1.2, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 2, ease: "easeOut" }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Animated Text Content */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex} // Changing key forces reanimation
//           className="hero-content"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <h2>{heroSlides[currentIndex].title}</h2>
//           <p>{heroSlides[currentIndex].description}</p>
//           <motion.button
//             className="shop-btn"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Shop Now
//           </motion.button>
//         </motion.div>
//       </AnimatePresence>
//     </section>
//   );
// };

// export default HeroSection;










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
    image: "https://img.freepik.com/fotos-premium/pooja-material-gegenstaende-oder-puja-sahitya-in-der-hinduistischen-religion-aus-indien-in-einer-gruppe-angeordnet-selektiver-fokus_466689-41722.jpg",
    title: "Sacred Puja Essentials",
    description: "Premium puja accessories to enhance your spiritual rituals.",
  },
  {
    image: "https://i.ytimg.com/vi/_L4DyC_35LE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHir2LMx6ZslITrLMtdUvUQAWCqQ",
    title: "Luxury Wedding Garlands",
    description: "Perfectly crafted flowers for your special day",
  },
  {
    image: "https://images.unsplash.com/photo-1611956426712-9c2f6cd314ec",
    title: "Exquisite Flower Jewelry",
    description: "Delicate floral jewelry, handcrafted for your special moments.",
  },
  {
    image: "https://t3.ftcdn.net/jpg/00/95/35/66/360_F_95356603_CTTbKTzCL7Aavkk1BixR0dhKw7UP1Fi4.jpg",
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

