
import { GoogleGenAI } from "@google/genai";

export const askConstructionAi = async (prompt: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `
          Bạn là "Chuyên gia LIÊN MINH THẦU THỢ SÀI GÒN 24/7". 
          Nhiệm vụ của bạn là tư vấn cho khách hàng và nhà thầu về:
          1. Ước tính vật tư xây dựng.
          2. Quy trình thi công đúng kỹ thuật.
          3. Tư vấn chọn thợ/thầu phù hợp tại khu vực TP.HCM.
          4. Giải đáp các thắc mắc về pháp lý xây dựng tại Việt Nam.
          Hãy trả lời bằng tiếng Việt, thân thiện, chuyên nghiệp và ngắn gọn.
        `,
        temperature: 0.7,
      },
    });
    return response.text || "Xin lỗi, tôi không thể xử lý yêu cầu lúc này.";
  } catch (error) {
    console.error("AI Error:", error);
    return "Đã xảy ra lỗi khi kết nối với chuyên gia AI.";
  }
};
