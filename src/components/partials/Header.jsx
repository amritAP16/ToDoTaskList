import React from "react";

const Header = (props) => {

  const username = props.data?.firstName || "Admin";

  const logOutUser =()=>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }
  
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
          Hello <br /> <span className="text-3xl font-semibold">{username} ✋</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-500 text-lg font-medium text-white py-3 px-5 rounded-md">Log Out</button>
    </div>
  );
};

export default Header;
