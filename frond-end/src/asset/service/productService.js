// import  httpRequest from "../../API/axios";
import {publicRequest} from "../../API/axios";

export const getListProduct = async () => {
    try {
        const response = await publicRequest().get("/products");
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};