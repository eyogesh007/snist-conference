import React from 'react';
import {Box, Button, Container, Divider, ListItem, ListItemText, Stack, Typography, List} from "@mui/material";
import BannerItem from "../Components/BannerItem";
import {CalendarMonth, LocationCity, MyLocation, Phone} from "@mui/icons-material";
import Footer from './Footer';
function Homepage(props) {
    return (<>
        <Container>
            <Box><br></br><div style={{maxWidth: '120%',
  margin: 'auto',
  padding: 20,
  background: 'white',
  borderRadius: 12,
  boxShadow: '8px 8px 8px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',}}>
                <Typography variant="h4" sx={{fontWeight: "bold", paddingTop: 2}}>International Conference on
                    Recent trends in Electrical and Computer Applications
                </Typography>
                <Typography color="darkgoldenrod" fontWeight="bold" variant="h3"> ICRECA 2024 </Typography>
                <Typography paddingTop={1} variant="h6" color="grey">Departments of Electrical and Electronics
                    Engineering and Computer
                    Science and Engineering.</Typography>
                <Typography variant="h6" color="grey">Sreenidhi Institute of Science and Technology</Typography>
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem/>} gap={2} paddingY={2}
                       justifyContent="space-evenly">
                    <BannerItem Icon={<CalendarMonth/>} category="Conference Date" content="10-11th May 2024"/>
                    <BannerItem Icon={<MyLocation/>} category="Conference Venue" content="SNIST, Hyderabad"/>
                    <BannerItem Icon={<Phone/>} category="Contact" content="+919437615586"/>
                </Stack></div>
                <Typography variant="h4" sx={{fontWeight: "bold"}} paddingY={2}>
                    Welcome to conference
                </Typography>
                <Typography textAlign="justify">
                    International Conference on Recent trends in Electrical and Computer Applications aims to bring
                    together leading academic scientists, researchers, students and research scholars to exchange and
                    share their experiences and research results on all aspects of Electrical and Computer Science
                    Engineering. It also provides a premier interdisciplinary platform for researchers, practitioners
                    and educators to present and discuss the most recent innovations, trends, and concerns as well as
                    practical challenges encountered and solutions adopted in the fields of Electrical and electronics
                    and Computer Science and Engineering. We are going to provide an opportunity to exchange new ideas,
                    advances and technologies for all registered participants the conference would offer invited
                    lectures from renowned speakers all over the country. The Best paper awards will be given for the
                    papers judged to make the most significant contribution to the conference.
                </Typography>
                <Typography variant="h4" sx={{fontWeight: "bold"}} paddingTop={3} paddingBottom={2}>
                    About College
                </Typography>
                <Typography textAlign="justify">
                    SREENIDHI INSTITUTE OF SCIENCE & TECHNOLOGY (SNIST) was established in 1997with the approval of All
                    India Council for Technical Education, Government of Andhra Pradesh and is affiliated to JNTUH.
                    Sreenidhi transforms its students into technically competent, highly communicative,
                    application-oriented and lifelong learning Engineers. Their success in the globally competitive
                    technological world and leadership in their chosen profession, are our objectives.
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText>It is running a number of undergraduate and postgraduate programmes and is also
                            engaged in research activity leading to Ph.D. Sreenidhi is recognized by the Department of
                            Scientific and Industrial Research(DSIR) as a scientific and industrial research
                            organization.</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>The institution got accredited by NAAC with ‘A’ Grade and Accredited by NBA of
                            AICTE within 5 years of its existence.</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>It has received World Bank assistance under TEQIP (PI&II). The institution
                            attained autonomous status from 2010 onwards and it is the first college under JNTUH to get
                            such an autonomous status</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>SNIST is actively engaged in R&D in the area of Nano technology and allied
                            fields</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Received National Award for Best HRD Practices from the Indian Society for
                            Training and Development, which is the first of its kind by an educational institution in
                            the country</ListItemText>
                    </ListItem>
                </List>
            </Box><br></br>
           
        </Container><br></br><br></br> <Footer></Footer></>
    );
}

export default Homepage;