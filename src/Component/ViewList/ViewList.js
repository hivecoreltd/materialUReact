import React, { useState, useEffect } from "react";
import OutlinedCard from "../Cards/Cards";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import "./ViewList.css";
import SearchIcon from "@material-ui/icons/Search";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { getRepo } from "../../Services/Servis"
import { ViewlistContext } from "../../Context/viwelistContext";

export default function ViewList({ items }) {

  const [viewlist, setViewList] = React.useContext(ViewlistContext)
  const [searchValue, setsearchValue] = useState("")
  const [views, setviews] = useState(viewlist)

  //api fetch axios

  // useEffect(async () => {
  //   let res = await getRepo();

  //   if (res.length) setviews(res)
  //   return "abc"


  // },
  //   [])


  useEffect(() => {
    // console.log("hello", searchValue);
    if (viewlist.length) {
      let tviews = viewlist.filter(x => x.title.includes(searchValue))
      setviews(tviews)
    }

  }, [searchValue])


  const handelAddbutton = async () => {
    
  }

  // useEffect(() => {

  // }, [])
  return (
    <div>
      <div
        style={{
          width: "100%",
          disply: "flex",
        }}
      >

        <Grid container spacing={1} alignItems="flex-end" style={{ justifyContent: "center", marginBottom: "10px", marginTop: "10px" }}>
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" placeholder="Search" onChange={(event) => setsearchValue(event.target.value)} />
          </Grid>

        </Grid>

      </div>
      <div className="bttn">
        <Fab color="primary" aria-label="add" onClick={() => handelAddbutton()}>
          <AddIcon />
        </Fab>
      </div>

      {views.length && <div className="Cards" style={{ magrinTop: "10px" }}>
        <Grid container justify="center" spacing={2} wrap="wrap">
          {views.map((item1, index) => {
            return (
              <Grid item key={index}>
                <OutlinedCard item={item1}></OutlinedCard>
              </Grid>
            );
          })}
        </Grid>

      </div>}



    </div>
  );
}
