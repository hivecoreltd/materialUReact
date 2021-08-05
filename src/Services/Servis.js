import axios from 'axios';
const baseURI ="https://sss-erp.herokuapp.com"
const baseURI1 ="http://localhost:5000"

export const getRepo = async () => {
    try {
        let res = await axios.get('l')


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};
export const getBrands = async () => {
    try {
        let res = await axios.get(`${baseURI}/brand`)


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};
export const getProducts = async () => {
    try {
        let res = await axios.get(`${baseURI}/product`)


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};
export const getCategories = async () => {
    try {
        let res = await axios.get(`${baseURI}/category`)


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};

export const getSpecificBrand = async (brandname) => {
    try {
        let res = await axios.get(`${baseURI}/brand/${brandname}`)


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};
export const getSpecificCategory = async (id) => {
    try {
        let res = await axios.get(`${baseURI}/category/${id}`)


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};
export const getSpecificProduct = async (id) => {
    try {
        let res = await axios.get(`${baseURI}/product/${id}`)


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};
export const updateBrand = async (brandid,brandname) => {
    try {
        let res = await axios.post(`${baseURI}/brand/update/${brandid}/${brandname}`)


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};
export const addBrand = async (brandname) => {
    try {
        let res = await axios.post(`${baseURI}/brand/${brandname}`)


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};
export const addProduct = async (body) => {
    try {
        let res = await axios.post(`${baseURI}/product/`,body)


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};
export const updateProduct = async (productid,body) => {
    try {
        let res = await axios.post(`${baseURI}/product/update/${productid}`,body)


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};
export const addcategory = async (body) => {
    let bod={
        category:body
    }
    try {
        let res = await axios.post(`${baseURI}/category/`,bod)


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};
export const updatecategory = async (id,body) => {
    let bod={
        category:body
    }
    try {
        let res = await axios.post(`${baseURI}/category/update/${id}`,bod)


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};
export const deletecategory = async (id) => {
 
    try {
        let res = await axios.post(`${baseURI}/category/delete/${id}`)


        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};
export const deleteProduct = async (id) => {
 
    try {
        let res = await axios.delete(`${baseURI}/product/${id}`)

        if (res) { return res.data; }

        else {
            throw new Error("Request failed")
        }
    }

    catch (error) {
        let message = {
            message: error.message
        }
        return message;
    }


};