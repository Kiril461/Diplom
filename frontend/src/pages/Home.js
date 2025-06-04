function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-blue-100 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Ласкаво просимо до бібліотеки!</h2>
        <p>Наша бібліотека пропонує широкий вибір книг, журнали та електронні ресурси.</p>
        <a href="/catalog" className="text-blue-600 hover:underline">Переглянути каталог</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Новини</h3>
          <p>Слідкуйте за нашими подіями!</p>
          <a href="/news" className="text-blue-600 hover:underline">Дізнатися більше</a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Контакти</h3>
          <p>Зв’яжіться з нами!</p>
          <a href="/contact" className="text-blue-600 hover:underline">Написати</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
