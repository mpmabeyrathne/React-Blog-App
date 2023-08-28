import React from "react";
import edit from "../img/edit.png"
import delet from "../img/delete.png"

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <div className="user">
          <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <div className="info">
            <span>Pasindu</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <img src={edit}/>
            <img src={delet}/>
          </div>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Single;
