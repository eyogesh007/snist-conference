import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import CustomBreadcrumbs from "../Components/BreadCrums";

const  breadcrumbs= [
    {name : "Home", href: "/"},
    {name : "Venue", href: "/venue"}
]

function Venue() {
    return (
        <React.Fragment>

            <CustomBreadcrumbs breadcrumbsInfo={breadcrumbs}/>
        <Container>
            <Box mt={5} mb={5}>
                <Grid container spacing={3}>
                    {/* Left side - Address details */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" mb={2} style={{ fontFamily: 'cursive', color: '#333' }}>
                            Corporate Office Address
                        </Typography>
                        <Typography variant="body1" mb={1} style={{ fontFamily: 'Arial, sans-serif', color: '#555' }}>
                            #1-2-288/23/1, Domalguda, Hyderabad - 500 029, Telangana, India
                        </Typography>
                        <Typography variant="body1" mb={1} style={{ fontFamily: 'Arial, sans-serif', color: '#555' }}>
                            Email: info@sreenidhi.edu.in
                        </Typography>
                        <Typography variant="body1" style={{ fontFamily: 'Arial, sans-serif', color: '#555' }}>
                            Phone: +91 40 27640394 / 2764 0394
                        </Typography>
                    </Grid>

                    {/* Right side - Image */}
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
                        <img
                            src="https://media.getmyuni.com/azure/college-image/big/sreenidhi-institute-of-science-and-technology-snist-hyderabad.jpg"
                            alt="Venue"
                            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </React.Fragment>
    );
}

export default Venue;