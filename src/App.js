import "./App.css";
import Footer from "../src/Component/Footer/Footer";
import { getRepo,getBrands } from './Services/Servis'
import NavBar from "../src/Component/NavBar/NavBar";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, Switch } from "react-router-dom";
import About from "../src/Pages/About";
import { Navbar } from "../src/Context/NavbarProvider"
import { TitelContext } from "../src/Context/titelContext"
import { ViewlistContext } from "../src/Context/viwelistContext"
import React from "react"
import AddItem from "../src/Pages/AddItem";
import Brand_detail from "../src/Pages/brand_detail";
import Brand_view from "../src/Pages/brand_view";
import Category_view from "../src/Pages/category_view";
import Brand_add from "../src/Pages/brand_add";
import Category_add from "../src/Pages/category_add";
import Category_detail from "../src/Pages/category_detail";
import ResponsiveDrawer from "../src/Component/Drawer/ResponsiveDrawer";
import {
  useHistory,
    useParams
  } from "react-router-dom";
import Product_view from "./Pages/product_view";
import Product_add from "./Pages/product_add";
import Product_Detail from "./Pages/product_detail";



function App() {
  let history = useHistory()
  const [titel, setTitel] = React.useContext(TitelContext);
  const [viewlist, setViewList] = React.useContext(ViewlistContext)
  let route = [
    {
      routename: "Brand", icon: <MenuIcon />, onclickf: async() => {
        setTitel(' Brand')
        history.push('/brand')
      }, path: "/brand"
    },
    {
      routename: "Category", icon: <MenuIcon />, onclickf: async() => {
        setTitel(' Category')
        history.push('/category')
      }, path: "/brand"
    },
    {
      routename: "Product", icon: <MenuIcon />, onclickf: async() => {
        setTitel(' Product')
        history.push('/product')
      }, path: "/"
    }
  
  ]
  const [Nav, setNav] = React.useContext(Navbar)




  return (
    <div>



      <NavBar />



      <div className="Parent">
        {Nav && (
          <div
            className="OneSide"
            style={{
              flex: "2",
            }}
          >
            <Navbar.Provider value={[Nav, setNav]}>
              {route.children}
              <ResponsiveDrawer routes={route} />
            </Navbar.Provider>

          </div>
        )}
        <div
          className="OtherSide"
          style={{
            paddingTop: "",
            flex: Nav ? "8" : 12,
          }}
        >
          <Switch>
            {/* <Route path="/addrem/:in?" component={() => <AddItem />} />
            <Route path="/display/:in?" component={() => <Display />} />
            <Route exact path="/" component={() => <ViewList />} />
            <Route path="/about/:in?" component={About} /> */}
            <Route path="/brand/detail/:brandname?" component={Brand_detail} />
            <Route exact path="/brand" component={Brand_view} />
            <Route exact  path="/brand/add" component={Brand_add} />
            <Route path="/categroy/detail/:categoryid?" component={Category_detail} />
            <Route path="/product/detail/:productid?" component={Product_Detail} />
            <Route exact path="/category" component={Category_view} />
            <Route exact  path="/category/add" component={Category_add} />
            <Route exact  path="/product/add" component={Product_add} />
            <Route exact  path="/product" component={Product_view} />
          </Switch>


        </div>
      </div>

      {/* <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab> */}

      {/* <AddRem/> */}

      <Footer></Footer>
    </div>
  );
}

export default App;
