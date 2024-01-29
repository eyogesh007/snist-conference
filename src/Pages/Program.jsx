import React from 'react';
import {Container, Paper, Typography, Box} from "@mui/material";
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

const times = [{time: "09:00 to 09:30", program: "Inauguration"}, {
    time: "09:00 to 09:30",
    program: "Welcome Speech"
}, {time: "09:30 to 09:45", program: "Coffee Break"}, {
    time: "09:45 to 10:00",
    program: "Keynote Speech - 1"
}, {time: "10:00 to 10:30", program: "Keynote Speech - 2"},
    {time: "11:00 to 13:00", program: "Techical Session - 1"},
    {time: "13:00 to 14:00", program: "Lunch Break"},
    {time: "14:00 to 17:00", program: "Techical Session - 2"},
    {time: "17:00 to 17:10", program: "Feedback and vote of thanks"},
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
            </Container>
        </React.Fragment>
    );
}

export default Program;
