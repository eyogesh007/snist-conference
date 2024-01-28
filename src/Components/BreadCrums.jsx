import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Container, Box } from '@mui/material';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import backgroundImage from "../../src/assets/images/breadcrumbs-bg.png"

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
            height: '15vh',
        }}
    >
        <Container>
            <Stack spacing={2} paddingY={5}>
                <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{
                    color : "white",
                    fontWeight : 500,
                    fontSize : "18px"
                }}>
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
        </Container>
    </Box>
  );
}