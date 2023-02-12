import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Route path="/" component={HomePage} exact />
      </BrowserRouter>
  )
}

export default App;
