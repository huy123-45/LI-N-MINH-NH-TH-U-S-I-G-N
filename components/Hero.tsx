
import React from 'react';

const Hero: React.FC = () => {
  const previewImages = [
    { 
      url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80', 
      label: 'Nội thất kính & gỗ',
      desc: 'Phòng khách mở'
    },
    { 
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80', 
      label: 'Phòng ngủ Luxury',
      desc: 'Vách kính Xingfa'
    },
    { 
      url: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=600&q=80', 
      label: 'Bếp gỗ cao cấp',
      desc: 'Thiết kế hiện đại'
    },
    { 
      url: 'https://images.unsplash.com/photo-1556911223-e2537ce2270a?auto=format&fit=crop&w=600&q=80', 
      label: 'Gian bếp thông minh',
      desc: 'Phụ kiện nhập khẩu'
    },
    { 
      url: 'https://images.unsplash.com/photo-1558904541-efa8c1968f21?auto=format&fit=crop&w=600&q=80', 
      label: 'Sân vườn nhiệt đới',
      desc: 'Cảnh quan xanh'
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-16 overflow-hidden bg-gray-900">
      {/* Background Image: Luxury Architecture with Glass, Wood, and Xingfa */}
      <div className="absolute inset-0 z-0 h-full">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80"
          alt="Kiến trúc Luxury Modern"
          className="w-full h-full object-cover"
        />
        {/* Dynamic Overlay: Gradient to make text pop and transition to bottom images */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-4xl animate-fade-in-up mb-12 md:mb-16">
          {/* Architectural Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-600/20 border border-orange-500/30 backdrop-blur-xl mb-8">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black text-orange-400 uppercase tracking-[0.4em]">Kiến Trúc & Xây Dựng Thượng Lưu</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
            <span className="block drop-shadow-2xl opacity-95">
              Kết Nối Thầu Thợ Tận Tâm,
            </span>
            <span className="block drop-shadow-2xl opacity-95">
              Xây Dựng Công Trình Vững Bền
            </span>
            <span className="block mt-6 text-white border-l-4 border-orange-600 pl-4 lg:pl-12 italic font-bold text-3xl sm:text-4xl lg:text-6xl drop-shadow-lg">
              Kiến Tạo Tuyệt Tác Không Gian Sống
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md font-medium">
            Chuyên gia thi công hệ cửa nhôm Xingfa nhập khẩu, vách kính khổ lớn và ốp gỗ trang trí cao cấp. Mang đến vẻ đẹp vượt thời gian và sự bền bỉ cho ngôi nhà của bạn tại Sài Gòn.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-5 bg-orange-600 text-white font-black rounded-xl shadow-2xl shadow-orange-900/40 hover:bg-orange-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
              <i className="fas fa-home-alt group-hover:scale-110 transition-transform"></i>
              Nhận mẫu nhà miễn phí
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-black rounded-xl border-2 border-white/20 hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-3 group">
              <i className="fas fa-file-invoice-dollar group-hover:rotate-12 transition-transform"></i>
              Báo giá nhanh
            </button>
          </div>
        </div>

        {/* 5 Luxury Preview Images Grid - 2 Rows: 3 top, 2 bottom centered */}
        <div className="w-full max-w-6xl mx-auto animate-fade-in-up [animation-delay:0.3s]">
          {/* Row 1: 3 Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            {previewImages.slice(0, 3).map((img, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-orange-500/20"
              >
                <div className="aspect-[16/10] w-full">
                  <img 
                    src={img.url} 
                    alt={img.label} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] mb-1">{img.label}</p>
                  <h4 className="text-white text-xs font-bold mb-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-500">
                    {img.desc}
                  </h4>
                  <div className="h-[2px] w-8 bg-orange-600 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Images centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 md:w-2/3 mx-auto">
            {previewImages.slice(3, 5).map((img, index) => (
              <div 
                key={index + 3} 
                className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-orange-500/20"
              >
                <div className="aspect-[16/10] w-full">
                  <img 
                    src={img.url} 
                    alt={img.label} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] mb-1">{img.label}</p>
                  <h4 className="text-white text-xs font-bold mb-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-500">
                    {img.desc}
                  </h4>
                  <div className="h-[2px] w-8 bg-orange-600 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Luxury Detail: Animated Bottom Line */}
      <div className="absolute left-0 bottom-0 w-full h-1.5 bg-gradient-to-r from-orange-600 via-white/10 to-transparent opacity-40"></div>

      {/* Scroll Hint */}
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-[8px] text-white font-bold uppercase tracking-[0.5em]">Cuộn xem thêm</span>
        <i className="fas fa-chevron-down text-white text-[10px]"></i>
      </div>
    </section>
  );
};

export default Hero;
