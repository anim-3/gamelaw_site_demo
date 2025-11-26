/* Full App.jsx - Tailwind-ready React component for Gamelaw site */
import React, { useState } from "react";

const casesData = [
  {
    "id": 1,
    "title": "Фото без согласия",
    "short": "",
    "poster": "/images/A_flat-style_digital_illustration_of_a_question_ca.png",
    "comics": [
      "/images/A_2D_digital_illustration_features_a_rectangular_y.png",
      "/images/A_2D_digital_illustration_displays_a_discussion_ca.png",
      "/images/A_3D-rendered_digital_illustration_set_in_a_daytim.png",
      "/images/A_2D_digital_illustration_poster_titled_\"Дискримин.png"
    ],
    "lawLink": "https://adilet.zan.kz"
  },
  {
    "id": 2,
    "title": "Кибербуллинг",
    "short": "",
    "poster": "/images/A_3D-rendered_digital_image_of_an_educational_assi.png",
    "comics": [
      "/images/A_3D-rendered_digital_illustration_showcases_a_you.png",
      "/images/A_3D-rendered_digital_illustration_features_a_teen.png",
      "/images/A_3D-rendered_digital_illustration_in_a_cartoon-st.png",
      "/images/A_3D-rendered_digital_illustration_in_cartoonish_s.png"
    ],
    "lawLink": "https://adilet.zan.kz"
  },
  {
    "id": 3,
    "title": "Поддельный товар",
    "short": "",
    "poster": "/images/A_3D-rendered_digital_illustration_depicts_a_class.png",
    "comics": [
      "/images/A_3D-rendered_digital_illustration_depicts_four_yo.png",
      "/images/A_3D-rendered_digital_illustration_shows_a_teenage.png",
      "/images/A_2D_digital_illustration_in_3D_cartoon-style_depi.png",
      "/images/A_3D-rendered_digital_image_depicts_a_cartoon-styl.png"
    ],
    "lawLink": "https://adilet.zan.kz"
  },
  {
    "id": 4,
    "title": "Фейк в соцсетях",
    "short": "",
    "poster": "/images/A_3D-rendered_digital_illustration_shows_a_female_.png",
    "comics": [
      "/images/A_four-panel_digital_illustration_comic_strip_in_a.png",
      "/images/A_3D-rendered_digital_illustration_in_a_cartoon-li.png",
      "/images/A_3D-rendered_digital_illustration_in_a_colorful,_.png",
      "/images/A_3D-rendered_digital_illustration_depicts_a_girl_.png"
    ],
    "lawLink": "https://adilet.zan.kz"
  },
  {
    "id": 5,
    "title": "Шум в парке",
    "short": "",
    "poster": "/images/A_digital_illustration_of_an_informational_card_fe.png",
    "comics": [
      "/images/A_2D_digital_illustration_in_a_cartoonish_3D-rende.png",
      "/images/A_2D_digital_illustration_in_a_cartoonish_3D_style.png",
      "/images/A_colorful_digital_illustration_in_cartoon_style_s.png",
      "/images/A_2D_digital_illustration_in_a_cartoonish,_3D-rend.png"
    ],
    "lawLink": "https://adilet.zan.kz"
  },
  {
    "id": 6,
    "title": "Дискриминация",
    "short": "",
    "poster": "/images/A_3D-rendered_digital_illustration_displays_four_d.png",
    "comics": [
      "/images/A_2D_digital_illustration_in_modern_cartoon_style_.png",
      "/images/A_2D_digital_illustration_in_a_cartoonish,_3D_styl.png",
      "/images/A_2D_digital_illustration_in_a_cartoon_style_depic.png",
      "/images/A_2D_digital_illustration_in_a_cartoon-style_depic.png"
    ],
    "lawLink": "https://adilet.zan.kz"
  },
  {
    "id": 7,
    "title": "Незаконный сбор данных",
    "short": "",
    "poster": "/images/A_2D_digital_illustration_infographic_titled_\"Поис.png",
    "comics": [
      "/images/A_2D_digital_illustration_in_a_cartoony_and_educat.png",
      "/images/A_2D_digital_illustration_depicts_a_young_male_stu.png",
      "/images/A_flat-style_digital_illustration_of_a_question_ca.png",
      "/images/A_3D-rendered_digital_illustration_depicts_a_young.png"
    ],
    "lawLink": "https://adilet.zan.kz"
  },
  {
    "id": 8,
    "title": "Шантаж в интернете",
    "short": "",
    "poster": "/images/A_3D-rendered_digital_illustration_of_a_rectangula.png",
    "comics": [
      "/images/A_3D-rendered_digital_image_of_an_educational_assi.png",
      "/images/A_3D-rendered_digital_illustration_depicts_a_class.png",
      "/images/A_3D-rendered_digital_illustration_shows_a_female_.png",
      "/images/A_digital_illustration_of_an_informational_card_fe.png"
    ],
    "lawLink": "https://adilet.zan.kz"
  },
  {
    "id": 9,
    "title": "Санитарные нарушения",
    "short": "",
    "poster": "/images/A_3D-rendered_digital_illustration_portrays_four_d.png",
    "comics": [
      "/images/A_3D-rendered_digital_illustration_displays_four_d.png",
      "/images/A_3D-rendered_digital_illustration_in_a_cartoonish.png",
      "/images/A_2D_digital_illustration_infographic_titled_\"Поис.png",
      "/images/A_3D-rendered_digital_illustration_of_a_rectangula.png"
    ],
    "lawLink": "https://adilet.zan.kz"
  },
  {
    "id": 10,
    "title": "Мирные собрания",
    "short": "",
    "poster": "/images/A_graphic_card_image_of_a_card_titled_\"Анализ_ситу.png",
    "comics": [
      "/images/A_3D-rendered_digital_illustration_portrays_four_d.png",
      "/images/A_3D-rendered_digital_illustration_depicts_a_teena.png",
      "/images/A_graphic_card_image_of_a_card_titled_\"Анализ_ситу.png",
      "/images/A_2D_digital_illustration_features_a_rectangular_y.png"
    ],
    "lawLink": "https://adilet.zan.kz"
  }
];

