import React from "react";
import {Grid} from "@mui/material";


const GridComponent = (props) => {
    return (
        <>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0}
                  columns={16}
                  rowSpacing={3}>
                {props.children}
            </Grid>

        </>
    )
}
export default GridComponent