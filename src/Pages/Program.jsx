import React from 'react';
import {Container, Paper, Typography, Box} from "@mui/material";
import Footer from './Footer';
import {
    Timeline,
    TimelineConnector,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
    TimelineContent
} from "@mui/lab";
import CustomBreadcrumbs from "../Components/BreadCrums";

const breadcrumbs = [
    {name: "Home", href: "/"},
    {name: "Program", href: "/program"}
]
	
	
	
	
 	
const times = [{time: "5th Feb 2024", program: "Submission of Special Session papers"}, {
    time: "15th April  2024",
    program: "Submission of full regular papers	    "
}, {time: "15th April  2024", program: "Paper acceptance notification"}, {
    time: "17th -30 th  April 2024",
    program: "Early registration "
}, {time: "17th -30 th  April 2024", program: "Submission of camera-ready paper"},
    {time: "7th  May  2024", program: "Final registration with 10% extra fee"},
]

function Program(props) {
    return (
        <React.Fragment>
            <CustomBreadcrumbs breadcrumbsInfo={breadcrumbs}/>
            <Container maxWidth="sm">
                <Box width="100%" sx={{textAlign: "center"}} paddingTop={3}>
                    <Typography variant="h6">February 3, 2024</Typography>
                </Box>
                <Timeline position="alternate">
                    {times.map((item, idx) => <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            {item.time}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            {idx === times.length - 1 ? null : <TimelineConnector/>}
                        </TimelineSeparator>
                        <TimelineContent sx={{fontWeight: 'bold'}}>{item.program}</TimelineContent>
                    </TimelineItem>)}
                </Timeline>
            </Container><br></br><br></br>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Program;
