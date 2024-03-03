import React from 'react';
import {Box, Container, Typography, useTheme, useMediaQuery} from "@mui/material";
import CustomBreadcrumbs from '../Components/BreadCrums';
import Footer from './Footer';
function About(props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const fontSize = isSmallScreen ? '2rem' : '3rem'; 

    const  breadcrumbs= [
        {name : "Home", href: "/"},
        {name : "About", href: "/about"}
    ]

    return (
        <>
        <CustomBreadcrumbs breadcrumbsInfo={breadcrumbs}/>
        <Container>
            <Box>
                <Typography variant="h3" sx={{fontWeight: "bold"}} paddingY={2} align='center' fontSize={fontSize}>
                    About Us
                </Typography>
                <br></br>
                <Typography variant="h5" textAlign="justify" sx={{fontWeight: "bold"}}  align='center' >
                The Department of Electrical and Electronics Engineering
                </Typography>
                <br></br>
                <Typography textAlign="justify" >
                The Department of Electrical and Electronics Engineering (EEE) was established in the year 1997-1998. Nineteen batches of B-Tech Students graduated from 2001 to 2019. With approval of AICTE the department started a Full Time M-Tech Program. with specialization of “Electrical Power Engineering” under the affiliation of JNTUH, Hyderabad in the year 2004-2005. The B. Tech (EEE) Course was accredited by NBA for three years in the year 2003 and reaccredited in the year 2007. The B. Tech (EEE) was reaccredited for 5 years in 2014. The B-Tech (EEE) Program is again applied for Reaccreditation. The M-Tech (EPE) Course was accredited in the year 2009 and applied for Reaccreditation. Students who graduated are very well placed in reputed organizations in India and Abroad. Dept. is fully utilizing the autonomy status by incorporating changes in the curriculum with the approval of duly constituted Board of Studies and the Academic Council at required intervals by taking inputs from Industry and making them an active stake holder in the curriculum Refinement. Faculty of the Department is actively involved in research activity. The research interest of faculties encompasses various areas of electrical engineering. The department have well-equipped laboratory facilities to the students such as Electrical Machine Lab, Network and Systems lab, Power System Simulation Lab, Control & Instrumentation Lab, Power Electronics & Drives Lab.                </Typography>
                <br></br><br></br>
                <Typography variant="h5" textAlign="justify" sx={{fontWeight: "bold"}}  align='center' >
                The Department of Computer Science and Engineering
                </Typography>
                <br></br>
                <Typography textAlign="justify" >

                The Department of Computer Science and Engineering in Sreenidhi Institute of Science and Technology was established in 1997 and is one of the prestigious departments that focuses on the overall growth of students, including academic and research activities.

CSE offers one UG program, B.Tech CSE, with an intake of 300 students. This program has an NBA accreditation. The department also offers one PG program with an intake of 18 students. Recently, four new departments were established in CSE allied fields: Artificial Intelligence and Machine Learning, Data Science, Cyber Security, and Internet of Things.

The department attracts faculty from across the country with rich experience in teaching and research to help shape the future of the students. There are 60 faculty members, including 15 doctorates who are well experienced and specialized in different domains like AI, ML, BDA, and more. Faculty are actively filing patents and publishing research papers in quality journals. A few faculty members are internationally certified in cloud computing by Amazon, cyber security by Palo Alto, Linux programming by Red Hat, and Selenium testing by Virtusa.

The state-of-the-art laboratory is equipped with the latest hardware and software facilities to carry out academic as well as research work. The department also has an exclusive research laboratory with high-end systems. Students are doing research projects with the guidance of faculty. Effective mentoring processes are in place.

The department encourages students to explore new technologies by conducting student development programs, guest lectures, value-added courses, and certified programs. The department is also organizing many more activities to groom their career like hackathons, poster presentations, project expo, paper publications, and many more to make them industry-ready. The students actively participate in club activities and sports activities. One of our students, Mr. Aditya, is an international Badminton player. His world rank is 91 and ranked 7th in India as per the Badminton Association of India.

The department is providing opportunities to students to undergo career enhancement training programs. The HOD CSE is an advisor to the Career Development Centre, and also our faculty are acting as trainers for placement training programs.

The CSE department has clinched new heights by securing 99% placements into top-notch companies with the highest package of 38 LPA and an average package of 7.1 LPA. One of the best practices that the department of CSE engages in is thorough encouragement to MOOCs certification programs. We have a dedicated lab for NPTEL and faculty members to guide the students in addition to allotting separate slots for NPTEL in the timetable to give students ample opportunities to undergo internships with a good stipend amount, so that they get recognized exposure to the industry.

Some of our CSE department faculty are recipients of best faculty awards and excellence in research awards from highly reputed national and international institutes and organizations. The dedicated efforts put in by our faculty in teaching and learning, active participation by our students in co-curricular and extracurricular activities, in addition to excellent academic performance, has made CSE one of the prominent branches at SNIST. All this was possible only due to the consistent financial and moral support by the management throughout our journey. This resulted in adding many feathers to Sreenidhi’s cap. </Typography>
                <br></br>
            </Box><br></br>
        </Container><br></br>
        <Footer></Footer>
        </>
    );
}

export default About;