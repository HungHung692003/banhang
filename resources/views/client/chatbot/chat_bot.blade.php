<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>Chatbot</title>
    <link rel="stylesheet" href="{{ asset('chat_bot_client/css/style.css') }}"> <!-- Đường dẫn tới file CSS -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Liên kết Google Fonts cho biểu tượng -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
    <script src="{{ asset('chat_bot_client/js/script.js') }}" defer></script> <!-- Đường dẫn tới file JavaScript -->
</head>

<body>
    <!-- Nút mở chatbot -->
    <button class="chatbot-toggler">
        <!-- Biểu tượng cho chế độ chatbot -->
        <span class="material-symbols-rounded">mode_comment</span>
        <!-- Biểu tượng cho việc đóng chatbot -->
        <span class="material-symbols-outlined">close</span>
    </button>

    <!-- Khối chatbot -->
    <div class="chatbot">
        <!-- Tiêu đề chatbot -->
        <header>
            <h3>Chatbot</h3>
            <!-- Nút đóng chatbot -->
            <span class="close-btn material-symbols-outlined">close</span>
        </header>

        <!-- Khối chứa tin nhắn -->
        <ul class="chatbox">
            <!-- Tin nhắn đầu tiên từ chatbot -->
            <li class="chat incoming">
                <!-- Biểu tượng của chatbot -->
                <span class="material-symbols-outlined">smart_toy</span>
                <!-- Nội dung của tin nhắn -->
                <p>Xin chào, Bạn cần giúp gì?</p>
            </li>
        </ul>

        <!-- Danh sách câu hỏi thường gặp -->
        {{-- <div class="predefined-questions">
            <h4>Câu hỏi thường gặp:</h4>
            <ul>
                <!-- Câu hỏi thứ nhất -->
                <li onclick="selectQuestion('Bạn khỏe không?')">Bạn khỏe không?</li>
                <!-- Câu hỏi thứ hai -->
                <li onclick="selectQuestion('Bạn tên là gì?')">Bạn tên là gì?</li>
                <!-- Câu hỏi thứ ba -->
                <li onclick="selectQuestion('Bạn có thể làm gì?')">Bạn có thể làm gì?</li>
            </ul>
        </div> --}}

        <!-- Khối nhập tin nhắn -->
        <div class="chat-input">
            <!-- Ô nhập tin nhắn -->
            <textarea placeholder="Nhập tin nhắn..." spellcheck="false" required></textarea>
            <!-- Nút gửi tin nhắn -->
            <span id="send-btn" class="material-symbols-rounded">send</span>
        </div>

    </div>
</body>



</html>

</div>
