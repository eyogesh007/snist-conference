import React from 'react';
import { Container, Box,Typography, useTheme, useMediaQuery} from '@mui/material';
import CustomBreadcrumbs from '../Components/BreadCrums';
import ListItems from "../Components/List"
import Table from "../Components/Table"

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
            {category : 'Academicians / Practitioners / Industrialists', nonIndian : "USD 300", indian : "INR 8000"},
            {category : 'PhD/Post Doc.', nonIndian : "USD 280", indian : "INR 5000"},
            {category : 'Student (M-Tech/ME/Masters)', nonIndian : "USD 250", indian : "INR 4500"},
            {category : 'Students (B-tech/BE/Bachelors)', nonIndian : "USD 230", indian : "INR 4000"},
            {category : 'Attendees/Listener (Without paper presentation and publication)', nonIndian : "USD 150", indian : "INR 2000"},
            {category : 'Additional Page', nonIndian : "USD 20", indian : "INR 500"},
            {category : 'Extra Proceeding', nonIndian : "USD 50", indian : "INR 1000"},
        ]
    }

    return (
        <>
        <CustomBreadcrumbs breadcrumbsInfo={breadcrumbs}/>
        <Container>
            <Box>
                {fontSize}
                <Typography variant="h3" sx={{fontWeight: "bold"}} paddingY={2} align='center' fontSize={fontSize}>
                    Conference Registration
                </Typography>
                <Typography sx={{fontWeight: "bold"}}>
                    *ONE Registration Fee Includes the following for the Registered authors:
                </Typography>
                <ListItems items={items}/>
                <Typography>
                    Once Your paper is accepted the registration process begins. you have to complete the following four steps.
                </Typography>
                <Typography sx={{fontWeight: "bold"}} paddingY={2}>
                    Step 1 - Registration Fee
                </Typography>
                    <Typography textAlign="justify" marginY={1}>
                    It is mandatory for at least one author of an accepted paper to register in order for the paper to appear in the proceedings and included in the Technical Program. If an author has got more than one accepted papers, there will be discount on additional papers registration.
                    <br/>
                    In case of First paper, FULL FEE will be charged and in case of additional papers 50% of the total fee per additional paper will be charged (only if the same author is being registered for all the papers).
                    <br/>
                    Please see the FEE in the main page of the conference. 
                </Typography>
                <Table data={feeData}/>
                <Typography sx={{fontWeight: "bold"}} paddingY={2} marginY={1}>
                    Step 2 - Copyright Transfer
                </Typography>
                <Typography textAlign="justify">
                    Authors have to sign (for the individual paper)registration Form, and email that in  PDF/JPG/PNG format. 
                </Typography>
                <Typography sx={{fontWeight: "bold"}} paddingY={2}>
                    Step 3 - Camera Ready Paper submission
                </Typography>
                <Typography textAlign="justify">
                    All the paper must adhere to The ICESTM double column guidelines and must be submitted as Microsoft word DOC or DOCX format. So that the necessary fine tuning can be done.
                    <strong> If the author is NOT able to format the The ICESTM Provides the formatting facility without any extra charges.</strong>
                </Typography>
                <Typography sx={{fontWeight: "bold"}} paddingY={2}>
                    Step 4 - Registration
                </Typography>
                <Typography textAlign="justify">
                    <strong>ONLY</strong> Email the filled registration form (.doc/.docx format) + final paper/poster/abstract (.doc/.docx format) that you like to publish in the conference proceedings at email id:  <span style={{color : "red", cursor: "pointer"}}>info.icestmconference@gmail.com</span>
                </Typography>
                <br/>
            </Box>
        </Container>
        </>
    );
}

export default Registration;