// import  { useState } from 'react';

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   const links = [
//     { href: '#home', label: 'Home' },
//     { href: '#igbo-calendar', label: 'Igbo Calendar' },
//     { href: '#events', label: 'Events in Ekwulu' },
//     { href: '#about', label: 'About' },
//   ];

//   return (
//     <header className="w-full bg-white  sticky top-0 z-40 ">
//       <div className="max-w-5xl mx-auto flex items-center justify-between p-4 shadow-2xl">
//         <div className="flex items-center space-x-3">
//           <img src="/images/logo.png"   className="w-[50px] h-[50px]" alt="logo" />
//           {/* <h1 className="font-bold text-traditional-700">Ugogbuzuo Age grade</h1> */}
//         </div>

//         <nav>
//           <button className="md:hidden p-2" onClick={() => setOpen(s => !s)} aria-label="Menu">
//             {/* simple hamburger */}
//             <div className="space-y-1">
//               <span className="block w-6 h-0.5 bg-black " />
//               <span className="block w-6 h-0.5 bg-black " />
//               <span className="block w-6 h-0.5 bg-black" />
//             </div>
//           </button>

//           <ul className={`fixed inset-0 p-6 bg-white  transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform md:static md:translate-x-0 md:flex md:space-x-6 md:p-0`}>
//             {links.map(l => (
//               <li key={l.href}>
//                 <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-lg text-black ">{l.label}</a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

import { useState } from "react";
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"; // optional for nice icons

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#igbo-calendar", label: "Igbo Calendar" },
    { href: "#events", label: "Events in Ekwulu" },
    { href: "#about", label: "About" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-3 font-sans text-2xl font-black tracking-tighter text-slate-900 ">
          {/* <img
            src="/images/logo.png"
            className="w-[50px] h-[50px]"
            alt="logo"
          /> */}
          EKWUO APP
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex md:space-x-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-black font-medium hover:text-yellow-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <Bars3Icon className="w-6 h-6 text-black" />
        </button>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="font-bold text-yellow-700 text-lg">Menu</span>
            <button onClick={() => setOpen(false)} aria-label="Close Menu">
              <XMarkIcon className="w-6 h-6 text-black" />
            </button>
          </div>
          <ul className="flex flex-col p-4 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-black text-lg hover:text-yellow-500 block"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay when menu is open */}
        {open && (
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
