import React from 'react';
import { Container, Typography, Box } from "@mui/material";
import photo1 from '../assets/images/Picture1track11.png'; 
import photo2 from '../assets/images/Picture2track11.png'; 
import photo3 from '../assets/images/Picture2tra2.png'; 
import photo4 from '../assets/images/Picture1track2.png'; 
import Footer from './Footer';
const Speakers = () => {
    return (<>
        <Container maxWidth="md">
            <br></br><br></br>
            <Typography variant="h5" textAlign="center" sx={{fontWeight: "bold"}}  align='center' >
                Speakers of Track 1
                </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" my={4}>
                <img src={photo1} alt="Your Photo" style={{ maxWidth: '100%', height: 'auto' }} />
                <Box ml={6}>
                    <Typography variant="h5" gutterBottom>Dr Dharmasa</Typography>
                    <Typography textAlign="justify"  variant="body1">
                    Dr Dharmasa is an IEEE Senior Member and IEEE Awardee USA and currently working as a MSc EE Program Manager under Electrical and Computer Engineering Dept. at National University, Oman. He has published 31 papers in the International level with 04 patents & He is an editor of book Reinvention of Health Applications with IoT, Challenges and Solutions, https://www.routledge.com CRC press Book.UK. His area of research interest includes: Power System Analysis & Protection; Reliability; Renewable Energy; High Voltage Engineering; Industrial Practice, Counselling on Education & Library Information. He won first IEEE Branch Counselor & Advisor award in the year 2013 also received outstanding Recruitment Officer Award from IEEE USA. In 2022 received 77700 USD Grant from The Research Council of Oman on *Development of Real Time Energy Management System for Efficient Energy Utilization: An effort towards net zero Emission Effort. His new formula on OC-SC test on Transformer to find efficiency and regulation found useful to save computation time of students and staff. He received meritorious grant from AICTE & CSIR New Delhi & PRDC, Bengaluru and Youngest-Professor Award from SNIST-Deemed University, Hyderabad.2010 2017 become IJEE Associate Member Japan and he delivered talks at various Universities and Ministries as such India, Saudi Arabia, Bahrain, UAE, Eritrea and Oman. In 2019 year, he received 10-year contributor award from IEEE Oman Section. He is associated with international journals such as Be-Press Canada, Bulgarian Academy, EU IET UK and IEEE USA, Vignan- University, NIT-Dugapur, IIT Dharwar. He also playing main role in an environmental based short movie “Goodman Save Earth” going to release in the year 2024 Production by V- Core & DSB India under creative head Dr Jayalaxmi C, USA. Also he served as School Management Committee Member @ Indian School Seeb.                    </Typography>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" my={4}>
                <img src={photo2} alt="Your Photo" style={{ maxWidth: '100%', height: 'auto' }} />
                <Box ml={6}>
                    <Typography variant="h5" gutterBottom>Dr. Surender Reddy Salkuti</Typography>
                    <Typography textAlign="justify"  variant="body1">
                    Surender Reddy Salkutiis working with Woosong University, South Korea as an Associate Professor in the Department of Railroad and Electrical Engineering since April 2014. Hereceived the Ph.D. degree in Electrical Engineering from the Indian Institute of Technology Delhi (IITD), India, in 2013. He was a Postdoctoral Researcher at Howard University, Washington, DC, USA, from 2013 to 2014. 
His research interests include power system restructuring issues,smart grid development with the integration of wind and solar photovoltaic energy sources, battery storage and electric vehicles, demand response, power system analysis and optimization, soft computing techniques application in power systems and renewable energy. 
He has published two edited volumes with Springer (LNEE) and more than 250 research articles in peer-reviewed international journals and conference proceedings. He has served as or is serving as Guest Editor for various international journals. He is also an editorial board member for many journals. He is the recipient of the 2016 Distinguished Researcher Award from Woosong University Educational Foundation, South Korea, and POSOCO Power System Award (PPSA) 2013, India. He is a Member of IEEE and IEEE Power and Energy Society.                    </Typography>
                </Box>
            </Box><br></br>
            <Typography variant="h5" textAlign="center" sx={{fontWeight: "bold"}}  align='center' >
                Speakers of Track 2
                </Typography>    
            <Box display="flex" alignItems="center" justifyContent="center" my={4}>
                <img src={photo4} alt="Your Photo" style={{ maxWidth: '30%', height: 'auto' }} />
                <Box ml={6}>
                    <Typography variant="h5" gutterBottom>Dr Kumar Eswaran</Typography>
                    <Typography textAlign="justify"  variant="body1">
                    Dr Kumar Eswaran, who is a CEO Alpes. Ai and a Visiting Professor SNIST, is a researcher who specialized in Artificial Intelligence and on the Application of Mathematics in Engineering and Physics. He obtained his Master’s degree from IIT Kanpur (1968), and Ph. D. from the University of Madras in 1973. He was later a Post-doctoral Fellow in IIT Delhi and Post-Doctoral Researcher in the Department of Engineering Mechanics Ohio State University. He then came back to India where he worked in the Corporate Research and Development Division of BHEL at Hyderabad for 25 years. During this period, he was in charge of many successful research projects in the application of mathematical techniques in Mechanical, Electrical Engineering and Computer science. After this, he considers himself very fortunate to serve in SNIST for many years, first as professor and then as visiting professor. He has guided eight doctoral students and numerous master’s students. 
His Recent significant contributions: 
1. A few years ago, Dr. Eswaran’ s love for mathematics and basic curiosity lead him to discover a proof of “The Riemann Hypothesis”, considered as the most difficult and unsolved problems in Pure mathemaƟcs. He then followed it up with a second proof and also a proof of “The Generalised Riemann Hypothesis” which involved finding the properties of Lfunctions, which are complex funcƟons popularised by Ramanujan. Judging from the reads and downloads of his work (totalling more than 50,000 - a record in number theory), his proofs which involve difficult concepts and intricate logic are being gradually accepted by the research community.
 2. In the area of AI his recent work and patents have provided new noniteraƟve algorithms for the training of Artificial Neural Networks (ANN), and has provided a mathemaƟcal basis for the methods of ANN, such as Deep Learning used in various applicaƟons such as ChatGpt. He hopes that his mathematical methods would be utilised and extended by others to discover and understand the much more complex problems involving the functioning of natural neurons in mammal and human brains.                    </Typography>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" my={4}>
                <img src={photo3} alt="Your Photo" style={{ maxWidth: '70%', height: 'auto' }} />
                <Box ml={6}>
                    <Typography variant="h5" gutterBottom>Mr Chaitanya Chokkareddy</Typography>
                    <Typography textAlign="justify"  variant="body1">
                    Mr Chaitanya Chokkareddy, is a Co Founder, Chief Technology Officer of Ozonetel – India’s leading on-demand cloud communication provider for businesses. Beginning his career as a Principal Architect, in his current role, Chaitanya is responsible for rolling out new products and technologies for Ozonetel in the AI and cloud telephony space. Chaitanya is passionate about the start-up ecosystem in the country and is a frequent speaker at various start-up forums. He is responsible for architecting India's first cloud telephony platform handling 2 billion calls per year. He is also a passionate open source enthusiast working with the Swecha team and built the Chandamama Kathalu Telugu LLM.                    </Typography>
                </Box>
            </Box>
            
        </Container><br></br><br></br><Footer></Footer></>
    );
}

export default Speakers;
