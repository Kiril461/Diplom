<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    // Якщо у таблиці немає полів created_at і updated_at, додай цю властивість
    // public $timestamps = false;

    // Дозволені для масового заповнення поля
    protected $fillable = [
        'title',
        'author',
        'isbn',
        'category',
        'year',
        'status',
    ];
}
