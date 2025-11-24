
import Header from '../../components/Header/Header';
import Body from'../../components/body/body';
import Footer from '../../components/footer/footer';

import '../../components/body/bodyStyle.css';
import '../../components/Header/HeaderStyle.css';
import '../../components/footer/footerstyle.css';
import '../../components/links/instaStyle.css';
import Insta from '../../components/links/insta';
import Email from '../../components/links/email';
import '../../components/links/emailStyle.css';
import '../../pages/review/reviewPageStyle.css';
import './homePageStyle.css';
import ReviewLink from '../../components/links/reviewLink';'../../components/links/reviewLink';
import '../../components/links/reviewLinkStyle.css';


const HomePage = () => {
    return(
        <>
            <Header />
            <div className = 'links'>
                <Insta />
                <Email />
                <ReviewLink />
            </div>
            <Body />
            <Footer />
        </>
    );
}

export default HomePage;