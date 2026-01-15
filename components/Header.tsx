
import React, { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'BĐS', href: '#real-estate' },
  { label: 'Xây dựng', href: '#services' },
  { label: 'Thành viên', href: '#members' },
  { label: 'Dự án', href: '#projects' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleExport = () => {
    window.print();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white shrink-0">
              <i className="fas fa-hard-hat text-xl"></i>
            </div>
            <span className="text-lg md:text-xl font-extrabold tracking-tight text-gray-900 leading-tight">
              LIÊN MINH <span className="text-orange-600">THẦU THỢ</span> <br className="md:hidden" />
              <span className="text-sm md:text-base font-bold text-gray-500 md:ml-1 block md:inline uppercase">Sài Gòn 24/7</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Export */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={handleExport}
              title="Xuất Profile/In Trang"
              className="p-2 text-gray-400 hover:text-orange-600 transition-colors"
            >
              <i className="fas fa-file-export text-xl"></i>
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-50 rounded-full transition-colors">
              Đăng nhập
            </button>
            <button className="px-5 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-full transition-shadow shadow-lg hover:shadow-orange-200">
              Gia nhập liên minh
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={handleExport} className="text-gray-400 p-2">
              <i className="fas fa-file-export"></i>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-orange-600 focus:outline-none"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-600 hover:text-orange-600 font-medium py-2"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <button className="w-full px-4 py-2 text-orange-600 font-semibold border border-orange-600 rounded-lg">
              Đăng nhập
            </button>
            <button className="w-full px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg">
              Gia nhập liên minh
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
