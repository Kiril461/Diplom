# Library Website

Сайт-візитка для бібліотеки, що надає інформацію про бібліотеку, каталог книг, новини та форму зворотного зв’язку.

## Вимоги
- Node.js (16+)
- PHP (8.1+)
- MySQL (8.0+)
- Docker (опціонально)

## Встановлення
1. Клонуйте репозиторій:
   ```bash
   git clone https://github.com/yourusername/library-website.git
   cd library-website
   cd frontend
npm install
npm start
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
docker-compose up -d
