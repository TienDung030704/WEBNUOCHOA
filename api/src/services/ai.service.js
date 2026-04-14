const { Buffer } = require("node:buffer");
const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");
const { gateway, generateText } = require("ai");

const randomString = require("@/utils/randomString");

class AIService {
  constructor() {
    // Setup...
  }

  /**
   * Gọi AI model để sinh văn bản (text generation).
   * @param {string} model - Tên model AI (vd: "openai/gpt-4o")
   * @param {string} prompt - Câu lệnh / nội dung gửi lên model
   * @param {*} output - Định dạng output mong muốn (có thể là schema hoặc undefined)
   * @param {object} tools - Các công cụ bổ trợ model có thể dùng (vd: web search)
   * @returns {string} Văn bản do AI sinh ra
   */
  async generateText(model, prompt, output, tools) {
    const { text } = await generateText({
      model,
      prompt,
      output,
      tools,
    });
    return text;
  }

  /**
   * Tìm kiếm thông tin trên web bằng AI kết hợp Perplexity Search.
   * Sử dụng model GPT-5.2, ưu tiên kết quả tiếng Việt và tiếng Anh trong vòng 1 năm gần nhất.
   * @param {string} prompt - Câu hỏi / nội dung cần tìm kiếm
   * @param {*} output - Định dạng output mong muốn
   * @returns {string} Kết quả tìm kiếm dạng văn bản
   */
  async webSearch(prompt, output) {
    return this.generateText("openai/gpt-5.2", prompt, output, {
      perplexity_search: gateway.tools.perplexitySearch({
        country: "VN",
        searchLanguageFilter: ["vi", "en"],
        searchRecencyFilter: "year",
      }),
    });
  }

  /**
   * Stream phản hồi từ AI theo thời gian thực (chưa implement).
   */
  stream() {
    // ...
  }

  /**
   * Sinh ảnh từ prompt bằng AI, sau đó resize và lưu vào thư mục public/images/.
   * Ảnh được nén sang PNG với compression cao, resize về chiều rộng 400px.
   * @param {string} prompt - Mô tả nội dung ảnh cần tạo
   * @param {string} filePath - Thư mục con bên trong public/images/ để lưu ảnh (mặc định: "ai-generated")
   * @param {string} model - Model AI dùng để sinh ảnh (mặc định: "google/gemini-3-pro-image")
   * @returns {string} Đường dẫn tương đối tới file ảnh đã lưu (vd: "images/ai-generated/abc123.png")
   */
  async generateImage(
    prompt,
    filePath = "ai-generated",
    model = "google/gemini-3-pro-image",
  ) {
    const result = await generateText({
      model,
      prompt,
    });

    if (!result.files.length) {
      throw new Error("No image.");
    }

    const { base64Data, mediaType } = result.files[0];
    const imageBuffer = Buffer.from(base64Data, "base64");
    const imageName = `${randomString(8)}.${mediaType.split("/").pop()}`;
    const dirPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "images",
      filePath,
    );
    const imagePath = path.join(dirPath, imageName);

    await this.createFolderIfNotExists(dirPath);
    await sharp(imageBuffer)
      .resize(400)
      .png({
        compressionLevel: 9,
        adaptiveFiltering: true,
      })
      .toFile(imagePath);

    return path.join("images", filePath, imageName);
  }

  /**
   * Tạo thư mục nếu chưa tồn tại (bao gồm cả các thư mục cha).
   * Không throw lỗi nếu thư mục đã tồn tại.
   * @param {string} folderPath - Đường dẫn tuyệt đối tới thư mục cần tạo
   */
  async createFolderIfNotExists(folderPath) {
    try {
      await fs.mkdir(folderPath, { recursive: true });
    } catch (err) {
      console.error(`Error creating directory: ${err.message}`);
    }
  }
}

module.exports = new AIService();
