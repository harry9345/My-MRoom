import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: 500,
    color: "#fff",
    backgroundColor: "#c8922b",
    cursor: "pointer",
    padding: "13px 30px",
    textTransform: "uppercase",
    textDecoration: "none",
    outline: "none",
    position: "relative",
    overflow: "hidden",
    border: "none",
    borderRadius: "2px",
    transition: "all .25s cubic-bezier(.19,1,.22,1)",
  },
};
function BUtton(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children || "submit"}
    </Button>
  );
}

BUtton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(BUtton);
