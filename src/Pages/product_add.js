import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import { Button, Fab, Grid, TextField } from '@material-ui/core';
import { addBrand, addProduct, getBrands, getCategories, updateBrand } from "../Services/Servis"
import ReactDOM from "react-dom";
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import {
    useHistory,
    useParams
} from "react-router-dom";

import "./Display.css";
import { productf } from '../Context/productstruct';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { addcategory } from "../Services/Servis";

const useStyles = makeStyles((theme) => ({
    formControl: {

        minWidth: 150,
        margin: "5px"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    space:
    {
        margin: "5px"
    }
}));
function Product_add() {
    const classes = useStyles();

    let history = useHistory();

    const [name, setEname] = React.useState("")
    const [sku, setsku] = React.useState("")
    const [brand, setb] = React.useState("")
    const [category, setc] = React.useState("")
    const [product, setProduct] = React.useState(productf)
    const [categroyList, setCList] = React.useState([])
    const [categoryP, setCp] = React.useState("")
    const [categoryP1, setCp1] = React.useState([])
    const [brandList, setBList] = React.useState([])
    // const [brandname, setbrandname] = React.useState("")



    const handelProductbrandChange = async (e) => {
        console.log(e.target.value);
        let pd = brandList.filter(c => c.name == e.target.value)
        let pp = product
        pp.brand = pd[0].name
        pp.brandId = pd[0]._id
        setProduct(pp)
        setb(pd[0].name)
        console.log(product);
    }

    const handelProductcategoryChange = async (e) => {
      
        let pd = categroyList.filter(c => c.name == e)
        let ck = await setProperti(pd[0].properties)
        if (!ck) {
            console.log("return");
            return
        }
        let pp = product
        pp.category = pd[0].name
        pp.categoryId = pd[0]._id
        setProduct(pp)
        setc(pd[0].name)

        console.log(product, categoryP);
    }
    const setProperti = async (v) => {
        // if (!product.properties[v[0].fieldName]) { console.log("change"); return false }
        let obj = {}
        v.map((x) => {
            obj[x.fieldName] = ""
        })
        setCp(obj)
        let r = Object.entries(obj)
        console.log(r);
        setCp1(r)
        return true
    }
    const handelProductpropertiesChange = async (e) => {
        const { name, value } = e.target
        let pp = categoryP
        pp[name] = value
        let cc = product
        cc.properties = pp
        setProduct(cc)
        setCp(pp)
        let r = Object.entries(pp)
        setCp1(r)
    }

    function clean(obj) {
        for (var propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined) {
                return false
            }
        }
        return true
    }
    const handel_save = async () => {
        let pp = product
        pp.name = name
        pp.sku = sku
        let ck = clean(categoryP)
        if (ck && brand && category && name && sku) {
            let resp = await addProduct(pp)
            if (resp.isExecuted) {
                history.push('/product')

            }
            else {
                console.log("something went wrong");
            }
            return
        }
        else { return }

    }
    const handel_cancle = () => {
        setEname("");
        history.push('/brand')
    }

    React.useEffect(async () => {
        let b = await getBrands();
        let c = await getCategories();
        setBList(b.data); setCList(c.data)
    }, [])

    return (
        <div>
            <div>


                <div className="TextForm">
                    <h2>Product</h2>
                    <div className="buttons">
                        <div>
                            <Button style={{ marginRight: '4px' }}
                                variant="contained"
                                onClick={() => handel_save()}
                                color="primary">
                                <SaveIcon />
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handel_cancle()}>
                                <CancelIcon />
                            </Button>
                        </div>

                    </div>
                </div>






            </div>

            <div style={{ padding: '2px', marginLeft: "40px" }}>

                <div >
                    <TextField className={classes.space}
                        id="filled-secondary"
                        label="product Name"
                        variant="outlined"
                        color="secondary"
                        type='text'
                        value={name}
                        onChange={(e) => setEname(e.target.value)}
                    />

                    <TextField
                        className={classes.space}
                        id="filled-secondary"
                        label="product sku"
                        variant="outlined"
                        color="secondary"
                        value={sku}
                        onChange={(e) => setsku(e.target.value)}
                    />
                </div>
                <br />

                <div style={{ justifyContent: "space-around" }}>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Brand</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="brand"
                            value={brand}
                            onChange={(e) => handelProductbrandChange(e)}
                            label="brand"
                        >
                            {brandList?.map((item) => {
                                return (
                                    <MenuItem key={item.value} value={item.name}>
                                        {item.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="category"
                            value={category}
                            onChange={(e) => handelProductcategoryChange(e.target.value)}
                            label="category"
                        >
                            {categroyList?.map((item) => {
                                return (
                                    <MenuItem key={item.value} value={item.name}>
                                        {item.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </div>
                <h2>Properties</h2>
                <br />
                <br />
                {categoryP1.length > 0 && <Grid container spacing={1} >
                    {/* alignItems="flex-end" style={{ justifyContent: "center", marginBottom: "10px", marginTop: "10px" }} */}
                    {categoryP1.map(c => {

                        return (
                            <Grid item>
                                <TextField className={classes.space}
                                    id="filled-secondary"
                                    label={c[0]}
                                    variant="outlined"
                                    color="secondary"
                                    type='text'
                                    name={c[0]}
                                    value={c[1]}
                                    onChange={(e) => handelProductpropertiesChange(e)}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
                }

            </div>

        </div>
    )
}

export default Product_add
