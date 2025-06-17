<?php
namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function store(Request $request)
    {
        // Валідація вхідних даних
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        // Створення запису з валідованих даних
        Feedback::create($validatedData);

        // Повернення відповіді про успішне створення
        return response()->json(['message' => 'Feedback submitted successfully'], 201);
    }
}
