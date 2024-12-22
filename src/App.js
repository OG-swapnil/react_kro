import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/carousel';
import Cards1 from './components/Cards/Cards';
import Cards2 from './components/Cards/Cards1';
import Cards3 from './components/Cards/Cards2';
import Cards4 from './components/Cards/Cards3';
import Cards5 from './components/Cards/Cards4';
import Cards6 from './components/Cards/Cards5';
import Cards7 from './components/Cards/Cards6';
import Cards8 from './components/Cards/Cards7';
import Cards9 from './components/Cards/Cards8';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Review from './components/Review';
import { useState } from 'react';
import { addReview } from './functions/addReview';

function App() {
  const [reviews, setReviews] = useState([]);

  // const addReview = (rating, comment) => {
  //     setReviews([...reviews, { rating, comment }]);
  // };
  return (
    <Router>
      <div>
        <Navbar title="GlamCart" />
        <Carousel />
        <div className='container'>
          <Cards1 reviews={reviews} />
          <Cards2 reviews={reviews} />
          <Cards3 reviews={reviews} />
        </div>
        <div className='container'>
          <Cards4 reviews={reviews} />
          <Cards5 reviews={reviews} />
          <Cards6 reviews={reviews} />
        </div>
        <div className='container'>
          <Cards7 reviews={reviews} />
          <Cards8 reviews={reviews} />
          <Cards9 reviews={reviews} />
        </div>
        <div>
          <Review addReview={addReview} />
        </div>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/review" element={<Review />} />
        <Route path="/" exact component={Login} />
      </Routes>
    </Router>
  );
}

export default App;