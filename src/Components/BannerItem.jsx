import React from 'react';
import {Box, Typography} from "@mui/material";

function BannerItem(props) {
    return (
        <Box sx={{display : "flex", gap : "10px", alignItems : "center"}}>
            {props.Icon}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="button">
                    {props.category}
                </Typography>
                <Typography variant="body2">
                    {props.content}
                </Typography>
            </Box>
        </Box>
    );
}

export default BannerItem;
