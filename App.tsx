
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import MemberSection from './components/MemberSection';
import ProjectGallery from './components/ProjectGallery';
import ConsultationForm from './components/ConsultationForm';
import RealEstateAdvisor from './components/RealEstateAdvisor';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Trust Indicators */}
        <div className="bg-gray-50 py-10 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 overflow-hidden">
            <div className="flex justify-center md:justify-between items-center gap-12 opacity-40 grayscale flex-wrap">
              <img src="https://picsum.photos/seed/brand1/120/40" alt="Partner" className="h-8" />
              <img src="https://picsum.photos/seed/brand2/120/40" alt="Partner" className="h-8" />
              <img src="https://picsum.photos/seed/brand3/120/40" alt="Partner" className="h-8" />
              <img src="https://picsum.photos/seed/brand4/120/40" alt="Partner" className="h-8" />
              <img src="https://picsum.photos/seed/brand5/120/40" alt="Partner" className="h-8" />
            </div>
          </div>
        </div>

        <ServiceGrid />

        <RealEstateAdvisor />

        <ConsultationForm />
        
        <MemberSection />

        {/* Banner Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-orange-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500 skew-x-12 translate-x-1/4 opacity-50"></div>
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">Bạn là Nhà thầu hay thợ lành nghề?</h2>
                <p className="text-lg text-orange-50 mb-8">
                  Hãy gia nhập mạng lưới của chúng tôi để tiếp cận hàng nghìn khách hàng tiềm năng mỗi tháng và nâng tầm sự nghiệp xây dựng của bạn.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors">
                    Đăng ký hợp tác
                  </button>
                  <button className="px-8 py-4 bg-orange-700 text-white font-bold rounded-xl hover:bg-orange-800 transition-colors">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectGallery />

        {/* FAQ/Contact Minimal */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Vẫn còn thắc mắc?</h2>
            <p className="text-lg text-gray-600 mb-10">
              Đừng ngần ngại liên hệ với chúng tôi để được tư vấn miễn phí về dự án của bạn.
            </p>
            <div className="inline-flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex -space-x-4">
                <img src="https://picsum.photos/seed/sup1/60/60" className="w-12 h-12 rounded-full border-2 border-white" alt="CS" />
                <img src="https://picsum.photos/seed/sup2/60/60" className="w-12 h-12 rounded-full border-2 border-white" alt="CS" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900">Liên hệ ngay</p>
                <p className="text-orange-600 font-extrabold text-xl">0779096025</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* AI Bot Overlay */}
      <AiAssistant />
    </div>
  );
};

export default App;
