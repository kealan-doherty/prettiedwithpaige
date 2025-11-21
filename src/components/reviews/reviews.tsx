import react from 'react';
import { PiPlaceholder } from 'react-icons/pi';


//review form db will need to be on aws
const ReviewForm = () => {
    return(
        <form>
            <input type = 'name' placeholder = 'Please Enter your name here!'></input>
            <select id = 'stars'>
                <option value = '5'> 5 stars</option>
                <option value = '4'> 4 stars</option>
                <option value = '3'> 3 stars</option>
                <option value = '2'> 2 stars</option>
                <option value = '1'> 1 stars</option>
            </select>

            <input id = 'review' placeholder='Leave your review here!'></input>
            
            <input type = 'submit'> submit </input>
        </form>
    );

}


export default ReviewForm;