import Styles from './Header.module.css';

const Header = ({title}) => (
      <div className={Styles.HeaderWrapper}  >{title} 
    </div>
);

export default Header;