import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Event type
interface EventItem {
  title: string;
  date: string; // readable date
  description: string;
  image: string;
}

const events: EventItem[] = [
      {
    title: "Traditional Marriage",
    date: "December 30, 2025",
    description: "High Chief Silas Obinwude invites us to the marriage of his daughter Somtochukwu",
    image: "/images/somto.jpg",
  },
  
    {
    title: "Ekwulu UYDA Football Outing",
    date: "December 20, 2025",
    description: "From 20th dec., we engage in UYDA FOOTBALL TOURNAMENT in Group C",
    image: "/images/ekwulufootball.png",
  },

  {
    title: "Umunna League",
    date: "January 1, 2026",
    description: "Umunna Football Tournament begins, everyone is ready to go.",
    image: "/images/footballumunna.jpg",
  },

  {
    title: "Ekwulu Day",
    date: "January 2, 2026",
    description: "Celebration of traditions and families in Ekwulu.",
    image: "/images/ekwuluday.jpg",
  },


];

// Helper to determine status
function getEventStatus(eventDateString: string): "Upcoming" | "Live" | "Ended" {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDate = new Date(eventDateString);
  eventDate.setHours(0, 0, 0, 0);

  if (eventDate.getTime() === today.getTime()) return "Live";
  if (eventDate > today) return "Upcoming";
  return "Ended";
}

export default function EventsCarousel() {
  return (
    <div className="w-full py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-500">
        Events in Ekwulu
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        touchRatio={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="pb-12"
      >
        {events.map((event, index) => {
          const status = getEventStatus(event.date);

          return (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white min-w-[250px]">

                {/* Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-black">
                      {event.title}
                    </h3>

                    {/* Status badge */}
                    <span className={`
                      text-xs px-2 py-1 rounded-full font-bold
                      ${status === "Upcoming" ? "bg-green-100 text-green-700" : ""}
                      ${status === "Live" ? "bg-yellow-200 text-yellow-700 animate-pulse" : ""}
                      ${status === "Ended" ? "bg-red-100 text-red-700" : ""}
                    `}>
                      {status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600">{event.date}</p>

                  <p className="text-gray-700 text-sm mt-2 mb-2">
                    {event.description}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
