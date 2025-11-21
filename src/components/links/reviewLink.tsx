import react from 'react';
import { Link } from 'react-router-dom';
import './instaStyle.css';


const ReviewLink = () => {
    return(
        <div className='reviewlink'>
            <Link to="/review" >Reviews</Link>
        </div>
    );
}

export default ReviewLink;