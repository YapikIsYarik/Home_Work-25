
import './homePage.css'
import SocNetImg from '../../assets/img/social_collaboration_map.jpg'
function HomePage () {


        return (
            <div>
                <div className="home-page__container">
                    <h1 className='home-page__title'>Social Network</h1>
                    <p className='home-page__sub-title'>
                        A social network is a website that allows people with similar interests to come together and share information, photos and videos.
                    </p>
                    <img src={SocNetImg} alt=""/>
                </div>



            </div>
        );

}

export default HomePage;