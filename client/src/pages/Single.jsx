import React from "react";
import edit from "../img/edit.png";
import delet from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

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
            <Link to="/write?edit=2">
              <img src={edit} />
            </Link>

            <img src={delet} />
          </div>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
          deserunt? Omnis, repellendus? Corporis in rem repudiandae nesciunt
          adipisci corrupti minus explicabo, obcaecati soluta quisquam mollitia,
          fuga, sunt praesentium nihil Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Mollitia adipisci esse beatae minima illum, <br />
          exercitationem incidunt rem veniam nemo in libero repudiandae quidem,
          autem corporis, ad explicabo sapiente officiis possimubr <br />
          <br />
          s. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          omnis porro doloribus facilis cum repellendus eveniet alias
          perferendis, saepe quisquam repudiandae voluptatum, architecto in
          deleniti quae magni accusantium, praesentium voluptatem.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
