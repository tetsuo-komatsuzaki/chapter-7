import './App.css';
import Post from './post';
import Inquiry from './components/inquiry/inquiry';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/detail/detail';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/posts/:id" element={<Detail />} />
      </Routes>

    </div>
  );
}

export default App;
