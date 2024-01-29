import React from 'react';
import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
    Grid,
    Card,
    CardContent,
    Divider,
} from '@mui/material';
import { styled } from '@mui/system';
import CustomBreadcrumbs from "../Components/BreadCrums";

const  breadcrumbs= [
    {name : "Home", href: "/"},
    {name : "Contact", href: "/contact"}
]

const ContactContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
}));

const ContactCard = styled(Card)(({ theme }) => ({
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
}));

const ContactCardContent = styled(CardContent)(({ theme }) => ({
    '& > *': {
        marginBottom: theme.spacing(2),
    },
}));

const FormButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

const CircleTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: theme.spacing(4),
        '& fieldset': {
            borderWidth: 2,
        },
    },
}));

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <React.Fragment>

        <CustomBreadcrumbs breadcrumbsInfo={breadcrumbs}/>
        <ContactContainer>
            <Box>
                <Typography variant="h4" align="center" mb={3}>
                    Contact Us
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {/* Contact Details */}
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <ContactCard variant="outlined">
                            <ContactCardContent>
                                <Typography variant="h6" mb={2}>
                                    Corporate Office Address:
                                </Typography>
                                <Typography variant="body1">
                                    #1-2-288/23/1, Domalguda, Hyderabad - 500 029, Telangana, India
                                </Typography>
                                <Typography variant="body1">
                                    info@sreenidhi.edu.in
                                </Typography>
                                <Typography variant="body1">
                                    +91 40 27640394 / 2764 0394
                                </Typography>
                            </ContactCardContent>
                        </ContactCard>
                    </Grid>

                    {/* Contact Form */}
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <ContactCard variant="outlined">
                            <ContactCardContent>
                                <Typography variant="h5" mb={3} align="center">
                                    Send us a message
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <CircleTextField
                                        fullWidth
                                        label="Your Name"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                    />
                                    <CircleTextField
                                        fullWidth
                                        label="Your Email"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                    />
                                    <CircleTextField
                                        fullWidth
                                        label="Your Message"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        margin="normal"
                                        required
                                    />
                                    <FormButton
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Submit
                                    </FormButton>
                                </form>
                            </ContactCardContent>
                        </ContactCard>
                    </Grid>
                </Grid>
            </Box>
        </ContactContainer>
        </React.Fragment>
    );
}

export default Contact;
