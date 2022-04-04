import React from "react";
import { useEffect } from "react";
import { useEmail } from "../../Context/emailContext";
import EmailList from "../EmailList/emailList";
import "./navbar.css";

const Navbar = () => {
  const {
    emailList,
    setEmailList,
    getEmails,
    getSingleEmail,
    emailView,
    singleEmail,
  } = useEmail();

  useEffect(() => {
    getEmails();
  }, [emailList]);
  return (
    <main className="main-container">
      <header>
        <section className="header-section">
          <h2>Filter By: </h2>
          <button className="filter-btn">Unread</button>
          <button className="filter-btn read-btn">Read</button>
          <button className="filter-btn">Favorites</button>
        </section>
      </header>

      {emailList.map((emails) => {
        return <EmailList emails={emails} />;
      })}

      <div>
        {emailView && (
          <div className="email-right-container">
            <h2 className="email-avatar">F</h2>
            <div className="email-right-inner-container">
              <h2 style={{ fontWeight: "700" }}>Lorem Ipsum</h2>
              <button className="favorite-btn">Mark as Favorite</button>
              <p className="email-txt">{singleEmail}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Navbar;
