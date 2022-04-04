import React from "react";
import { useEmail } from "../../Context/emailContext";
import "./emailList.css";

const EmailList = ({ emails }) => {
  const { getSingleEmail, emailView, singleEmail } = useEmail();
  return (
    <>
      <section
        className={emailView ? "divide-email-container" : "email-container"}
        onClick={() => getSingleEmail(emails.id)}
      >
        <h2 className="email-avatar">F</h2>
        <div className="email-body">
          <p className="email-from">From: {emails.from.email}</p>
          <p className="email-sub">Subject: {emails.subject} </p>
          <p>Description: {emails.short_description} </p>
          <p>
            {new Date(parseInt(emails.date)).toLocaleString(undefined, {
              timeZone: "Asia/Kolkata",
            })}
          </p>
        </div>
      </section>
    </>
  );
};

export default EmailList;
