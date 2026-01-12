
import React from 'react';
import { SERVICES } from '../constants';

const ServiceGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Dịch Vụ Chuyên Nghiệp</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp đầy đủ các hạng mục thiết kế kiến trúc và thi công từ xây dựng cơ bản đến hoàn thiện nội thất cao cấp. - nhận sửa chữa, cải tạo mới với tất cả những hạng mục vừa và nhỏ.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <i className={`fas ${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
              <p className="text-gray-600 line-clamp-3">
                {service.description}
              </p>
              <div className="mt-6">
                <a href="#" className="text-orange-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Xem chi tiết <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
