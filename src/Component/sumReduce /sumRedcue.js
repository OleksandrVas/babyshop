import React from "react"
import {keys} from "lodash/object";

const sumReduce = (products) => {
   return (
       keys(products).reduce(
           (total , object) => (
               total + (products[object])
           )
           , 0)
   )
}

export default sumReduce

