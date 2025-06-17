<?php
namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    // Повертає список усіх книг
    public function index()
    {
        return response()->json(Book::all(), 200);
    }

    // Показує конкретну книгу за ID або повертає 404, якщо не знайдено
    public function show($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        return response()->json($book, 200);
    }
}
