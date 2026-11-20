import React, { useState } from 'react';
import heroImg from '../assets/images/hero_himalayan_homestay_1790867301661.jpg';
import mealImg from '../assets/images/kumaoni_authentic_meal_1790867319209.jpg';
import trekImg from '../assets/images/kafni_glacier_trekking_1790867333726.jpg';
import roomImg from '../assets/images/homestay_pine_room_1790867347335.jpg';
import { BookingModal } from './BookingModal';
import {
  Compass,
  Utensils,
  Home,
  MapPin,
  Calendar,
  MessageSquare,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Mountain,
  Heart,
  ChevronRight,
} from 'lucide-react';

interface HomestayPortalProps {
  onSwitchToDossier: () => void;
}

export const HomestayPortal: React.FC<HomestayPortalProps> = ({ onSwitchToDossier }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string>('pine-cottage');

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Top Banner connecting to DGU Venture Quest */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>
              <strong>MVP Live View</strong> — Customer-facing homestay portal validating DGU Venture Quest Mission 10.
            </span>
          </div>
          <button
            onClick={onSwitchToDossier}
            className="flex items-center gap-1.5 text-emerald-400 hover:text-white font-medium transition-colors"
          >
            <span>View Complete 12-Mission Academic Dossier</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[580px] md:min-h-[640px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="The Pine and Peaks homestay nestled in Kumaon Himalayas, Bageshwar"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-900/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center text-white space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 backdrop-blur-xs text-xs font-medium text-emerald-300">
            <Mountain className="w-3.5 h-3.5" />
            <span>Bageshwar & Kumaon Himalayas • Gateway to Kafni Glacier</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Living the Himalayas with Warmth & Soul.
          </h1>

          <p className="text-base md:text-lg text-stone-200 max-w-2xl mx-auto font-light leading-relaxed">
            A peaceful nature-based homestay combining traditional Kumaoni architecture, wholesome mountain meals,
            and reliable trekking support for your Kafni Glacier expedition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-emerald-900/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Stay & Trek Support</span>
            </button>
            <a
              href="#rooms"
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-xs border border-white/20 text-white font-medium text-sm rounded-xl transition-all"
            >
              Explore Cottages & Meals
            </a>
          </div>

          {/* Quick value props bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 max-w-4xl mx-auto text-left">
            <div className="bg-stone-900/60 backdrop-blur-xs border border-white/10 p-3 rounded-xl">
              <span className="text-[11px] text-stone-400 block font-mono">01. Accommodation</span>
              <span className="text-xs font-semibold text-white">Stone & Pine Cottages</span>
            </div>
            <div className="bg-stone-900/60 backdrop-blur-xs border border-white/10 p-3 rounded-xl">
              <span className="text-[11px] text-stone-400 block font-mono">02. Food</span>
              <span className="text-xs font-semibold text-white">Authentic Kumaoni Meals</span>
            </div>
            <div className="bg-stone-900/60 backdrop-blur-xs border border-white/10 p-3 rounded-xl">
              <span className="text-[11px] text-stone-400 block font-mono">03. Trekking</span>
              <span className="text-xs font-semibold text-white">Certified Kafni Guides</span>
            </div>
            <div className="bg-stone-900/60 backdrop-blur-xs border border-white/10 p-3 rounded-xl">
              <span className="text-[11px] text-stone-400 block font-mono">04. Logistics</span>
              <span className="text-xs font-semibold text-white">Bageshwar Pickup Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Proposition & Story Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              Why The Pine and Peaks
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900 leading-snug">
              Rather than just a hotel, a home in the high mountains.
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              When travellers venture into the remote Kumaon valleys around Kafni and Pindari glaciers, they often face
              stress coordinating separate lodges, local taxis, food supplies, and trustworthy trail guides.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              <strong>The Pine and Peaks</strong> bridges this gap. We provide a cozy, authentic basecamp where you
              arrive as a traveler and leave as family, knowing that your lodging, fresh local food, and glacier guides
              are completely taken care of.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-stone-100/80 border border-stone-200/60">
                <span className="font-mono text-xl font-bold text-stone-900">₹2,500</span>
                <span className="block text-xs font-semibold text-stone-800 mt-0.5">Average Nightly Package</span>
                <span className="text-[11px] text-stone-500">Includes stay, home dinners & trek consultation</span>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                <span className="font-mono text-xl font-bold text-emerald-900">100%</span>
                <span className="block text-xs font-semibold text-emerald-950 mt-0.5">Community Driven</span>
                <span className="text-[11px] text-emerald-800">Direct livelihood for Bageshwar guides & farmers</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 aspect-4/3">
              <img
                src={roomImg}
                alt="Cozy interior room of The Pine and Peaks homestay"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent text-white">
                <span className="text-[11px] font-mono text-emerald-300 uppercase">Sustainable Timber & Stone</span>
                <h4 className="text-lg font-semibold mt-0.5">Handcrafted Pine Interiors with Himalayan Vistas</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation / Rooms Showcase */}
      <section id="rooms" className="py-16 px-6 bg-stone-100/60 border-y border-stone-200/70">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Mission 10 Core Feature 01
              </span>
              <h2 className="text-3xl font-bold font-display text-stone-900 mt-1">
                Comfortable Himalayan Accommodation
              </h2>
              <p className="text-xs text-stone-500 mt-1 max-w-xl">
                Warm, insulated, and spotlessly clean rooms designed for high-altitude recovery and mountain peace.
              </p>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 self-start md:self-auto"
            >
              <span>Check seasonal availability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Room 1 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs flex flex-col justify-between">
              <div className="h-52 overflow-hidden relative">
                <img
                  src={roomImg}
                  alt="Pine & Stone Cottage"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 text-xs font-mono font-bold bg-stone-900/80 text-white px-2.5 py-1 rounded backdrop-blur-xs">
                  ₹1,800 / night
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-stone-900">Pine & Stone Cottage</h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Private handcrafted room with local Kumaoni cedar paneling, thick woolen quilts, attached modern
                    washroom with solar hot water, and a scenic valley balcony.
                  </p>
                  <ul className="text-xs text-stone-500 space-y-1.5 mt-4 pt-3 border-t border-stone-100">
                    <li className="flex items-center gap-2">✓ Double bed (2 Guests)</li>
                    <li className="flex items-center gap-2">✓ Solar 24/7 hot water</li>
                    <li className="flex items-center gap-2">✓ Valley and pine forest view</li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setSelectedRoom('pine-cottage');
                    setIsBookingOpen(true);
                  }}
                  className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Reserve Pine Cottage
                </button>
              </div>
            </div>

            {/* Room 2 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs flex flex-col justify-between">
              <div className="h-52 overflow-hidden relative">
                <img
                  src={heroImg}
                  alt="Attic Glacier View Suite"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 text-xs font-mono font-bold bg-stone-900/80 text-white px-2.5 py-1 rounded backdrop-blur-xs">
                  ₹2,400 / night
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-stone-900">Attic Glacier View Suite</h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Top-floor vaulted timber room featuring unobstructed vistas of the high Kumaoni Himalayan peaks,
                    dedicated work desk with mountain view, and plush seating.
                  </p>
                  <ul className="text-xs text-stone-500 space-y-1.5 mt-4 pt-3 border-t border-stone-100">
                    <li className="flex items-center gap-2">✓ King bed (2–3 Guests)</li>
                    <li className="flex items-center gap-2">✓ 180° Panoramic glacier ridge view</li>
                    <li className="flex items-center gap-2">✓ Morning mountain chai service</li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setSelectedRoom('attic-glacier');
                    setIsBookingOpen(true);
                  }}
                  className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Reserve Glacier Suite
                </button>
              </div>
            </div>

            {/* Room 3 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs flex flex-col justify-between">
              <div className="h-52 overflow-hidden relative bg-stone-800">
                <img
                  src={trekImg}
                  alt="Trekker Alpine Dorm"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 text-xs font-mono font-bold bg-stone-900/80 text-white px-2.5 py-1 rounded backdrop-blur-xs">
                  ₹900 / pers / night
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-stone-900">Trekker Alpine Dorm</h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Designed specifically for solo trekkers, college groups, and trail teams preparing for or returning
                    from the Kafni & Pindari glacier passes.
                  </p>
                  <ul className="text-xs text-stone-500 space-y-1.5 mt-4 pt-3 border-t border-stone-100">
                    <li className="flex items-center gap-2">✓ Heavy fleece bunk bedding</li>
                    <li className="flex items-center gap-2">✓ Secure rucksack & gear locker</li>
                    <li className="flex items-center gap-2">✓ Shared expedition lounge & maps</li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setSelectedRoom('trekker-bunk');
                    setIsBookingOpen(true);
                  }}
                  className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Reserve Trekker Bunk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kumaoni Dining Experience (Mission 10 Feature 02) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-200 aspect-4/3">
              <img
                src={mealImg}
                alt="Traditional authentic Kumaoni home-cooked meal served in brass thali"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              Mission 10 Core Feature 02
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900 leading-snug">
              Authentic Kumaoni Home-Cooked Meals
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Standard hotels serve generic north-Indian buffet food. At The Pine and Peaks, your meals are cooked by
              local Kumaoni home chefs using organic ingredients sourced directly from village terraced farms in
              Bageshwar.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3 bg-stone-100/80 rounded-xl border border-stone-200/60 flex items-start gap-3">
                <Utensils className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900">Bhatt ki Churkani & Dubuk:</span>
                  <p className="text-stone-600 mt-0.5">
                    Traditional black soybean slow-cooked curry rich in mountain protein, served with steamed Pahadi rice.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-stone-100/80 rounded-xl border border-stone-200/60 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900">Mandua (Finger Millet) Rotis:</span>
                  <p className="text-stone-600 mt-0.5">
                    Freshly griddled nutritious bread paired with homemade mountain butter and cannabis seed (Bhaang) chutney.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-stone-100/80 rounded-xl border border-stone-200/60 flex items-start gap-3">
                <Heart className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900">Buransh (Rhododendron) Tea & Squash:</span>
                  <p className="text-stone-600 mt-0.5">
                    Wildcrafted floral teas known across Uttarakhand for stamina and high-altitude hydration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trekking & Kafni Glacier Base Support (Mission 10 Feature 03) */}
      <section className="py-20 px-6 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider font-mono">
              Mission 10 Core Feature 03 & 04
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white leading-snug">
              Kafni Glacier Expedition & Trail Support
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed">
              Kafni Glacier (3,860m) offers some of the most striking views of Mount Nandakot and the Himalayan
              watershed. Our basecamp arranges trusted certified village guides, porter support, and jeep links from
              Bageshwar or Kathgodam railway station.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span>Kafni Glacier Expedition Support</span>
                  <span className="font-mono text-emerald-400">4–5 Days Route</span>
                </div>
                <p className="text-stone-400 mt-1">
                  Basecamp orientation, daily pack lunches, emergency communication, and seasoned local trail leaders.
                </p>
              </div>

              <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span>Village Cultural Immersion</span>
                  <span className="font-mono text-emerald-400">Day Excursions</span>
                </div>
                <p className="text-stone-400 mt-1">
                  Guided village walks, Kumaoni folk stories by the evening bonfire, and visits to ancient stone water mills (Gharat).
                </p>
              </div>

              <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span>Direct WhatsApp Concierge</span>
                  <span className="font-mono text-emerald-400">Zero App Required</span>
                </div>
                <p className="text-stone-400 mt-1">
                  Coordinate taxi arrival, special meal requirements, or guide availability directly over WhatsApp.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Plan Your Kafni Trek With Us</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-stone-700 aspect-4/3">
              <img
                src={trekImg}
                alt="Trekking towards Kafni Glacier in Kumaon Himalayas"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Community Impact Callout */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center space-y-4">
        <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider font-mono">
          Community-Based Tourism
        </span>
        <h3 className="text-2xl md:text-3xl font-bold font-display text-stone-900">
          Rooted in Bageshwar, Benefiting Local Families.
        </h3>
        <p className="text-xs md:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Tourism in the upper Kumaon region has long been captured by outside intermediaries. The Pine and Peaks keeps
          the economic surplus in the valley by employing local guides, purchasing grains from village growers, and
          preserving Kumaoni mountain traditions.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="w-full sm:w-auto px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-colors"
          >
            Start WhatsApp Reservation
          </button>
          <button
            onClick={onSwitchToDossier}
            className="w-full sm:w-auto px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl border border-stone-200 transition-colors"
          >
            Review Business Model & Unit Economics
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 px-6 border-t border-stone-900 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display font-bold text-base text-white">The Pine and Peaks</div>
            <p className="text-stone-500 mt-1">
              Nature-based Himalayan Homestay & Basecamp • Bageshwar, Uttarakhand, India
            </p>
            <p className="text-stone-500 text-[11px] mt-0.5">
              Developed for DGU Venture Quest (DBS Global University) • chandan.0251mba536@dgu.ac.in
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={onSwitchToDossier} className="hover:text-white transition-colors">
              Academic Dossier (M0–M12)
            </button>
            <button onClick={() => setIsBookingOpen(true)} className="hover:text-white transition-colors">
              Book Stay
            </button>
            <button
              onClick={() => {
                window.print();
              }}
              className="text-emerald-400 hover:text-emerald-300"
            >
              Print Report
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultPackage={selectedRoom}
      />
    </div>
  );
};
