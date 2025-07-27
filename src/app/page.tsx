'use client';

import { useState, useEffect } from 'react';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.title = "VseProStavby.cz - Stavíme vaše sny";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4CAF50" /><stop offset="100%" stop-color="#8BC34A" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let link = document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'icon');
      document.head.appendChild(link);
    }
    if (link) {
      (link as HTMLLinkElement).href = faviconUrl;
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="relative w-full bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Text Logo */}
          <a href="#hero" className="text-2xl font-bold text-green-600 sm:text-3xl">VseProStavby.cz</a>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 text-lg md:flex">
            <a href="#onas" className="text-gray-600 hover:text-green-600 transition-colors duration-300">O nás</a>
            <a href="#sluzby" className="text-gray-600 hover:text-green-600 transition-colors duration-300">Služby</a>
            <a href="#projekty" className="text-gray-600 hover:text-green-600 transition-colors duration-300">Projekty</a>
            <a href="#kontakt" className="text-gray-600 hover:text-green-600 transition-colors duration-300">Kontakt</a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="absolute left-0 top-full z-10 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col items-start space-y-4 p-4">
              <a href="#onas" onClick={closeMenu} className="block text-lg text-gray-800 hover:text-green-600 transition-colors duration-300">O nás</a>
              <a href="#sluzby" onClick={closeMenu} className="block text-lg text-gray-800 hover:text-green-600 transition-colors duration-300">Služby</a>
              <a href="#projekty" onClick={closeMenu} className="block text-lg text-gray-800 hover:text-green-600 transition-colors duration-300">Projekty</a>
              <a href="#kontakt" onClick={closeMenu} className="block text-lg text-gray-800 hover:text-green-600 transition-colors duration-300">Kontakt</a>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-green-600 to-green-800 py-20 text-white md:h-[70vh] lg:h-[80vh]">
          <img
            src="/images/project-tanvald-finished-house.jpg"
            alt="Modern renovated house"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Vaše vize, naše realizace
            </h1>
            <p className="mb-8 max-w-2xl text-lg sm:text-xl md:text-2xl">
              Kompletní stavební služby od základů po střechu. Spolehlivě a kvalitně.
            </p>
            <a
              href="#kontakt"
              className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-green-700 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-100 md:text-xl"
            >
              Získat nezávaznou nabídku
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section id="onas" className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg shadow-lg md:h-96">
                <img
                  src="/images/logo-line-house.png"
                  alt="VseProStavby.cz Line House Logo"
                  className="absolute inset-0 h-full w-full object-contain p-4"
                />
              </div>
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Kdo jsme a co děláme
                </h2>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  Jsme <strong className="text-green-600">VseProStavby.cz</strong>, váš spolehlivý partner pro veškeré stavební práce v České republice. S dlouholetými zkušenostmi a týmem kvalifikovaných odborníků jsme připraveni realizovat vaše stavební projekty od A do Z, s důrazem na kvalitu, spolehlivost a dodržení termínů.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Naše poslání je jednoduché - převést vaše vize v realitu, ať už jde o novostavbu, rekonstrukci nebo jakékoli jiné stavební úpravy. Zakládáme si na individuálním přístupu ke každému klientovi a transparentní komunikaci po celou dobu projektu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="bg-white py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 sm:text-4xl">
              Naše komplexní služby
            </h2>
            <div className="grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 grid">
              <div className="rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-4 inline-block rounded-full bg-green-100 p-3 text-green-600">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 10h.01M15 10h.01M9 14h.01M15 14h.01m-9 4h10a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Novostavby</h3>
                <p className="text-gray-600">Realizujeme stavby rodinných domů na klíč dle vašich představ a projektové dokumentace.</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-4 inline-block rounded-full bg-green-100 p-3 text-green-600">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 0020 12c0-4.418-3.582-8-8-8c-3.213 0-6.075 1.706-7.632 4.256m15.356 2A8.001 8.001 0 0020 12c0 4.418-3.582 8-8 8H3v-5m.582-1.582a4 4 0 010-5.656m11.312 0a4 4 0 010 5.656" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Rekonstrukce</h3>
                <p className="text-gray-600">Oživíme vaše stávající prostory, ať už se jedná o byty, domy či komerční objekty.</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-4 inline-block rounded-full bg-green-100 p-3 text-green-600">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 7.75v8.5a.75.75 0 01-1.5 0V7.75a.75.75 0 011.5 0zM17.75 7.75v8.5a.75.75 0 01-1.5 0V7.75a.75.75 0 011.5 0zM15.25 7.75v8.5a.75.75 0 01-1.5 0V7.75a.75.75 0 011.5 0zM12.75 7.75v8.5a.75.75 0 01-1.5 0V7.75a.75.75 0 011.5 0zM10.25 7.75v8.5a.75.75 0 01-1.5 0V7.75a.75.75 0 011.5 0zM7.75 7.75v8.5a.75.75 0 01-1.5 0V7.75a.75.75 0 011.5 0zM5.25 7.75v8.5a.75.75 0 01-1.5 0V7.75a.75.75 0 011.5 0zM2.75 7.75v8.5a.75.75 0 01-1.5 0V7.75a.75.75 0 011.5 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.25L4.75 8a.75.75 0 00-.5 0L4 8.25V16h16V8.25L19.25 8a.75.75 0 00-.5 0L12 4.25z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Zateplení budov</h3>
                <p className="text-gray-600">Provádíme profesionální zateplování fasád i interiérů pro úspory energií.</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-4 inline-block rounded-full bg-green-100 p-3 text-green-600">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Zemní práce</h3>
                <p className="text-gray-600">Poskytujeme veškeré zemní práce, výkopy základů a terénní úpravy.</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-4 inline-block rounded-full bg-green-100 p-3 text-green-600">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 1.5M6 7l3-1.5M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m18 0l-9 6l-9-6m18 0l-9-6l-9 6M3 7l9 6l9-6" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Demolice</h3>
                <p className="text-gray-600">Zajišťujeme bezpečné a efektivní demolice objektů všech velikostí.</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-4 inline-block rounded-full bg-green-100 p-3 text-green-600">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 3h3m-6-3h.01M10 7H8v4h2V7z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Zednické práce</h3>
                <p className="text-gray-600">Veškeré zednické práce, včetně omítek, podlah a obkladů.</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-4 inline-block rounded-full bg-green-100 p-3 text-green-600">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm6 12h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Přípojky IS</h3>
                <p className="text-gray-600">Zajišťujeme připojení k inženýrským sítím a související výkopové práce.</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-4 inline-block rounded-full bg-green-100 p-3 text-green-600">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4V12H20" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Drobné stavební práce</h3>
                <p className="text-gray-600">Realizujeme menší stavební úpravy a opravy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projekty" className="bg-gray-100 py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 sm:text-4xl">
              Naše úspěšné projekty
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src="/images/project-tanvald-finished-house.jpg"
                  alt="Projekt Tanvald: Rodinný dům po rekonstrukci"
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Rekonstrukce RD Tanvald</h3>
                  <p className="text-gray-600">Kompletní rekonstrukce rodinného domu v Tanvaldu, včetně zateplení a fasády.</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src="/images/project-rdpo-modern-house.jpg"
                  alt="Projekt RDPO: Moderní novostavba"
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Novostavba RD Pohoří</h3>
                  <p className="text-gray-600">Výstavba moderního rodinného domu na klíč v lokalitě Pohoří.</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105">
                {/* Placeholder for third project or removed if only two images */}
                <img
                  src="https://via.placeholder.com/600x400?text=Dal%C5%A1%C3%AD+projekt"
                  alt="Placeholder for another project"
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Zateplení bytového domu</h3>
                  <p className="text-gray-600">Komplexní zateplení bytového domu pro zvýšení energetické účinnosti.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications/Trust Section */}
        <section className="bg-green-700 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Důvěryhodnost a spolehlivost
            </h2>
            <div className="grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 grid">
              <div className="flex flex-col items-center">
                <p className="text-5xl font-extrabold text-green-200">15+</p>
                <p className="mt-2 text-lg">Let zkušeností</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-5xl font-extrabold text-green-200">100+</p>
                <p className="mt-2 text-lg">Uspokojených klientů</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-5xl font-extrabold text-green-200">500+</p>
                <p className="mt-2 text-lg">Realizovaných projektů</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-5xl font-extrabold text-green-200">CZ</p>
                <p className="mt-2 text-lg">Celorepublikové pokrytí</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Kontaktujte nás
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-semibold text-gray-900">Obchodní oddělení</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-center">
                    <svg className="mr-3 h-7 w-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8L21 8M3 8L12 17L21 8M3 8V16A2 2 0 005 18H19A2 2 0 0021 16V8" />
                    </svg>
                    <a href="mailto:info@vseprostavby.cz" className="hover:underline">info@vseprostavby.cz</a>
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-3 h-7 w-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.134-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.717 21 3 14.283 3 6V5z" />
                    </svg>
                    <a href="tel:+420777123456" className="hover:underline">+420 777 123 456</a>
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-3 h-7 w-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Hlavní 235, 468 41 Dalešice</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1023.7554950293125!2d15.228589600000001!3d50.6483162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470edc26027de7d5%3A0x67ee1c828ad0c7e2!2sHlavn%C3%AD%20235%2C%20468%2041%20Dale%C5%A1ice!5e0!3m2!1scs!2scz!4v1716300000000!5m2!1scs!2scz"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-white">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} VseProStavby.cz. Všechna práva vyhrazena.
          <p className="mt-2">
            Vytvořeno s láskou od{' '}
            <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-200 transition-colors duration-300">
              DigitalFusion
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
