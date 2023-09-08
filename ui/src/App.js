// import logo from './logo.svg';
import './App.css';

function App() {
  const movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
