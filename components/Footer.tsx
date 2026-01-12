
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white">
                <i className="fas fa-hard-hat"></i>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 leading-none">
                LIÊN MINH <br/>
                <span className="text-orange-600">THẦU THỢ</span> <br/>
                <span className="text-xs font-bold text-gray-400 uppercase">SÀI GÒN 24/7</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Nền tảng số 1 tại TP.HCM về kết nối nhà thầu, thợ xây dựng và các đơn vị cung cấp vật tư chuyên nghiệp hoạt động 24/7.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-600 hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-600 hover:text-white transition-all">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-600 hover:text-white transition-all">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Liên Minh</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-orange-600 transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Quy trình làm việc</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Hồ sơ năng lực</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Gia nhập thợ thầu</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Hỗ Trợ</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-orange-600 transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">An toàn lao động</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Khiếu nại & Phản hồi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Liên Hệ</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-orange-600"></i>
                <span>Tòa nhà Innovation, CVPM Quang Trung, Quận 12, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone-alt text-orange-600"></i>
                <span>1900 1234 56</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-orange-600"></i>
                <span>contact@thautho.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2024 LIÊN MINH THẦU THỢ SÀI GÒN 24/7. Bản quyền thuộc về Công ty Cổ phần Giải pháp Xây dựng Số.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-600">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-gray-600">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
