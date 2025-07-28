import React, { useState, useEffect } from "react";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    {
      name: "Поплин",
      subcategories: ["5D поплин", "Поплин классический"],
    },
    {
      name: "Сатин",
      subcategories: [
        "Сатин мерсеризованный",
        "Страйп-сатин",
        "Принтованный сатин",
        "Однотонный сатин",
        "Сатин отельный",
        "Сатин 300ТС",
      ],
    },
    {
      name: "Муслин",
      subcategories: ["Однослойный", "Двухслойный", "Четырёхслойный", "Жаккард 4-слоя"],
    },
    {
      name: "Костюмные ткани",
      subcategories: [],
    },
    {
      name: "Фланель",
      subcategories: [],
    },
    {
      name: "Кружева",
      subcategories: [],
    },
    {
      name: "Даки с тефлоновым покрытием",
      subcategories: [],
    },
    {
      name: "Джинса женская",
      subcategories: [],
    },
    {
      name: "Трикотаж",
      subcategories: [
        "Цифровая печать",
        "Кулирка",
        "Двухнитка футер",
        "Трёхнитка футер",
        "Вискоза",
        "Индивидуальный принт",
      ],
    },
    {
      name: "Пике и пледы",
      subcategories: [
        "Пике-пледы хлопковые капитони",
        "Вязаные полотна 100% хлопок",
      ],
    },
  ];

  const carouselImages = [
    "https://picsum.photos/seed/trend1/1920/600",
    "https://picsum.photos/seed/trend2/1920/600",
    "https://picsum.photos/seed/trend3/1920/600",
  ];

  const fabricItems = [
    {
      category: "5D поплин",
      image: "https://picsum.photos/seed/fabric1/400/300",
      caption: "100% хлопок • 240 см • рулон 30 м • мерсеризованный",
      alt: "5D поплин, 100% хлопок, 240 см, рулон 30 м, мерсеризованный",
    },
    {
      category: "Сатин мерсеризованный",
      image: "https://picsum.photos/seed/fabric2/400/300",
      caption: "100% хлопок • 240 см • плотность 120 г/м² • гладкий",
      alt: "Сатин мерсеризованный, 100% хлопок, 240 см, плотность 120 г/м², гладкий",
    },
    {
      category: "Кружева",
      image: "https://picsum.photos/seed/fabric3/400/300",
      caption: "Полиэстер • 140 см • рулон 10 м • с вышивкой",
      alt: "Кружева, полиэстер, 140 см, рулон 10 м, с вышивкой",
    },
    {
      category: "Даки с тефлоновым покрытием",
      image: "https://picsum.photos/seed/fabric4/400/300",
      caption: "Хлопок с тефлоном • 150 см • плотность 200 г/м² • водонепроницаемый",
      alt: "Даки с тефлоновым покрытием, хлопок с тефлоном, 150 см, плотность 200 г/м², водонепроницаемый",
    },
    {
      category: "Джинса женская",
      image: "https://picsum.photos/seed/fabric5/400/300",
      caption: "Серая джинсовая ткань • 145 см • плотность 300 г/м² • эластичная",
      alt: "Джинса женская, серая, 145 см, плотность 300 г/м², эластичная",
    },
    {
      category: "Трикотаж цифровая печать",
      image: "https://picsum.photos/seed/fabric6/400/300",
      caption: "Вискоза с цифровой печатью • 180 см • плотность 180 г/м² • цветной принт",
      alt: "Трикотаж цифровая печать, вискоза, 180 см, плотность 180 г/м², цветной принт",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-pink-600">TexTrend</h1>
            <p className="text-sm text-gray-600">— твой проводник в мир тканей</p>
          </div>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <nav className="hidden md:flex space-x-6">
            {categories.map((cat, index) => (
              <div key={index} className="relative group">
                <span className="cursor-pointer hover:text-pink-600 transition">
                  {cat.name}
                </span>
                {cat.subcategories.length > 0 && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block z-10">
                    {cat.subcategories.map((sub, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 py-3">
            {categories.map((cat, index) => (
              <div key={index}>
                <h3 className="font-medium py-2">{cat.name}</h3>
                {cat.subcategories.length > 0 && (
                  <ul className="ml-4">
                    {cat.subcategories.map((sub, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="text-sm py-1 block text-gray-600 hover:text-pink-600"
                        >
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Hero Carousel */}
      <section className="relative">
        <div className="overflow-hidden h-96 md:h-[600px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            TexTrend — твой проводник в мир тканей
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Оптовая и розничная продажа тканей. Минимальный заказ — 50 м.
          </p>
          <a
            href="https://wa.me/905436523991"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Жми сюда
          </a>
        </div>
      </section>

      {/* Category Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Наши ткани
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fabricItems.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">О нас</h2>
          <p className="max-w-3xl mx-auto text-lg">
            TexTrend — ваш надёжный проводник в мир тканей. Мы базируемся в
            Стамбуле и предлагаем широкий ассортимент качественных тканей оптом и
            в розницу. Наша миссия — найти для каждого клиента идеальный материал:
            от классического поплина до инновационных тканей с цифровой печатью.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-pink-600">TexTrend</h3>
              <p className="text-gray-600">
                — твой проводник в мир тканей
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://t.me/textrend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600"
                aria-label="Telegram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.007 7.779l-1.427 6.572-5.229 1.864-.212-1.013 3.796-2.098-5.432-5.229-.902 4.152-7.451 2.187 1.896 1.794 6.551-1.965 2.21 2.109 1.003.955 2.617-6.144z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/textrend.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@textrend.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600"
                aria-label="TikTok"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.51 0C13.05 4.43 16.62 8 21 8V5a1 1 0 011-1h3V13a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2.49c-3.46.97-6.33-1.15-7.24-4.55-.79-2.97.79-6 3.76-6.79z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TexTrend. Все права защищены.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/905436523991"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
        aria-label="WhatsApp"
      >
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.198.297-.767.966-.941 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.072.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
