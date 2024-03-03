import React from 'react';
import {Container, Typography, Button} from '@mui/material';
import CustomBreadcrumbs from "../Components/BreadCrums";
import {Table, TableRow, TableCell, TableContainer} from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import Footer from './Footer';

const breadcrumbs = [
    {name: "Home", href: "/"},
    {name: "Publication", href: "/publication"}
]

const deadlines = [["Submission of Special Session papers", "5th Feb 2024"], ["Submission of full regular papers", "15th April 2024"],
    ["Paper acceptance notification", "15th  April  2024"], ["Early registration", "17th - 30 th  April 2024"], ["Submission of camera-ready paper", "17th - 30th  April 2024"],
["Final registration with 10% extra fee", "7th  May  2024"]]

const fees = [["Delegates from Industry/Academia", "INR 8000", "$300"], ["Research Scholars", "INR 6000", "$225"], ["Students", "INR 5000", "$200"]]

const Publication = () => {
    return (
        <React.Fragment>
            <CustomBreadcrumbs breadcrumbsInfo={breadcrumbs}/>
            <Container>
                <Typography paddingY={3} textAlign="center" fontWeight="bold" variant="h4">Paper Submission and
                    Publication</Typography>
                <Typography textAlign="justify" paddingBottom={2}>Authors are invited to submit the full length research
                    papers of 4 to
                    maximum of 7 pages (IEEE double column format) written in English. Authors are requested to submit
                    papers in portable document format electronically via Microsoft CMT. Authors are requested to kindly
                    refrain from plagiarism in any form. Authors should submit their original and unpublished research
                    work, which is not under consideration for publication elsewhere. Papers found to be plagiarized
                    during any screening process shall be rejected. All accepted, registered and presented papers will
                    be submitted for possible inclusion to
                    scopus/Research Gate and made available through Digital Library.</Typography>
                <Button sx={{paddingTop : 1, alignSelf : "center"}}>Download conference paper template </Button>
                <TableContainer sx={{paddingY : 3}}>
                    <Typography variant="h6" fontWeight="bold" textAlign="center">Conference Deadlines</Typography>
                    <Table>
                        <TableBody>
                            {deadlines.map((deadline, idx) => <TableRow
                                key={idx}><TableCell>{deadline[0]}</TableCell><TableCell>{deadline[1]}</TableCell></TableRow>)}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer sx={{paddingY : 3}}>
                    <Typography variant="h6" fontWeight="bold" textAlign="center">Registration Details</Typography>
                    <Table>
                        <TableBody>
                            {fees.map((fee, idx) => <TableRow
                                key={idx}><TableCell>{fee[0]}</TableCell><TableCell>{fee[1]}</TableCell><TableCell>{fee[2]}</TableCell></TableRow>)}
                        </TableBody>
                    </Table>
                    <Typography variant="caption">INR and $ for National and International participants respectively</Typography>
                </TableContainer>
                <br></br>
            </Container><br></br><br></br>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Publication;
