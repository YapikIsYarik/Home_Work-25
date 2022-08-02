import React, {Component} from 'react';
import './imgPage.css'
import image1 from '../../assets/img/1.jpg'
import image2 from '../../assets/img/2.jpg'
import image3 from '../../assets/img/3.jpg'
import image4 from '../../assets/img/4.jpg'
import image5 from '../../assets/img/5.jpg'
import image6 from '../../assets/img/6.jpg'
import image7 from '../../assets/img/7.jpg'
import image8 from '../../assets/img/8.jpg'
import image9 from '../../assets/img/9.jpg'
import image10 from '../../assets/img/10.jpg'
import image11 from '../../assets/img/11.jpg'
import image12 from '../../assets/img/12.jpg'
import image13 from '../../assets/img/13.jpg'
import image14 from '../../assets/img/14.jpg'
import image15 from '../../assets/img/15.jpg'
class ImgPage extends Component {
    render() {
        return (
            <div>
                <div className="gallery-container">
                    <div className="gallery">
                        <div className="gallery__column">
                            <img className='gallery__item' src={image1} alt=""/>
                            <img className='gallery__item' src={image2} alt=""/>
                            <img className='gallery__item'src={image3} alt=""/>
                        </div>
                        <div className="gallery__column">
                            <img className='gallery__item' src={image4} alt=""/>
                            <img className='gallery__item' src={image5} alt=""/>
                            <img className='gallery__item' src={image6} alt=""/>
                            <img className='gallery__item' src={image7} alt=""/>
                            <img className='gallery__item' src={image8} alt=""/>
                            <img className='gallery__item'src={image9} alt=""/>
                        </div>
                        <div className="gallery__column">
                            <img className='gallery__item' src={image11} alt=""/>
                            <img className='gallery__item' src={image12} alt=""/>
                            <img className='gallery__item' src={image13} alt=""/>

                            <img className='gallery__item' src={image10} alt=""/>
                        </div>
                        <div className="gallery__column">
                            <img className='gallery__item' src={image14} alt=""/>
                            <img className='gallery__item' src={image15} alt=""/>
                        </div>



                    </div>
                </div>


            </div>
        );
    }
}

export default ImgPage;