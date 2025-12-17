import Header from "./Header";
import IgboCalendar from "./IgboCalender";
import EventsCarousel from "./EventCarousel";
import Footer from "./Footer";
import AdvertCarousel from "./AdvertCarousel";



export default function App() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <Header />

      <main className="max-w-5xl mx-auto p-4">
        <section id="home" className="py-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-traditional-700">
              Welcome to Ekwuo App
            </h2>
            <p className="mt-2 text-gray-700">
              This is a Community Page Dedicated to Ekwulu Village
              Umuoji. Taa mara gi mma ooo. What you can do with this app?
              
                <li>Check Igbo Calender.</li>
                <li>Track Events in Ekwulu.</li>   
            </p>
          </div>
        </section>

        <IgboCalendar />
        <EventsCarousel />
          <AdvertCarousel />

        <section id="about" className="py-6 px-4">
          <div className="max-w-lg mx-auto">
            <h3 className="text-lg font-bold text-traditional-700">About Us</h3>
            <p className="mt-2 text-gray-700 ">
              Ekwulu is a village in Umuoji, Idemmili North Local Government of Anambra State. We are known for our Hospitality, Love and Unity. <b>Ekwulu Kwezuonuo!!!</b>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

