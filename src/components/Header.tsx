import  { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#igbo-calendar', label: 'Igbo Calendar' },
    { href: '#events', label: 'Events in Ekwulu' },
    { href: '#about', label: 'About' },
  ];

  return (
    <header className="w-full bg-white  sticky top-0 z-40 ">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4 shadow-2xl">
        <div className="flex items-center space-x-3">
          <img src="/src/assets/logo.png"   className="w-[50px] h-[50px]" alt="logo" />
          {/* <h1 className="font-bold text-traditional-700">Ugogbuzuo Age grade</h1> */}
        </div>

        <nav>
          <button className="md:hidden p-2" onClick={() => setOpen(s => !s)} aria-label="Menu">
            {/* simple hamburger */}
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black " />
              <span className="block w-6 h-0.5 bg-black " />
              <span className="block w-6 h-0.5 bg-black" />
            </div>
          </button>

          <ul className={`fixed inset-0 p-6 bg-white  transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform md:static md:translate-x-0 md:flex md:space-x-6 md:p-0`}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-lg text-black ">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
