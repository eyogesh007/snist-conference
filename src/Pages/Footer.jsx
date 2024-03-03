import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#182b45',
        color:'whitesmoke',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography sx={{color:'whitesmoke'}} variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography sx={{color:'whitesmoke'}} variant="body2" color="text.secondary">
            Department of Electrical and Electronics Engineering<br></br>Department of Computer Science and Engineering <br></br>SNIST
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography sx={{color:'whitesmoke'}} variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography sx={{color:'whitesmoke'}} variant="body2" color="text.secondary">
            Sreenidhi Institute of Science and Technology Yamnampet, Ghatkesar Hyderabad - 501 301, Telangana,India
            </Typography>
            <Typography sx={{color:'whitesmoke'}} variant="body2" color="text.secondary">
              Email: iciccsp@sreenidhi.edu.in
            </Typography>
            <Typography sx={{color:'whitesmoke'}} variant="body2" color="text.secondary">
              Phone: +919437615586
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography sx={{color:'whitesmoke'}} variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 3, pr: 3 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={6}>
          <Typography sx={{color:'whitesmoke'}} variant="body2" color="text.secondary" align="center">
            {"Copyright © 2021 | All Rights Reserved "}
            <Link color="inherit" href="https://your-website.com/">
              ICRECA
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
      <br></br>
    </Box>
  );
}
