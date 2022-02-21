import { withStyles } from "@material-ui/core";
import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../helpers";
import styles from "./styles";

function SidebarItem() {
  return <div> Hello from SidebarItem</div>;
}

export default withStyles(styles)(SidebarItem);
