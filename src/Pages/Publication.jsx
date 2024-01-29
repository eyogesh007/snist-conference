
import React from 'react';
import { Container, Typography, List, ListItem, Link, Paper, Grid } from '@mui/material';
import CustomBreadcrumbs from "../Components/BreadCrums";


const  breadcrumbs= [
    {name : "Home", href: "/"},
    {name : "Publication", href: "/publication"}
]
const Publication = () => {
    return (
        <React.Fragment>

            <CustomBreadcrumbs breadcrumbsInfo={breadcrumbs}/>
        <div>
            <section style={{ padding: '40px 0' }}>
                <Container maxWidth="md">
                    <Typography variant="h4" sx={{fontWeight: "bold"}} align="center" gutterBottom>
                        Publication
                    </Typography>

                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="body1" paragraph>
                            All Papers/Abstracts Registered for the 3rd International Conference on Education, Science, Technology and Management (SNIST-2024) will be published in an Indexed Peer Review Conference Proceedings for FREE.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            The registered papers will also be published in a Peer-Reviewed Journal for FREE.
                        </Typography>

                        <List>
                            <Typography variant="h6" gutterBottom>
                                Peer-Reviewed Journals:
                            </Typography>
                            <ListItem>International Journal of Management and Applied Science (IJMAS), Peer Reviewed, Google Scholar</ListItem>
                            <ListItem>International Journal of Electrical, Electronics and Data Communication (IJEEDC), Peer Reviewed, Google Scholar</ListItem>
                            <ListItem>International Journal of Advances in Science, Engineering and Technology(IJASEAT), Peer Reviewed, Google Scholar</ListItem>
                            <ListItem>International Journal of Mechanical and Production Engineering (IJMPE), Peer Reviewed, Google Scholar</ListItem>
                        </List>

                        <Typography variant="body1" paragraph>
                            Additionally, there is a Scopus Indexed Journal where papers will be published with nominal extra charges:
                        </Typography>

                        <List>
                            <Typography variant="h6" gutterBottom>
                                Scopus Indexed Journal:
                            </Typography>
                            <ListItem>
                                <b>International Journal on Recent and Innovation Trends in Computing and Communication</b>
                            </ListItem>
                            <List>
                                <ListItem>
                                    Home page:{' '}
                                    <Link href="https://www.google.com" target="_blank" style={{ color: 'blue', cursor: 'pointer' }}>
                                        https://www.google.com
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    Scopus:{' '}
                                    <Link href="https://www.google.com" target="_blank" style={{ color: 'blue', cursor: 'pointer' }}>
                                        https://www.google.com
                                    </Link>
                                </ListItem>
                            </List>
                        </List>

                        <List>
                            <Typography variant="h6" gutterBottom>
                                Scopus Q4 Journal:
                            </Typography>
                            <ListItem>
                                <b>International Journal on Recent and Innovation Trends in Computing and Communication</b>
                            </ListItem>
                            <List>
                                <ListItem>Scopus coverage years: 2019, from 2024 to Present</ListItem>
                                <ListItem>
                                    Subject area: Computer Science: Computer Networks and Communications, Human-Computer Interaction, Information Systems, Software Engineering, Electrical and Electronic Engineering
                                </ListItem>
                                <ListItem>
                                    Home page:{' '}
                                    <Link href="https://www.google.com" target="_blank" style={{ color: 'blue', cursor: 'pointer' }}>
                                        https://www.google.com
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    Scopus:{' '}
                                    <Link href="https://www.google.com" target="_blank" style={{ color: 'blue', cursor: 'pointer' }}>
                                        https://www.google.com
                                    </Link>
                                </ListItem>
                            </List>
                        </List>

                        <Typography variant="body1" paragraph>
                            All Scopus/Wos/UGC/ABDC Indexed Journals are published with nominal extra charges.
                        </Typography>
                    </Paper>
                </Container>
            </section>
        </div>
        </React.Fragment>
    );
};

export default Publication;
