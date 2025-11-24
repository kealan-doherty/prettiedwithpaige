
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/home/homePage';
import ReviewPage from './pages/review/reviewPage';

function App() {
 
  return (
    <>
        <Router>
          <Routes>
              <Route path ="/" element={<HomePage />} />
              <Route path="/review" element={<ReviewPage />} />
              <Route path ="/addReview"/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
