import { useState, useEffect } from "react";
import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; //v9
import Sidebar from "./sidebar/Sidebar";
import Editor from "./editor/Editor";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((snapshot) => {
        const notes = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        console.log(notes);
        setNotes(notes);
      });
  }, []);

  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <Editor> </Editor>
    </div>
  );
}

export default App;
