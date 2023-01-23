import React from "react";
import { MenuList } from "../helpers/MenuList";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div className="menuItem">
              <div>
                <img src={menuItem.image} />
              </div>
              <h3>{menuItem.name}</h3>
              <p>{menuItem.price} TL</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;

// <div className="card">
//   <div class="card-body" style={{ backgroundImage: `url(${BannerImage})`}}></div>
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">
//       Some quick example text to build on the card title and make up the
//       bulk of the card's content.
//     </p>
//   </div>
