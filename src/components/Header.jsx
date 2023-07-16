import React,{useState} from "react";
import { Link } from 'react-router-dom';


function Header(props) {

 const [btnState, SetBtnState] = useState(false);

 
function handleClick(){
  SetBtnState(btnState => !btnState);
}
function closeButton(){
  SetBtnState(btnState=>!btnState);
}
 
let OnClick = btnState ? ' active': '';


  return (
    <>
      <div className="first-section">
        <div className="nav-div">
          <div>
            <h1>LUFFY</h1>
          </div>
          <div className="nav-right">
            <ul>
            <Link to="/"> <li>Home</li></Link>
              
            <Link to="/about"><li>About</li></Link>

                <li>Blog</li>

            
                <Link to="/contact">  <li>Contact</li></Link>

              <li>
                <i className="fa-solid fa-magnifying-glass"></i>
              </li>
              <li>
                <i className="fa-solid fa-bars bg_menu" id="bg_menu"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="for-main-logo">
          <h1>
            {props.logo} 
          </h1>
          <div className="for-ds1"></div>
        </div>

        <div className="icon" >
            <i onClick={handleClick} className="fa-solid fa-bars"></i>
        </div>

        <div className="traingle">
          <img  src="./assets/images/obj_triangle.png" alt="" />
        </div>
      </div>
      {/* <!-- navbar-for-phone --> */}

      <div>
        <div className={`side${OnClick}`} id="side">
          <div className="side_nav_logo">
            <div>
              <h1>LuuFfy</h1>
            </div>
            <div>
              <img onClick={closeButton} id="close" src="./assets/images/pngegg.png" alt="" />
            </div>
          </div>
          <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about">  <li>About</li></Link>
          <Link to="/contact"> <li>Contact</li></Link>
          <Link to="/"> <li>Blog</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