function Header({ onOpenResources }) {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-sky-500 text-white p-6">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Геймификация законов Казахстана</h1>
        <nav className="space-x-4">
          <button onClick={onOpenResources} className="hover:underline">Ресурсы</button>
          <a href="#cases" className="hover:underline">Кейсы</a>
          <a href="#posters" className="hover:underline">Постеры</a>
          <a href="/docs/Workbook_Gamification_KZ.pdf" className="hover:underline" target="_blank" rel="noreferrer">Скачать тетрадь</a>
        </nav>
      </div>
    </header>
  );
}

function CaseCard({ c, onOpen }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <img src={c.poster} alt={c.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{c.title}</h3>
        <p className="text-sm text-gray-600">{c.short}</p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => onOpen(c)} className="px-3 py-2 bg-indigo-600 text-white rounded">Открыть кейс</button>
          <a href={c.lawLink} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded text-indigo-600">Закон</a>
        </div>
      </div>
    </div>
  );
}

function CasesGrid({ data, onOpen }) {
  return (
    <section id="cases" className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Кейсы</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((c) => (
          <CaseCard key={c.id} c={c} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

function PostersGallery({ data }) {
  return (
    <section id="posters" className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Постеры</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {data.map((c) => (
          <div key={c.id} className="bg-white rounded-xl overflow-hidden shadow">
            <img src={c.poster} alt={c.title} className="w-full h-48 object-cover" />
            <div className="p-3">
              <h4 className="text-md font-medium">{c.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ComicViewer({ caseItem, onClose }) {
  const [index, setIndex] = useState(0);
  if (!caseItem) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{caseItem.title} — Комикс</h3>
          <div className="flex gap-2">
            <a href={caseItem.comics[index]} download className="px-3 py-1 border rounded">Скачать</a>
            <button onClick={onClose} className="px-3 py-1 bg-red-500 text-white rounded">Закрыть</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setIndex((i) => Math.max(0, i - 1))} className="px-3 py-2 bg-gray-100 rounded">◀</button>
          <img src={caseItem.comics[index]} alt={`comic-${index}`} className="w-full h-96 object-contain rounded" />
          <button onClick={() => setIndex((i) => Math.min(caseItem.comics.length - 1, i + 1))} className="px-3 py-2 bg-gray-100 rounded">▶</button>
        </div>
        <div className="mt-3 text-center text-sm text-gray-600">Кадр {index + 1} из {caseItem.comics.length}</div>
      </div>
    </div>
  );
}

function TeacherResources({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 p-6 overflow-auto max-h-[80vh]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Ресурсы для учителя</h3>
          <button onClick={onClose} className="px-3 py-1 bg-red-500 text-white rounded">Закрыть</button>
        </div>
        <div className="space-y-4 text-sm">
          <p><b>Содержимое:</b> методичка, рабочая тетрадь, презентация, постеры и комиксы.</p>
          <ul className="list-disc pl-6">
            <li><a href="/docs/Workbook_Gamification_KZ.pdf" target="_blank" rel="noreferrer" className="text-indigo-600">Рабочая тетрадь (PDF)</a></li>
            <li><a href="/docs/posters_collection.pdf" target="_blank" rel="noreferrer" className="text-indigo-600">Коллекция постеров (PDF)</a></li>
            <li><a href="/docs/presentation_qr_codes.pptx" target="_blank" rel="noreferrer" className="text-indigo-600">Презентация (PPTX)</a></li>
          </ul>
          <h4 className="font-semibold">Шаблоны уроков</h4>
          <p>Включены в рабочую тетрадь: универсальный шаблон урока, шаблон создания комикса, карточки для групповой работы.</p>
          <h4 className="font-semibold">Ссылки на законы</h4>
          <p>Каждый кейс содержит ссылку на официальный источник (adilet.zan.kz).</p>
          <h4 className="font-semibold">Как использовать ИИ</h4>
          <ol className="pl-6 list-decimal">
            <li>Создайте учётные записи в сервисах (Canva, Pika, Runway).</li>
            <li>Используйте готовые промты из методички.</li>
            <li>Попросите учащихся сгенерировать 4 кадра и собрать комикс в Canva.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onOpenResources={() => setResourcesOpen(true)} />

      <main className="pb-24">
        <section className="container mx-auto py-12 text-center">
          <h2 className="text-3xl font-bold">Учебный проект: геймификация прав</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Интерактивные кейсы, комиксы, постеры и методические материалы для уроков по правовой грамотности.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/docs/Workbook_Gamification_KZ.pdf" className="px-4 py-2 bg-indigo-600 text-white rounded">Скачать тетрадь</a>
            <a href="/docs/posters_collection.pdf" className="px-4 py-2 border rounded text-indigo-600">Постеры (PDF)</a>
          </div>
        </section>

        <CasesGrid data={casesData} onOpen={(c) => setSelectedCase(c)} />

        <PostersGallery data={casesData} />

        <section className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6">Для учителя</h2>
          <div className="bg-white rounded-xl p-6 shadow">
            <p className="text-gray-700">Полный методический комплект, шаблоны уроков и карточки для групповой работы — доступны для скачивания.</p>
            <div className="mt-4 flex gap-3">
              <a href="/docs/Workbook_Gamification_KZ.pdf" className="px-3 py-2 bg-indigo-600 text-white rounded">Рабочая тетрадь</a>
              <a href="/docs/presentation_qr_codes.pptx" className="px-3 py-2 border rounded text-indigo-600">Презентация</a>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-white border-t py-6">
        <div className="container mx-auto text-center text-sm text-gray-600">
          © {new Date().getFullYear()} «Геймификация законов Казахстана» — материалы для образовательного использования.
        </div>
      </footer>

      <ComicViewer caseItem={selectedCase} onClose={() => setSelectedCase(null)} />
      <TeacherResources open={resourcesOpen} onClose={() => setResourcesOpen(false)} />
    </div>
  );
}
