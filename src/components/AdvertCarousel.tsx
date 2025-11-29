// src/components/AdvertCarousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

interface AdvertItem {
  title: string;
  image: string;
  link?: string; // URL to buy or external page
}

const adverts: AdvertItem[] = [
  {
    title: "Place Your Advert HERE!",
    image: "/images/advert.jpg",
    link: "https://wa.me/+2347080248474?text=Hello+Amio+I+Want+to+Advertise+in+Ugogbuzue+website"
  },
  {
    title: "Place Your Advert HERE!",
    image: "/images/advert2.jpg",
    link: "https://wa.me/+2347080248474?text=Hello+Amio+I+Want+to+Advertise+in+Ugogbuzue+website"
  },
  {
    title: "Place Your Advert HERE!",
    image: "/images/advert1.jpg",
    link: "https://wa.me/+2347080248474?text=Hello+Amio+I+Want+to+Advertise+in+Ugogbuzue+website"
  }
];

export default function AdvertCarousel() {
  return (
    <div className="w-full py-8 px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="rounded-xl overflow-hidden"
      >
        {adverts.map((advert, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={advert.image}
                alt={advert.title}
                className="w-full h-56 object-cover rounded-xl"
              />
              {/* Title overlay */}
              <div className="absolute top-4 left-4 bg-yellow-500/80 text-white px-3 py-1 rounded-md text-sm font-semibold">
                {advert.title}
              </div>
              {/* BUY NOW button */}
              <a
                href={advert.link ?? "#"}
                className="absolute bottom-4 right-4 bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-4 py-2 rounded-full shadow-lg transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                BUY NOW
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
