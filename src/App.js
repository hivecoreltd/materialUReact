import "./App.css";
import Footer from "../src/Component/Footer/Footer";
import NavBar from "../src/Component/NavBar/NavBar";
import ViewList from "../src/Component/ViewList/ViewList";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, Switch } from "react-router-dom";
import About from "../src/Pages/About";
import Home from "../src/Pages/Home";
import SearchBar from "../src/Component/SearchBar/SearchBar";

// import ResponsiveDrawer from "../src/Component/TestDrawer/TestDrawer"
import ResponsiveDrawer from "../src/Component/Drawer/ResponsiveDrawer";
import { grey } from "@material-ui/core/colors";
import SearchAppBar from "../src/Component/NavBar/NavBar";

function App() {
  let route = [
    { routename: "one", icon: <MenuIcon />, path: "/hjj" },
    { routename: "t", icon: <MenuIcon />, path: "/hjj" },
    { routename: "three", icon: <MenuIcon />, path: "/hjj" },
  ];
  
  let items = [
    { name: "one", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuuiryweuor urghweuorb burwghrwe uwghruoiweh" },
    { name: "two", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "three", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "on1e", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one2", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one98", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one874", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one8", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one94", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one45", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one41", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one15", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one59", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one63", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one485", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one45", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one44", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one88", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one46", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one48", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one84", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one989", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one8", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "oneklk", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one8274", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one44", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one88", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one46", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one48", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one84", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one989", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one8", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "oneklk", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one8274", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one44", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one88", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one46", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one48", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one84", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one989", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one8", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "oneklk", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one8274", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one48", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one84", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one989", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one8", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "oneklk", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    { name: "one8274", description:"abghfjhjkgvmk ygfughuh 7huytuy8huiyuh" },
    
  ];

  let flag = false; //toggle drawer

  return (
    <div>
      {/* <SearchBar></SearchBar> */}

      <NavBar></NavBar>

      <div className="Parent">
        {flag && (
          <div
            className="OneSide"
            style={{
              flex: "2",
            }}
          >
            <ResponsiveDrawer routes={route} />
          </div>
        )}
        <div
          className="OtherSide"
          style={{
            paddingTop: "",
            flex: flag ? "8" : 12,
          }}
        >
          <Switch>
            <Route exact path="/" component={()=><ViewList items={items} />} />
            <Route path="/about" component={About} />  
          </Switch>
          
       
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
