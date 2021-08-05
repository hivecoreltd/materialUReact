import React, { useState, useEffect } from "react";
import OutlinedCard from "../Component/Cards/Cards";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import "./ViewList.css";
import SearchIcon from "@material-ui/icons/Search";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { getBrands } from "../Services/Servis"
import { ViewlistContext } from "../Context/viwelistContext";
import {
  useHistory,
  useParams
} from "react-router-dom";

export default function Brand_view({ items }) {
  let history = useHistory();

  const [viewlist, setViewList] = React.useContext(ViewlistContext)
  const [searchValue, setsearchValue] = useState("")
  const [views, setviews] = useState(viewlist)




  useEffect(() => {
    // console.log("hello", searchValue);
    if (viewlist.length) {
      let tviews = viewlist.filter(x => x.name.includes(searchValue))
      setviews(tviews)
    }

  }, [searchValue])


  useEffect(async () => {
    let res = await getBrands();
    console.log(res);
    if (res.data.length) { setViewList(res.data); setviews(res.data) }

  }, [])


  const handelAddbutton = async () => {
    console.log("buhi nah");
    history.push('/brand/add')
  }


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
                <OutlinedCard item={item1} actionpath={`/brand/detail/${item1.name}`}></OutlinedCard>
              </Grid>
            );
          })}
        </Grid>

      </div>}



    </div>
  );
}
