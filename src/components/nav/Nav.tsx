import { useState, useEffect } from "react";
import './NavStyle.css'

export const Nav = () => {
  const [menu, setMenu] = useState([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "menu";

  const getMenu = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setMenu(data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  // const ul = {
  //   display: 'flex',
  //   background: 'green',
  //   justifyContent: 'space-between',
  //   TextDecoration: 'none'
  // }
  // const li = {
  //   color: 'red',
  //   TextDecoration: 'none'
  // }
  
  return (
    <div className="header">
      <div>Logo</div>
      <ul className="ul">
        {menu.map((menu: any) => (
          <li key={menu.id} className="li">
            <a href="">{menu.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
