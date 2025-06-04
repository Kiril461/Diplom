import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Бібліотека</h1>
        <div className="space-x-4">
          <NavLink to="/" className="hover:underline">Головна</NavLink>
          <NavLink to="/catalog" className="hover:underline">Каталог</NavLink>
          <NavLink to="/news" className="hover:underline">Новини</NavLink>
          <NavLink to="/contact" className="hover:underline">Контакти</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
