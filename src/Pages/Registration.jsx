import React from 'react';
import { Container, Box,Typography, useTheme, useMediaQuery} from '@mui/material';
import CustomBreadcrumbs from '../Components/BreadCrums';
import ListItems from "../Components/List"
import Table from "../Components/Table"
import Footer from './Footer';
function Registration(props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery("(min-width:1000px)");
    const fontSize = isSmallScreen ? '2rem' : '3rem'; 

    const  breadcrumbs= [
        {name : "Home", href: "/"},
        {name : "Registration", href: "/registration"}
    ]
    const items = [
        "Welcome reception",
        "Printed Name Card",
        "Conference Folder or Bag",
        "Participation in the technical program",
        "Printed Participation & presentation Certificate",
        "Printed Proceedings",
        "Coffee breaks on the presentation day",
        "Lunch on the presentation day",
        "Banquet"
    ]

    const feeData = {
        head : ["Categories", "For Non-Indian", "Indian"],
        rows : [
            {category : 'Delegates from Industry/Academia', nonIndian : "USD 300", indian : "INR 8000"},
            {category : 'Research Scholars', nonIndian : "USD 225", indian : "INR 6000"},
            {category : 'Students', nonIndian : "USD 200", indian : "INR 5000"},
          ]
    }

    return (
        <>
        <CustomBreadcrumbs breadcrumbsInfo={breadcrumbs}/>
        <Container>
            <Box>
                <br></br><Typography variant="h3" sx={{fontWeight: "bold"}} paddingY={2} align='center' fontSize={fontSize}>
                    Registration
                </Typography><br></br>
                <Typography textAlign="justify">
                Authors are invited to submit the full length research papers of 4 to maximum of 7 pages (IEEE double column format) written in english. Authors are requested to submit papers in portable document format electronically via Microsoft CMT. Authors are requested to kindly refrain form plagiarism in any form. Authors should submit their original and unpublished research work, which is not under consideration for publication elsewhere. Papers found to be plagiarized during any screening process shall be rejected.
All accepted, registered and presented papers will be submitted for possible inclusion to scopus/Research Gate and made available through Digital Library. 
The conference paper template can be downloaded from the link http: // www.ieee.org / conferences events / conferences / publishing / templates.html                </Typography>
                <Typography sx={{fontWeight: "bold"}} paddingY={2}>
                    Registration Fee
                </Typography>
                   
                <Table data={feeData}/>
                
            </Box>
            <br></br>
        </Container><br></br><br></br>
        <Footer></Footer>
        </>
    );
}

export default Registration;