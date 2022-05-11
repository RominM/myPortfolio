import './style/sass/main.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './views/Home';

function App() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </div>
   );
}

export default App;
