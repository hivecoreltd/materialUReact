import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    width: 250,
    height: 180
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div style={{
          width: "90%"  
        }

        }>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom noWrap
          >
            <h1>{item.title}</h1>
          </Typography>
        </div>

        {/* <Typography variant="h5" component="h2">
         lorem
        </Typography> */}
        {/* <Typography className={classes.pos} color="textSecondary">
          
        </Typography> */}
        <Typography variant="body2" component="p" noWrap>
          {item.body}
        </Typography>
      </CardContent>

      <CardActions>
        <Button component={Link} to="/about/item" size="small">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
OutlinedCard.propTypes = {
  item: PropTypes.object,
};
