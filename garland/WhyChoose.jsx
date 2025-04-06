import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./WhyChoose.css";

const features = [
  {
    id: 1,
    title: "🌸 Fresh & Handcrafted",
    description: "Our garlands are freshly handcrafted with premium flowers.",
  },
  {
    id: 2,
    title: "🚚 Fast & Reliable Delivery",
    description: "We ensure timely and reliable delivery to your doorstep.",
  },
  {
    id: 3,
    title: "🎨 Customizable Designs",
    description: "Get garlands designed according to your unique needs.",
  },
  {
    id: 4,
    title: "💰 Affordable & Best Quality",
    description: "Premium quality garlands at the most competitive prices.",
  },
  {
    id: 5,
    title: "🌿 Eco-Friendly Materials",
    description: "We use biodegradable and eco-friendly floral materials.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us?</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {features.map((feature) => (
          <SwiperSlide key={feature.id}>
            <div className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhyChooseUs;
