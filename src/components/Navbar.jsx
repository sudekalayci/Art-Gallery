import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-16 py-8 flex justify-between relative z-50">
      
      {/* Sol: Logo*/}
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold">Art Gallery</h1>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menü (Orta) */}
      <ul
        className={`
          flex-col md:flex-row gap-4 text-gray-700 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out shadow-md md:shadow-none
          ${menuOpen ? 'flex' : 'hidden md:flex'}
          md:ml-auto md:mr-auto items-center
        `}
      >
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Anasayfa</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>Hakkımızda</Link></li>
        <li><Link to="/artists" onClick={() => setMenuOpen(false)}>Sanatçılar</Link></li>
        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Galeri</Link></li>
        <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;

