import React from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { dbRef } from "../../firebase";
import { useEffect } from "react";
const YourJournal = () => {
  useEffect(() => {
    get(child(dbRef, `journals/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(Object.values(snapshot.val()));
          // console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <div></div>;
};

export default YourJournal;
