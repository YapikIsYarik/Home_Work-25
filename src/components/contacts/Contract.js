
import './contracts.css'
import maleIcon from '../../assets/img/male.png'
import femaleIcon from '../../assets/img/female.png'
import contactIcon from '../../assets/img/contacts-icon-png-14.jpg'
import {Link, useParams} from "react-router-dom";

function Contract(item) {

    const contact = item;
    const genderIcon = {
        male: maleIcon,
        female: femaleIcon,
        unknown: '',
    }
    return (
        <div>
            <Link to={`contacts/${contact.item.firstName}  ${contact.item.lastName}/${contact.item.id}`} >
                <div className="contract__item">
                    <img className='contact__icon' src={contactIcon} alt="people-icon"/>
                    <div className="contact__body">
                        <div className="contact__name">{contact.item.firstName} {contact.item.lastName} </div>
                        <div className="contact__phone"> {contact.item.phone}</div>
                    </div>
                    <div className="contact__gender">
                        <img className='gender__icon' src={genderIcon[`${contact.item.gender}`]} alt=""/>
                    </div>
                </div>
            </Link>
        </div>
    );

}

export default Contract;