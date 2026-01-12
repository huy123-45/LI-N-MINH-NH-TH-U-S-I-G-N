
import React from 'react';
import { TOP_MEMBERS } from '../constants';

const MemberSection: React.FC = () => {
  return (
    <section id="members" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Thành Viên Tiêu Biểu</h2>
            <p className="text-lg text-gray-600">
              Những nhà thầu và đội thợ được đánh giá cao nhất bởi cộng đồng chủ nhà trong hệ thống.
            </p>
          </div>
          <button className="text-orange-600 font-bold flex items-center gap-2 hover:underline">
            Tất cả thành viên <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOP_MEMBERS.map((member) => (
            <div key={member.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-full object-cover border-2 border-orange-200" />
                <div>
                  <div className="px-2 py-0.5 bg-orange-100 text-orange-600 text-[10px] font-bold rounded uppercase mb-1 inline-block">
                    {member.type}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <div className="flex items-center text-yellow-500 text-xs">
                    <i className="fas fa-star mr-1"></i>
                    <span className="font-bold text-gray-900">{member.rating}</span>
                    <span className="text-gray-400 ml-1">({member.projectsCompleted} công trình)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Chuyên môn</span>
                  <span className="font-semibold text-gray-900">{member.specialty}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Kinh nghiệm</span>
                  <span className="font-semibold text-gray-900">{member.experience} năm</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="py-2 bg-white text-gray-900 border border-gray-200 rounded-lg font-semibold text-sm hover:bg-gray-100">
                  Hồ sơ năng lực
                </button>
                <button className="py-2 bg-orange-600 text-white rounded-lg font-semibold text-sm hover:bg-orange-700">
                  Liên hệ báo giá
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSection;
