// import logo from './logo.svg';
import './App.css';
import MovieList from "./MovieFetch"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
    </Routes>
    // <div>
    //   <ul>
    //     {movies.map((movie) => (
    //       <li key={movie.title}>{movie.title}</li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default App;
