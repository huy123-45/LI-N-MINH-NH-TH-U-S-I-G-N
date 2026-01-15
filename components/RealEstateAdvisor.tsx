
import React, { useState } from 'react';
import { askConstructionAi, getMapLocation } from '../services/geminiService';

const RealEstateAdvisor: React.FC = () => {
  const [listingData, setListingData] = useState({
    location: '',
    area: '',
    price: '',
    description: '',
    type: 'Nhà phố'
  });
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [mapInfo, setMapInfo] = useState<{ uri: string; title: string } | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const newImages = selectedFiles.map((file: File) => URL.createObjectURL(file));
      setImages(prev => [...prev, ...newImages].slice(0, 8));
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleLocateMap = async () => {
    if (!listingData.location) return;
    setIsLocating(true);
    
    let lat, lng;
    try {
      // Thử lấy tọa độ hiện tại để grounding chính xác hơn nếu ở Sài Gòn
      const pos = await new Promise<GeolocationPosition>((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej, { timeout: 5000 });
      });
      lat = pos.coords.latitude;
      lng = pos.coords.longitude;
    } catch (e) {
      console.log("Geolocation not available or denied");
    }

    const result = await getMapLocation(listingData.location, lat, lng);
    setMapInfo(result);
    setIsLocating(false);
  };

  const generateListing = async () => {
    setIsGenerating(true);
    const prompt = `Hãy viết một tin đăng bán bất động sản hấp dẫn cho: ${listingData.type} tại ${listingData.location}, diện tích ${listingData.area}m2, giá ${listingData.price}. 
    Thêm phần "Góc nhìn kỹ thuật từ anh em thợ" đánh giá về tiềm năng và kết cấu.
    Và đừng quên lồng ghép lời nhắc về hỗ trợ vay ngân hàng lãi suất tốt. 
    ${mapInfo ? `Bản đồ vị trí: ${mapInfo.uri}` : ''}
    Sử dụng giọng văn Sài Gòn thân thiện.`;
    
    const result = await askConstructionAi(prompt);
    setGeneratedContent(result);
    setIsGenerating(false);
  };

  return (
    <section id="real-estate" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Form Input */}
          <div className="lg:w-1/2 space-y-10">
            <div>
              <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                Giải pháp BĐS 4.0
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Tư Vấn BĐS <br/>
                <span className="text-orange-600">Sài Gòn Chuyên Nghiệp</span>
              </h2>
              <p className="mt-4 text-gray-500 font-medium">
                Chúng tôi hỗ trợ từ khâu đăng tin, thẩm định kỹ thuật đến vay vốn ngân hàng.
              </p>
            </div>

            <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 shadow-sm space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold flex items-center gap-2 text-gray-900">
                  <i className="fas fa-edit text-orange-600"></i>
                  Soạn tin đăng thần tốc
                </h3>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">AI hỗ trợ 24/7</span>
              </div>

              {/* Enhanced Image Upload Area */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 flex justify-between">
                  Hình ảnh sản phẩm 
                  <span className="text-[10px] text-gray-400 font-normal italic">(Tối đa 6-8 tấm)</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {images.map((img, i) => (
                    <div key={i} className="aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-sm relative group animate-fade-in">
                      <img src={img} className="w-full h-full object-cover" alt={`BĐS ${i}`} />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button 
                          onClick={() => removeImage(i)} 
                          className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
                        >
                          <i className="fas fa-trash-can text-xs"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  {images.length < 8 && (
                    <label className="aspect-square rounded-2xl border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600 transition-all text-gray-400 group">
                      <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-orange-100 flex items-center justify-center mb-1 transition-colors">
                        <i className="fas fa-plus text-xl group-hover:scale-125 transition-transform"></i>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-tighter">Thêm ảnh</span>
                      <input type="file" multiple className="hidden" accept="image/*" onChange={handleImageUpload} />
                    </label>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[11px] font-bold text-gray-400 uppercase ml-1">Vị trí & Địa chỉ chi tiết</label>
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="VD: 123 Quang Trung, Quận 12..." 
                      className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-orange-600/20 bg-white"
                      value={listingData.location}
                      onChange={(e) => setListingData({...listingData, location: e.target.value})}
                    />
                    <button 
                      onClick={handleLocateMap}
                      disabled={isLocating || !listingData.location}
                      title="Tìm trên bản đồ"
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center hover:bg-orange-700 transition-colors disabled:opacity-50"
                    >
                      {isLocating ? (
                        <i className="fas fa-circle-notch animate-spin text-xs"></i>
                      ) : (
                        <i className="fas fa-map-marker-alt text-xs"></i>
                      )}
                    </button>
                  </div>
                </div>

                {mapInfo && (
                  <div className="md:col-span-2 animate-fade-in">
                    <a 
                      href={mapInfo.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-xl hover:bg-blue-100 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                        <i className="fas fa-location-dot"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider leading-none mb-1">Đã tìm thấy vị trí</p>
                        <p className="text-xs font-bold text-gray-900 truncate">{mapInfo.title}</p>
                      </div>
                      <i className="fas fa-external-link-alt text-blue-400 text-[10px] mr-2"></i>
                    </a>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase ml-1">Loại hình</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white font-medium"
                    value={listingData.type}
                    onChange={(e) => setListingData({...listingData, type: e.target.value})}
                  >
                    <option>Nhà phố</option>
                    <option>Chung cư</option>
                    <option>Đất nền</option>
                    <option>Biệt thự</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 uppercase ml-1">Diện tích</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="100" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white"
                        value={listingData.area}
                        onChange={(e) => setListingData({...listingData, area: e.target.value})}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-[10px] font-black">m²</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 uppercase ml-1">Giá</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="5.2 tỷ" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white"
                        value={listingData.price}
                        onChange={(e) => setListingData({...listingData, price: e.target.value})}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-[10px] font-black">VNĐ</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-400 uppercase ml-1">Mô tả thêm (Không bắt buộc)</label>
                <textarea 
                  rows={3}
                  placeholder="VD: Sổ hồng riêng, hẻm xe hơi, tặng nội thất..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white"
                  value={listingData.description}
                  onChange={(e) => setListingData({...listingData, description: e.target.value})}
                ></textarea>
              </div>

              <button 
                onClick={generateListing}
                disabled={isGenerating || !listingData.location}
                className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isGenerating ? (
                  <i className="fas fa-circle-notch animate-spin"></i>
                ) : (
                  <i className="fas fa-magic text-orange-500"></i>
                )}
                AI TỰ ĐỘNG VIẾT TIN CHUYÊN NGHIỆP
              </button>
            </div>
          </div>

          {/* Right Column: AI Output & Services */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            
            {/* AI Generated Result */}
            {generatedContent && (
              <div className="bg-orange-50 rounded-[2.5rem] p-8 border border-orange-100 shadow-inner relative animate-fade-in">
                <div className="absolute top-6 right-6 flex gap-2 no-print">
                  <button onClick={() => navigator.clipboard.writeText(generatedContent)} title="Copy" className="w-8 h-8 bg-white rounded-full text-gray-400 hover:text-orange-600 shadow-sm border border-gray-100 flex items-center justify-center">
                    <i className="fas fa-copy text-xs"></i>
                  </button>
                </div>
                <h4 className="text-orange-600 font-black text-sm uppercase tracking-widest mb-4">Nội dung tin đăng & Đánh giá thợ</h4>
                <div className="prose prose-sm text-gray-700 font-medium whitespace-pre-wrap leading-relaxed">
                  {generatedContent}
                </div>
              </div>
            )}

            {/* Support Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fas fa-university text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Hỗ trợ Tài chính</h4>
                <p className="text-xs text-gray-500 mb-4">Vay vốn lên tới 70% giá trị BĐS. Lãi suất ưu đãi từ các ngân hàng đối tác.</p>
                <button className="text-blue-600 font-bold text-xs flex items-center gap-2">
                  Tính lãi suất <i className="fas fa-chevron-right text-[10px]"></i>
                </button>
              </div>

              <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <i className="fas fa-hammer text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Cải tạo để bán giá cao</h4>
                <p className="text-xs text-gray-500 mb-4">Dịch vụ tân trang nhà cũ, sơn phết, sửa chữa kỹ thuật nhanh trong 7 ngày.</p>
                <a href="#consultation" className="text-green-600 font-bold text-xs flex items-center gap-2">
                  Báo giá cải tạo <i className="fas fa-chevron-right text-[10px]"></i>
                </a>
              </div>
            </div>

            {!generatedContent && !isGenerating && (
              <div className="h-full bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-12 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-orange-200 blur-3xl opacity-20"></div>
                  <img src="https://cdn-icons-png.flaticon.com/512/10433/10433049.png" className="w-24 h-24 opacity-30 relative z-10" alt="Home icon" />
                </div>
                <h4 className="text-lg font-bold text-gray-400">Chưa có bản tin nào</h4>
                <p className="text-sm text-gray-400 max-w-xs">Nhập thông tin bên trái để Trợ lý AI giúp quý khách soạn tin đăng và tư vấn kỹ thuật nhé!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateAdvisor;
