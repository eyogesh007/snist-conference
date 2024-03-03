import React from 'react';
import { styled } from '@mui/system';
import CustomBreadcrumbs from "../Components/BreadCrums";
import Footer from './Footer';
const  breadcrumbs= [
    {name : "Home", href: "/"},
    {name : "venue", href: "/venue"}
]
const StyledConferenceAnnouncement = styled('div')({
  maxWidth: '85%',
  margin: 'auto',
  padding: 20,
  background: 'white',
  borderRadius: 12,
  boxShadow: '8px 8px 8px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
});

const Heading = styled('h2')({
  color: '#333',
  marginBottom: 20,
});

const Paragraph = styled('p')({
  color: '#555',
  lineHeight: 1.6,
});
const App = () => (
    <>           <CustomBreadcrumbs breadcrumbsInfo={breadcrumbs}/>
    <br></br>
    <br></br> <StyledConferenceAnnouncement>
    <Heading>We are thrilled to announce the venue of our International Conference on
Recent trends in Electrical and Computer Applications ICRECA-2024!</Heading>
    <Paragraph>
      The Conference will be held at SREENIDHI INSTITUTE OF SCIENCE & TECHNOLOGY, Yamnampet, Ghatkesar, Hyderabad, Telangana 501301
    </Paragraph>
    <Paragraph>
      SNIST is a premier educational institution known for its commitment to excellence in science and technology education.
    </Paragraph>
    <Paragraph>
      We look forward to welcoming you to this exciting conference at SNIST!
    </Paragraph>
  </StyledConferenceAnnouncement>
  <br></br>
  <br></br>
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0794606213703!2d78.66420387526483!3d17.455910500827237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb7612c2c68369%3A0x9ea4b426b7e3699!2sSreenidhi%20Institute%20of%20Science%20%26%20Technology%20-%20SNIST!5e0!3m2!1sen!2sin!4v1706959827589!5m2!1sen!2sin"
  width="85%"
  height="450"
  style={{ border:'0', margin: 'auto', display: 'block'  }}
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe><br></br><br></br><br></br><br></br><Footer></Footer></>
);

export default App;
