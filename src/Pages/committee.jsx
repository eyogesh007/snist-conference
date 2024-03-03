import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import CustomBreadcrumbs from "../Components/BreadCrums";
import Footer from './Footer';
const  breadcrumbs= [
    {name : "Home", href: "/"},
    {name : "committee", href: "/committee"}
]
const CommitteeTable = ({ section, members }) => (
    <Box my={4} >
        <TableContainer component={Paper} sx={{ background: '#e6f7ff', width: '100%' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{section}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {members.map((member, index) => (
                        <TableRow key={index}>
                            <TableCell>{member}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
);

const Committee = () => {
    const committees = [
        {
            section: "Chief Patrons",
            members: [
                "Dr. K.T. Mahee, Chairman, Sreenidhi Educational Group",
                "Mr. K. Abhijit Rao, CEO"
            ]
        },
        {
            section: "Patrons",
            members: [
                "Dr. C.V. Tomy, Executive Director",
                "Dr. T. Ch. Siva Reddy, Principal"
            ]
        },
        {
            section: "General Chair",
            members: [
                "Dr. J. Upendar, Officer, University College of Engineering, Osmania University, Hyderabad, Telangana 500007, dr.8500003210@gmail.com, 8500003210.",
                "Dr.K.Sateesh Kumar, Assistant Professor, Dept of EEE, NIT Tirucharappalli-620015, sateesh@nitt.edu,9441274524"
            ]
        },
        {
            section: "Conference Chair",
            members: [
                "Dr T Vinay Kumar, Assistant Professor, Department of electrical engineering, NIT WARANAGAL.",
                "Dr. Kiran Kumar Nallamekala, Assistant Professor, SRM University Andhra Pradesh, kirankumar.n@srmap.edu.in, 9441276970"
            ]
        },
        {
            section: "Conveners",
            members: [
                "Dr. Bhargava, Head of EEE Department, SNIST, Hyderabad",
                "Dr. Aruna Varanasi, Head of CSE Department, SNIST, Hyderabad"
            ]
        },
        {
            section: "Co-Conveners",
            members: [
                "Dr. T. Mamatha, Associate Professor, CSE Department, SNIST, Hyderabad",
                "Dr. Koganti Srilakshmi, Assistant Professor, EEE Department, SNIST, Hyderabad",
                "Mrs. G. Sravanthi, Assistant Professor, EEE Department, SNIST, Hyderabad",
                "Dr. P. Sarath Kumar, Associate Professor, EEE Department, SNIST, Hyderabad"
            ]
        },
        {
            section: "Advisory Committee",
            members: [
                "Dr. K. Sumanth, Professor, EEE Department",
                "Dr. Pratap shekar puhan, Proff, EEE Department",
                "Dr. K. Ragavendher Reddy Karsani, Asso. Proff, EEE Dept",
                "Dr. G. Ramesh, Asso. Proff, EEE Dept",
                "Dr. K. Kannan, Asso. Proff, EEE Dept",
                "Dr. V. Ranjith Babu, Asso. Proff, EEE Dept",
                "Dr. M.T.L.Gayatri, Asso. Proff, EEE Dept",
                "Dr. T. Abhiram, Assistant Professor, EEE Dept",
                "Dr. K. Husaain, Assistant Professor, EEE Dept",
                "Dr. K. K. C. Deekshit, Assistant Professor, EEE Dept",
                "Dr. Sunil Bhutada, Head of IT Department",
                "Dr. T. V. Rajnikanth, Head of AI & ML",
                "Dr.T.Venkata Narayana Rao, Head of Internet of Things",
                "Dr. K. Shirisha, Head of Cyber Security",
                "Dr. Md. Jaffer Sadiq, Head of Data Science",
                "Dr Anup Kumar, Professor, CSE Department",
                "Dr.Sreedhar Bhukya, Professor, CSE Department",
                "Dr. G. Padmaja, Professor, CSE Department",
                "Dr. Niranjan, Professor, CSe Dept",
                "Dr.H.Balaji, Professor, CSE Dept",
                "Dr.Dheeraj Sundaragiri, Assoc.Prof, CSEDept",
                "Dr. M. Ram Chandra, Assoc. Prof, CSE Dept",
                "Dr.V. Sowmya Devi, Assoc.Prof, CSE Dept."
            ]
        },
        {
            section: "Organizing Committee",
            members: [
                "Dr. V. Ramprasad, Assistant Professor, EEE Department, SNIST, Hyderabad",
                "Dr. Raghavendra Reddy Karasani, Associate Professor, EEE Department, SNIST, Hyderabad",
                "Mr. Ch.V. Seshagiri Rao, Assistant Professor, EEE Department, SNIST, Hyderabad",
                "Sri. K.V.V.P.Chari, Assistant Professor, EEE Department, SNIST, Hyderabad",
                "E Madhukar, Assistant Professor, CSE Department, SNIST, Hyderabad",
                "D Ram Babu, Assistant Professor, CSE Department, SNIST, Hyderabad",
                "Devarapu Sreenivasa Rao, Assistant Professor, CSE Department, SNIST, Hyderabad",
                "P Durga Prasad, Assistant Professor, CSE Department, SNIST, Hyderabad",
                "Meeravali Shaik, Assistant Professor, CSE Department, SNIST, Hyderabad",
                "G Venkanna, Assistant Professor, CSE Department, SNIST, Hyderabad",
                "B Nikhila, Assistant Professor, CSE Department, SNIST, Hyderabad",
                "K Spandana, Assistant Professor, CSE Department, SNIST, Hyderabad",
                "G Yogesh, Assistant Professor, CSE Department, SNIST, Hyderabad",
                "P Lavanya, Assistant Professor, CSE Department, SNIST, Hyderabad",
                "B Pavani, Assistant Professor, CSE Department, SNIST, Hyderabad"
            ]
        },
        {
            section: "Technical Advisory Committee",
            members: [
                "Dr. P. Aravindha Babu, Professor, EEE Department, Annamalai University",
                "Dr. P. Ravi Babu, Professor, EEE Department, SNIST, Hyderabad",
                "Dr.S.Ravichndran, Professor, EEE Department, SNIST, Hyderabad",
                "Dr. Alapati RamaDevi, Professor, EEE Department, VRSEC",
                "Dr. Praveen Kumar Balachandran, Asso. Proff, EEE Dept, VCEH",
                "Dr. Sreedhar Bhukya, Professor, CSE Dept, SNIST",
                "Dr. K. C. Sredhar, Assoc.Professor, CSE Dept, SNIST"
            ]
        },
    ];

    return (
        <React.Fragment>
                <CustomBreadcrumbs breadcrumbsInfo={breadcrumbs}/>

            <Container maxWidth="lg">
                <Box width="100%" sx={{ textAlign: "center" }} paddingTop={3}>
                    <Typography variant="h6">Details of the Committee:</Typography>
                </Box>

                {committees.map((committee, index) => (
                    <CommitteeTable key={index} section={committee.section} members={committee.members} />
                ))}
            </Container>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Committee;
