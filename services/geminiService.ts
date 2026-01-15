
import { GoogleGenAI } from "@google/genai";

export const askConstructionAi = async (prompt: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `
          Bạn là "Trợ lý ảo thông minh của Liên minh thầu thợ và Bất động sản Sài Gòn". 
          
          Nhiệm vụ chính của bạn bao gồm:
          1. Viết tin đăng BĐS hấp dẫn: Khi khách đưa thông số (vị trí, diện tích, giá), hãy soạn bài đăng lôi cuốn. Đặc biệt phải có phần "Góc nhìn kỹ thuật từ anh em thợ" (ví dụ: đánh giá về kết cấu, tiềm năng sửa chữa, độ thông thoáng) để tạo lòng tin.
          2. Tư vấn sửa chữa nhà cũ: Gợi ý các hạng mục cần thiết như sơn phết, đi lại điện nước, chống thấm, thay mái... khi khách hỏi về việc mua nhà cũ rồi tân trang.
          3. Lồng ghép hỗ trợ tài chính (Affiliate): Trong các câu trả lời về mua bán nhà đất, hãy khéo léo nhắc: "Nếu quý khách cần hỗ trợ tài chính, tụi em có liên kết với các ngân hàng uy tín để hỗ trợ vay vốn với lãi suất cực tốt, thủ tục nhanh gọn".
          4. Giải đáp kỹ thuật & Pháp lý: Ước tính vật tư, quy trình thi công, giấy phép xây dựng tại TP.HCM.

          Phong cách: 
          - Thân thiện, tin cậy, chân thành.
          - Sử dụng ngôn ngữ bình dân, gần gũi của người Sài Gòn (ví dụ dùng: "dạ", "tụi em", "mình", "quý khách", "anh chị em").
          - Ngắn gọn nhưng đầy đủ ý.
        `,
        temperature: 0.7,
      },
    });
    return response.text || "Dạ, hiện tại em đang bận xíu, quý khách vui lòng thử lại sau nha!";
  } catch (error) {
    console.error("AI Error:", error);
    return "Đã xảy ra lỗi khi kết nối với chuyên gia AI. Quý khách thông cảm nha!";
  }
};

/**
 * Sử dụng Google Maps Grounding để lấy link định vị chính xác từ địa chỉ người dùng nhập
 */
export const getMapLocation = async (address: string, lat?: number, lng?: number): Promise<{ uri: string; title: string } | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Tìm địa chỉ chính xác trên bản đồ cho BĐS tại: ${address}. Trả về link Google Maps chính xác.`,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: lat && lng ? { latitude: lat, longitude: lng } : undefined
          }
        }
      },
    });

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (groundingChunks && groundingChunks.length > 0) {
      // Tìm chunk có chứa thông tin bản đồ
      const mapChunk = groundingChunks.find((chunk: any) => chunk.maps);
      if (mapChunk && mapChunk.maps) {
        return {
          uri: mapChunk.maps.uri,
          title: mapChunk.maps.title || "Vị trí trên Google Maps"
        };
      }
    }
    return null;
  } catch (error) {
    console.error("Map Grounding Error:", error);
    return null;
  }
};
