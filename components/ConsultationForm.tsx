
import React, { useState, useMemo } from 'react';
import { HCMC_DISTRICTS } from '../constants';

type FoundationType = 'single' | 'pile' | 'strip';
type RoofType = 'tole' | 'tile' | 'concrete';
type PackageType = 'raw' | 'standard' | 'premium';

const ConsultationForm: React.FC = () => {
  // Calculator State
  const [calcData, setCalcData] = useState({
    width: 5,
    length: 15,
    floors: 1,
    foundation: 'single' as FoundationType,
    roof: 'tole' as RoofType,
    package: 'standard' as PackageType,
    hasBasement: false
  });

  // Lead Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    area: '',
    requirement: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Calculation Logic
  const results = useMemo(() => {
    const baseArea = calcData.width * calcData.length;
    
    // 1. Foundation
    const foundationCoeff = calcData.foundation === 'single' ? 0.4 : 0.5;
    const foundationArea = baseArea * foundationCoeff;

    // 2. Floors
    const floorsArea = baseArea * calcData.floors;

    // 3. Roof
    const roofCoeff = calcData.roof === 'tole' ? 0.3 : calcData.roof === 'tile' ? 0.7 : 0.5;
    const roofArea = baseArea * roofCoeff;

    // 4. Basement
    const basementArea = calcData.hasBasement ? baseArea * 1.5 : 0;

    // Total Equivalent Area
    const totalEquivalentArea = foundationArea + floorsArea + roofArea + basementArea;

    // Unit Price
    const unitPrice = calcData.package === 'raw' ? 4150000 : calcData.package === 'standard' ? 7500000 : 8500000;

    // Total Cost
    const totalCost = totalEquivalentArea * unitPrice;

    return {
      baseArea,
      foundationArea,
      floorsArea,
      roofArea,
      basementArea,
      totalEquivalentArea,
      unitPrice,
      totalCost
    };
  }, [calcData]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation Request:', { ...formData, estimation: results });
    setIsSubmitted(true);
  };

  const handleExportSummary = () => {
    window.print();
  };

  return (
    <section id="consultation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Công cụ Tính Giá Xây Dựng <br/>
            <span className="text-orange-600 font-extrabold">chung tại tp.HCM</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dựa trên công thức quy đổi diện tích chuẩn ngành xây dựng tại khu vực TP.HCM, giúp chủ đầu tư dự trù kinh phí chính xác nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Input Form Column */}
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white">
                <i className="fas fa-edit"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 uppercase">Thông số công trình</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Chiều rộng đất (m)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                  value={calcData.width}
                  onChange={(e) => setCalcData({ ...calcData, width: Number(e.target.value) })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Chiều dài đất (m)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                  value={calcData.length}
                  onChange={(e) => setCalcData({ ...calcData, length: Number(e.target.value) })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Số tầng (bao gồm trệt)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                  value={calcData.floors}
                  onChange={(e) => setCalcData({ ...calcData, floors: Number(e.target.value) })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Hầm (Tùy chọn)</label>
                <div className="flex items-center mt-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={calcData.hasBasement}
                      onChange={(e) => setCalcData({ ...calcData, hasBasement: e.target.checked })}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-600">{calcData.hasBasement ? 'Có tầng hầm (150%)' : 'Không có hầm'}</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Loại móng</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600/20 outline-none bg-white"
                  value={calcData.foundation}
                  onChange={(e) => setCalcData({ ...calcData, foundation: e.target.value as FoundationType })}
                >
                  <option value="single">Móng đơn (40%)</option>
                  <option value="strip">Móng băng (50%)</option>
                  <option value="pile">Móng cọc (50%)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Loại mái</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600/20 outline-none bg-white"
                  value={calcData.roof}
                  onChange={(e) => setCalcData({ ...calcData, roof: e.target.value as RoofType })}
                >
                  <option value="tole">Mái Tole (30%)</option>
                  <option value="concrete">Mái Bê tông CT (50%)</option>
                  <option value="tile">Mái Ngói kèo sắt (70%)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Gói thầu</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600/20 outline-none bg-white"
                  value={calcData.package}
                  onChange={(e) => setCalcData({ ...calcData, package: e.target.value as PackageType })}
                >
                  <option value="raw">Xây thô (4.15tr/m2)</option>
                  <option value="standard">Trọn gói Khá (7.5tr/m2)</option>
                  <option value="premium">Trọn gói Cao Cấp (8.5tr/m2)</option>
                </select>
              </div>
            </div>

            <button 
              onClick={() => setShowResult(true)}
              className="w-full py-5 bg-orange-600 text-white font-black text-lg rounded-2xl shadow-xl shadow-orange-200 hover:bg-orange-700 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <i className="fas fa-calculator"></i>
              TÍNH TOÁN CHI PHÍ DỰ KIẾN
            </button>
          </div>

          {/* Results Column */}
          <div className="xl:col-span-1">
            {!showResult ? (
              <div className="h-full bg-orange-50 rounded-3xl border-2 border-dashed border-orange-200 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-orange-600 mb-6 shadow-sm">
                  <i className="fas fa-chart-pie text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Chưa có dữ liệu</h4>
                <p className="text-gray-500 text-sm">Điền thông số bên trái và bấm "Tính toán" để xem kết quả chi tiết.</p>
              </div>
            ) : (
              <div className="bg-gray-900 rounded-3xl p-8 text-white shadow-2xl animate-fade-in sticky top-24">
                <h3 className="text-xl font-black mb-6 uppercase tracking-widest text-orange-500">Kết quả dự tính</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-gray-400 text-sm">Diện tích Móng</span>
                    <span className="font-bold">{results.foundationArea.toFixed(1)} m²</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-gray-400 text-sm">Diện tích Các tầng</span>
                    <span className="font-bold">{results.floorsArea.toFixed(1)} m²</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-gray-400 text-sm">Diện tích Mái</span>
                    <span className="font-bold">{results.roofArea.toFixed(1)} m²</span>
                  </div>
                  {results.basementArea > 0 && (
                    <div className="flex justify-between items-center pb-3 border-b border-white/10">
                      <span className="text-gray-400 text-sm">Diện tích Hầm</span>
                      <span className="font-bold">{results.basementArea.toFixed(1)} m²</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-2 text-orange-400">
                    <span className="text-sm font-bold uppercase">Tổng m² quy đổi</span>
                    <span className="text-xl font-black">{results.totalEquivalentArea.toFixed(1)} m²</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 mb-8 text-center border border-white/10">
                  <p className="text-xs text-gray-400 uppercase font-black tracking-widest mb-2">Tổng chi phí dự kiến</p>
                  <p className="text-3xl md:text-4xl font-black text-orange-500 mb-2">
                    {formatCurrency(results.totalCost)}
                  </p>
                  <p className="text-[10px] text-gray-500 italic">
                    *Đơn giá: {formatCurrency(results.unitPrice)}/m²
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] text-gray-500 italic leading-relaxed">
                    <b>Lưu ý:</b> Con số này là ước tính tham khảo dựa trên diện tích quy đổi chuẩn tại TP.HCM. Vui lòng liên hệ nhà thầu để có báo giá chi tiết từng hạng mục.
                  </p>
                  <a 
                    href="#lead-form"
                    className="block w-full py-3 bg-white text-gray-900 text-center font-black rounded-xl hover:bg-orange-500 hover:text-white transition-all"
                  >
                    NHẬN BÁO GIÁ CHI TIẾT
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Lead Form Section */}
        <div id="lead-form" className="mt-20">
          <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col lg:flex-row">
            {/* Left Side: Info */}
            <div className="lg:w-1/3 bg-orange-600 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                  <i className="fas fa-headset text-3xl"></i>
                </div>
                <h2 className="text-3xl font-extrabold mb-4 uppercase">Đăng Ký Khảo Sát Tận Nơi</h2>
                <p className="text-orange-100 mb-8 font-medium">
                  Gửi thông tin để chuyên gia của chúng tôi xuống tận nơi khảo sát địa hình, tư vấn kiến trúc và chốt đơn giá chính xác 100%.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <i className="fas fa-bolt"></i>
                    </div>
                    <p className="text-sm font-bold">Phản hồi trong 15 phút</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <i className="fas fa-shield-halved"></i>
                    </div>
                    <p className="text-sm font-bold">Cam kết không phát sinh chi phí</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-2/3 p-8 md:p-12">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <i className="fas fa-check text-4xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Đã gửi yêu cầu thành công!</h3>
                  <p className="text-gray-600 mb-8">Cảm ơn {formData.name}. Chúng tôi sẽ liên hệ qua số {formData.phone} sớm nhất.</p>
                  
                  <div className="flex flex-wrap justify-center gap-4 no-print">
                    <button
                      onClick={handleExportSummary}
                      className="px-6 py-3 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 flex items-center gap-2 transition-all shadow-sm"
                    >
                      <i className="fas fa-print text-gray-500"></i>
                      In Bảng Ước Tính
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-200"
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>

                  {/* Print-only summary card */}
                  <div className="hidden print:block text-left p-8 border-2 border-gray-900 rounded-3xl mt-8 w-full">
                    <div className="flex justify-between items-start mb-6">
                       <div>
                         <h4 className="font-black text-2xl text-gray-900 uppercase">PHIẾU DỰ TOÁN SƠ BỘ</h4>
                         <p className="text-gray-500 text-xs">LIÊN MINH THẦU THỢ SÀI GÒN 24/7</p>
                       </div>
                       <div className="text-right">
                         <p className="font-bold text-orange-600">MÃ: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 text-sm mb-8">
                      <div><span className="text-gray-400 block uppercase text-[10px] font-bold">Khách hàng:</span> <b>{formData.name}</b></div>
                      <div><span className="text-gray-400 block uppercase text-[10px] font-bold">Liên hệ:</span> <b>{formData.phone}</b></div>
                      <div><span className="text-gray-400 block uppercase text-[10px] font-bold">Khu vực:</span> <b>{formData.district}</b></div>
                      <div><span className="text-gray-400 block uppercase text-[10px] font-bold">Quy mô:</span> <b>{calcData.floors} tầng, {results.totalEquivalentArea.toFixed(1)} m² quy đổi</b></div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl mb-6">
                      <h5 className="font-bold text-xs uppercase mb-3 border-b pb-2">Chi tiết diện tích</h5>
                      <div className="grid grid-cols-3 gap-4 text-xs">
                        <p>Móng: {results.foundationArea.toFixed(1)} m²</p>
                        <p>Sàn: {results.floorsArea.toFixed(1)} m²</p>
                        <p>Mái: {results.roofArea.toFixed(1)} m²</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-400 text-[10px] uppercase font-bold">Tổng chi phí dự kiến</p>
                      <p className="text-3xl font-black text-orange-600">{formatCurrency(results.totalCost)}</p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-gray-100 text-[10px] text-gray-400 italic">
                      Lưu ý: Đây là bảng dự toán tự động. Giá trị thực tế có thể thay đổi tùy thuộc vào vị trí thi công, giá vật liệu thời điểm hiện tại và thiết kế chi tiết.
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitLead} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Họ và tên khách hàng</label>
                      <input
                        required
                        type="text"
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Số điện thoại liên hệ</label>
                      <input
                        required
                        type="tel"
                        placeholder="09xx xxx xxx"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Khu vực thi công</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all bg-white"
                        value={formData.district}
                        onChange={(e) => setFormData({...formData, district: e.target.value})}
                      >
                        <option value="">Chọn Quận/Huyện TP.HCM</option>
                        {HCMC_DISTRICTS.map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Diện tích dự kiến (m²)</label>
                      <div className="relative">
                        <input
                          type="number"
                          placeholder="VD: 100"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                          value={formData.area || results.baseArea}
                          onChange={(e) => setFormData({...formData, area: e.target.value})}
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">m²</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Yêu cầu cụ thể hoặc ghi chú</label>
                    <textarea
                      rows={3}
                      placeholder="VD: Xây nhà phố 3 tầng, phong cách hiện đại, sửa nhà trọn gói..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                      value={formData.requirement}
                      onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-gray-900 text-white font-black text-lg rounded-2xl shadow-xl hover:bg-black hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                  >
                    ĐĂNG KÝ KHẢO SÁT & TƯ VẤN
                    <i className="fas fa-paper-plane text-orange-500"></i>
                  </button>
                  <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                    Phí khảo sát: <span className="text-green-600">0 VNĐ (MIỄN PHÍ 100%)</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
