import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import style from './GoBackButton.module.scss';

const GoBackButton = ({ backLinkHref }) => {
  return (
      <div className={style.container}>
       <Link to={backLinkHref} className={style.link}>
        <BsArrowLeftShort size={20} /> 
          Go back
      </Link> 
    </div>
  );
};

export default GoBackButton;