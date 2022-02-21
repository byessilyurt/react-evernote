import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItem from "../sidebarItem/SidebarItem";

function Sidebar({ classes, notes, selectedNoteIndex, ...props }) {
  const [addingNote, setAddingNote] = React.useState(false);
  const [title, setTitle] = React.useState(null);
  const newNoteBtnClick = () => {
    setAddingNote((prev) => !prev);
    setTitle(null);
  };
  const newNote = () => {
    props.newNote(title);
    setAddingNote(false);
    setTitle(null);
  };
  const selectNote = (n, i) => props.selectNote(n, i);
  const deleteNote = (note) => props.deleteNote(note);
  const updateTitle = (txt) => setTitle(txt);
  return (
    <div className={classes.sidebarContainer}>
      <Button onClick={newNoteBtnClick} className={classes.newNoteBtn}>
        {addingNote ? "Cancel" : "New Note"}
      </Button>
      {addingNote ? (
        <div>
          <input
            className={classes.newNoteInput}
            placeholder="Enter a title..."
            onKeyUp={(e) => updateTitle(e.target.value)}
          ></input>
          <Button className={classes.newNoteSubmitBtn} onClick={newNote}>
            Submit Note
          </Button>
        </div>
      ) : null}
      <List>
        {notes?.map((_note, _index) => {
          return (
            <div key={_index}>
              <SidebarItem
                _note={_note}
                _index={_index}
                selectedNoteIndex={selectedNoteIndex}
                selectNote={selectNote}
                deleteNote={deleteNote}
              ></SidebarItem>
              <Divider></Divider>
            </div>
          );
        })}
      </List>
    </div>
  );
}

export default withStyles(styles)(Sidebar);
