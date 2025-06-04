import { useState, useEffect } from 'react';
import axios from 'axios';

function Catalog() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Каталог книг</h2>
      <input
        type="text"
        placeholder="Пошук за назвою чи автором"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredBooks.map(book => (
          <div key={book.id} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p>Автор: {book.author}</p>
            <p>Статус: {book.status}</p>
            <a href={`/book/${book.id}`} className="text-blue-600 hover:underline">Детальніше</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
