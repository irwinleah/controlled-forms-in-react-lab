// src/App.jsx
import './App.css';
import Bookshelf from './components/Bookshelf/Bookshelf.jsx';
import BookStyle from './components/Bookshelf/bookshelf.css';

const App = () => {
  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
      <BookStyle />
    </>
  );
};

export default App;
