import React from 'react';
import {Box, Container, Typography, useTheme, useMediaQuery} from "@mui/material";
import CustomBreadcrumbs from '../Components/BreadCrums';

function About(props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const fontSize = isSmallScreen ? '2rem' : '3rem'; 

    const  breadcrumbs= [
        {name : "Home", href: "/"},
        {name : "About", href: "/about"}
    ]

    return (
        <>
        <CustomBreadcrumbs breadcrumbsInfo={breadcrumbs}/>
        <Container>
            <Box>
                <Typography variant="h3" sx={{fontWeight: "bold"}} paddingY={2} align='center' fontSize={fontSize}>
                    About Us
                </Typography>
                <Typography textAlign="justify" >
                    Join us for a vibrant exchange of ideas and insights at the forefront of multidisciplinary educational research. Engage with esteemed scholars, researchers, and practitioners as we explore innovative approaches and current trends shaping the landscape of education across diverse disciplines. Together, let's delve into transformative research that inspires and redefines the future of learning. 
                </Typography>
                <Typography textAlign="justify" paddingY={1}>
                    The primary objective of the ICESTM-2024 on 3rd Feb 2024 , in Mumbai, India is to create a vibrant platform for global scholars, researchers, and educators. The conference aims to facilitate the exchange of cutting-edge research across various Scientific, Engineering and Management disciplines. ICESTM-2024 seeks to encourage collaboration, foster interdisciplinary discussions, and showcase innovative methodologies, ultimately aiming to advance educational practices worldwide. 
                </Typography>
            </Box>
        </Container>
        </>
    );
}

export default About;