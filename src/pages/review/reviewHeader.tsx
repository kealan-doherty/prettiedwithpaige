


import Insta from '../../components/links/insta';
import '../../components/links/instaStyle.css';

import Email from '../../components/links/email';
import '../../components/links/emailStyle.css';


const ReviewHeader = () => {
    return(
        <header className='header'>
            
            <div>
                Don't take my word for it!
            </div>
          <div>
            <Insta/>
            <Email/>
          </div>
            
        </header>
    );
}
export default ReviewHeader;