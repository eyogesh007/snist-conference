import React from 'react';
import {Box, Button, Container, Divider, Stack, Typography} from "@mui/material";
import BannerItem from "../Components/BannerItem";
import {CalendarMonth, LocationCity, MyLocation, Phone} from "@mui/icons-material";

function Homepage(props) {
    return (
        <Container>
            <Box>
                <Typography variant="h4" color="red" sx={{fontWeight: "bold"}} paddingY={1}>3rd International Conference
                    on</Typography>
                <Typography variant="h3" sx={{fontWeight: "bold"}}>Education, Science, Technology and
                    Management</Typography>
                <Typography variant="h6" color="grey" paddingTop={2}>Organized by: Sreenidhi Institute of Science and
                    Technology</Typography>
                <Typography variant="h6" color="grey">In collaboration with: IRAJ-Institute of Research and
                    Journals.</Typography>
                <Stack direction="row" gap={1} paddingY={2}>
                    <Button variant="outlined">Abstract Submission</Button>
                    <Button variant="outlined">Registration</Button>
                    <Button variant="outlined">Brochure</Button>
                </Stack>
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem/>} gap={2} paddingY={2}
                       justifyContent="space-evenly">
                    <BannerItem Icon={<CalendarMonth/>} category="Conference Date" content="3rd Feb 2024"/>
                    <BannerItem Icon={<MyLocation/>} category="Conference Venue" content="SNIST, hyderabad"/>
                    <BannerItem Icon={<Phone/>} category="Contact" content="8763630137"/>
                </Stack>
                <Typography variant="h3" sx={{fontWeight: "bold"}} paddingY={2}>
                    Welcome to conference
                </Typography>
                <Typography variant="h6" textAlign="justify">
                    Welcome to the 3rd International Conference on Education, Science, Technology and
                    Management(ICESTM-2024) Organized by: Dunnes Institute, Mumbai, India in Collaboration with
                    IRAJ-Institute of Research and Journals on 3rd Feb 2024 at Mumbai. Join us for a vibrant exchange of
                    ideas and insights at the forefront of multidisciplinary educational research. Engage with esteemed
                    scholars, researchers, and practitioners as we explore innovative approaches and current trends
                    shaping the landscape of education across diverse disciplines. Together, let's delve into
                    transformative research that inspires and redefines the future of learning.
                </Typography>
            </Box>
        </Container>
    );
}

export default Homepage;