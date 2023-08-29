import "./Header.css";
import clickIcon from "../../assets/icons/Icon.svg";

const Header = () => {
   return (
      <>
         <span className="header_title">Покемоны API</span>
         <div className="header_info">
            <img src={clickIcon} alt="image for click"></img>
            <span>
               Нажмите на <br></br>нужное Покемона
            </span>
         </div>
      </>
   );
};

export { Header };
