import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

const EmailContext = createContext();

const EmailProvider = ({ children }) => {
  const [emailList, setEmailList] = useState([]);
  const [emailView, setEmailView] = useState(false);
  const [singleEmail, setSingleEmail] = useState("");

  const getEmails = async () => {
    try {
      const response = await axios.get("https://flipkart-email-mock.now.sh/");
      setEmailList(response.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleEmail = async (id) => {
    try {
      const response = await axios.get(
        `https://flipkart-email-mock.now.sh/?id=${id}`
      );
      setSingleEmail(response.data.body);
      setEmailView(true);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <EmailContext.Provider
      value={{
        getEmails,
        emailList,
        setEmailList,
        getSingleEmail,
        emailView,
        setSingleEmail,
        singleEmail,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};

const useEmail = () => useContext(EmailContext);

export { useEmail, EmailProvider };
