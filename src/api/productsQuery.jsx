import {queryOptions} from "@tanstack/react-query"
import axios from "axios"

export default function productsQuery () {
    return queryOptions({
        queryKey: ['products'],
        queryFn:getProducts
    })
}

const getProducts = async () => {
   const response = await axios.get("https://fakestoreapi.com/products")
   return response.data
}