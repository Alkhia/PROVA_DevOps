import React, { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://api:5000/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Erro ao buscar livros:', err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Livros</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>ISBN</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Páginas</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.pages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;