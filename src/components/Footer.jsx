import "../styles/Footer.css";
const Footer = () => {
    return (
      <footer className="py-8 ">
        <div className="max-w-screen-xl mx-6 px-10 ">
          <div className="flex flex-col md:flex-row justify-between gap-8">

            {/* Sosyal Medya Linkleri */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
                </li>
                <li>
                  <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
                </li>
                <li>
                  <a href="https://linkedin.com" className="hover:text-gray-400">LinkedIn</a>
                </li>
              </ul>
            </div>
  
            {/* İletişim Bilgileri */}
            <div>
              <h3 className="text-lg font-semibold mb-4">İletişim</h3>
              <p className="mb-2">Email: contact@sanatgalerisi.com</p>
              <p>Telefon: 123-456-7890</p>
            </div>
  
            {/* Telif Hakkı Bilgisi */}
            <div className="md:text-right">
              <p className="text-sm mt-4 md:mt-0">© 2025 Sanat Galerisi. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  