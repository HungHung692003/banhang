// Lấy các phần tử DOM cần thiết cho giao diện
const chatbotToggler = document.querySelector(".chatbot-toggler"); // Nút mở và đóng chatbot
const closeBtn = document.querySelector(".close-btn"); // Nút đóng chatbot
const chatbox = document.querySelector(".chatbox"); // Khối chứa tin nhắn
const chatInput = document.querySelector(".chat-input textarea"); // Ô nhập tin nhắn
const sendChatBtn = document.querySelector(".chat-input span"); // Nút gửi tin nhắn

let userMessage = null; // Biến lưu trữ tin nhắn người dùng nhập
const inputInitHeight = chatInput.scrollHeight; // Chiều cao ban đầu của khung nhập

// Các câu hỏi và câu trả lời định nghĩa trước
const predefinedAnswers = [
    { question: "Bạn khỏe không?", answer: "Tôi ổn! Cảm ơn vì đã hỏi thăm." },
    { question: "Bạn tên là gì?", answer: "Tôi là chatbot thân thiện của bạn ở đây để giúp đỡ bạn." },
    { question: "Bạn có thể làm gì?", answer: "Tôi có thể cung cấp thông tin, trả lời câu hỏi của bạn và trò chuyện với bạn." }
];

// Hàm được gọi khi người dùng chọn một câu hỏi từ danh sách câu hỏi định sẵn
function selectQuestion(question) {
    chatInput.value = question; // Đặt câu hỏi vào ô nhập tin nhắn
    handleChat(); // Gửi câu hỏi như một tin nhắn
}

// Tìm câu trả lời định nghĩa trước nếu có
const findPredefinedAnswer = (userMessage) => {
    return predefinedAnswers.find(item => item.question.toLowerCase() === userMessage.toLowerCase());
}

// Tạo phần tử <li> cho tin nhắn
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

// Xử lý tin nhắn đầu vào từ người dùng
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = ""; // Xóa nội dung trong ô nhập tin nhắn
    chatInput.style.height = `${inputInitHeight}px`; // Thiết lập lại chiều cao ban đầu cho ô nhập tin nhắn

    // Hiển thị tin nhắn người dùng đã gửi
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Kiểm tra xem có câu trả lời định nghĩa trước không
    const predefinedAnswer = findPredefinedAnswer(userMessage);
    if (predefinedAnswer) {
        // Nếu có, hiển thị câu trả lời định nghĩa trước
        setTimeout(() => {
            const incomingChatLi = createChatLi(predefinedAnswer.answer, "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
    } else {
        // Nếu không, hiển thị tin nhắn "Đang suy nghĩ..."
        setTimeout(() => {
            const incomingChatLi = createChatLi("Đang suy nghĩ...", "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
    }
}

// Điều chỉnh chiều cao của ô nhập tin nhắn khi người dùng nhập
chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`; // Thiết lập lại chiều cao ban đầu
    chatInput.style.height = `${chatInput.scrollHeight}px`; // Tăng chiều cao khi cần thiết
});

// Gửi tin nhắn khi người dùng nhấn phím Enter (không nhấn Shift) trên bàn phím
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); // Ngăn chặn hành động mặc định của phím Enter
        handleChat(); // Gửi tin nhắn
    }
});

// Cài đặt sự kiện cho các nút bấm
sendChatBtn.addEventListener("click", handleChat); // Sự kiện khi nhấn nút gửi tin nhắn
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot")); // Sự kiện khi nhấn nút đóng chatbot
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot")); // Sự kiện khi nhấn nút mở và đóng chatbot
