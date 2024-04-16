<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatbotController extends Controller
{
    public function index()
    {
        return view('client.chatbot.chat_bot'); // Trả về view chứa chatbot
    }
}
