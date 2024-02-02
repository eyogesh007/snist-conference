import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Container, Box } from '@mui/material';
import Link from '@mui/material/Link';
import backgroundImage from "../../src/assets/images/breadcrumbs-bg.png"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomBreadcrumbs({breadcrumbsInfo = []}) {
    const breadcrumbs = breadcrumbsInfo.map( bc => {
        return (
            <Link underline="hover" key="1" color="white" href={`${bc.href}`} onClick={handleClick}>{`${bc.name}`}</Link>
        )
    })

  return (
    <Box
        sx={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width: '100%',
            height: '130px',
        }}
    >
        <Container sx={{height : "100%", display : "flex", alignItems: "center"}} >
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}  aria-label="breadcrumb" sx={{
                    color : "white",
                    fontWeight : 500,
                    fontSize : "18px",
paddingLeft : 2      }}>
                    {breadcrumbs}
                </Breadcrumbs>
        </Container>
    </Box>
  );
}