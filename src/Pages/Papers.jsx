import React from 'react';
import {Box, Container, Typography, useTheme, useMediaQuery,List, ListItem, ListItemText} from "@mui/material";
import CustomBreadcrumbs from '../Components/BreadCrums';
import Footer from './Footer';

function About(props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const fontSize = isSmallScreen ? '2rem' : '3rem'; 

    const  breadcrumbs= [
        {name : "Home", href: "/"},
        {name : "Call for Papers", href: "/Call for Papers"}
    ]

    return (
        <>
        <CustomBreadcrumbs breadcrumbsInfo={breadcrumbs}/>
        <Container>
            <Box>
                <Typography variant="h3" sx={{fontWeight: "bold"}} paddingY={2} align='center' fontSize={fontSize}>
                   Call for Papers
                </Typography>
                <br></br>
                <Typography variant="h5" textAlign="justify" sx={{fontWeight: "bold"}}  align='center' >
                Call for Special and Regular Session Papers
                </Typography>
                <br></br>
                <Typography textAlign="justify" >
                The details of call for special as well as regular session papers will be updated in the conference website. Please follow the conference link for more details. Regular sessions within the scope of the following topics, but not limited to:
                </Typography>                <br></br><br></br>
                <Typography variant="h5" textAlign="justify" sx={{fontWeight: "bold"}}  align='center' >
                Call for papers:
                </Typography>
                <br></br>
                <Typography variant="h5" textAlign="justify" sx={{fontWeight: "bold"}}  align='center' >
                Track1: Electrical and Electronics Engineering
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText>Modern Power Systems</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Advanced Power Converters</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Renewable Energy Source</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Signal processing and Communication Technology</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>General Topics in Computational Intelligence</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Electric Vehicles</ListItemText>
                    </ListItem>
                </List> 
                <Typography variant="h5" textAlign="justify" sx={{fontWeight: "bold"}}  align='center' >
                Track 2: Computer Science and Engineering
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText>Deep Learning, Machine Leaning  and Artificial Intelligence</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Software Engineering</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Big Data Analytics and Data science engineering</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Cloud Computing</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Internet of Things  and Future Technologies</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Security (Information Security and Cyber Security)</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Block Chain Technologies</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Intelligent Systems and Automation </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Manufacturing Technologies and Computer Science Applications</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Human Computer Interaction</ListItemText>
                    </ListItem>
                </List>
            </Box>
        </Container><br></br>
        <Footer></Footer>
        </>
    );
}

export default About;