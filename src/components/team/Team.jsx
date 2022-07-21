import React from "react";
import "./team.css";
import zidane from "../../assets/zidane.jpg";
import linkedin from "../../assets/linkedin.png";
import medium from "../../assets/medium.png";
import facebook from "../../assets/facebook@2x.png";
import toni from "../../assets/tonikroos.jpg";
import iker from "../../assets/ikercasillas.jpg";
import james from "../../assets/james.jpg";
import chris from "../../assets/christiano.jpg";
import { FiDribbble } from "react-icons/fi";
import { AiOutlineBehance } from "react-icons/ai";

const Team = () => {
  return (
    <div className="team">
      <p className="slogan">{`Without bonding and coordination, every project is a failure. Look at who makes KICKSUP great ;)`}</p>
      <div className="profile__container">
        <div className="profile card">
          <img src={zidane} alt="" className="photo" />
          <h2 className="name">Zidane</h2>
          <p className="designation">{`Leadership & management`}</p>
          <div className="profile__socials">
            <img src={linkedin} alt="linkedin" className="icons" />
            <img src={medium} alt="medium" className="icons" />
            <img src={facebook} alt="facebook" className="icons" />
          </div>
        </div>
        <div className="profile card">
          <img src={toni} alt="" className="photo" />
          <h2 className="name">Toni Kroos</h2>
          <p className="designation">{`Product developer`}</p>
          <div className="profile__socials">
            <img src={linkedin} alt="linkedin" className="icons" />
            <img src={medium} alt="medium" className="icons" />
          </div>
        </div>
        <div className="profile card">
          <img src={iker} alt="" className="photo" />
          <h2 className="name">Iker Casillas</h2>
          <p className="designation">{`Marketing strategy`}</p>
          <div className="profile__socials">
            <img src={medium} alt="medium" className="icons" />
          </div>
        </div>
        <div className="profile card">
          <img src={james} alt="" className="photo" />
          <h2 className="name">James</h2>
          <p className="designation">{`Product designer`}</p>
          <div className="profile__socials">
            <img src={medium} alt="medium" className="icons" />
            <FiDribbble size={28} style={{ color: "#ea4c89" }} />
            <AiOutlineBehance
              size={28}
              style={{ color: "#fff", background: "#053eff" }}
            />
          </div>
        </div>
        <div className="profile card">
          <img src={chris} alt="" className="photo" />
          <h2 className="name">Christiano</h2>
          <p className="designation">{`Financial operations`}</p>
          <div className="profile__socials">
            <img src={linkedin} alt="linkedin" className="icons" />
            <img src={facebook} alt="facebook" className="icons" />
          </div>
        </div>
      </div>
      <h3 style={{ textAlign: "center" }}>{`and You! ;)`}</h3>
    </div>
  );
};

export default Team;
