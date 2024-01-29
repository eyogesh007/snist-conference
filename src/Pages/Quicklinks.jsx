import React from 'react';
import {Container} from "@mui/material";
import CustomBreadcrumbs from "../Components/BreadCrums";

const QuickLinks = () => {
    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    };

    const subCardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px', // Adjust this value to decrease or increase vertical distance
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#007BFF',
        fontWeight: 'bold',
    };

    const buttonStyle = {
        backgroundColor: '#007BFF',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        textDecoration: 'none',
        display: 'inline-block',
        marginTop: '10px',
    };

    const  breadcrumbs= [
        {name : "Home", href: "/"},
        {name : "Quick Links", href: "/quicklinks"}
    ]

    return (
        <React.Fragment>
            <CustomBreadcrumbs breadcrumbsInfo={breadcrumbs}/>
            <Container>
                <div style={cardStyle}>
                    <h3>Quick Links</h3>

                    <div style={subCardStyle}>
                        <h4>Upcoming Conferences</h4>
                        <p>To view Upcoming SNIST International conferences</p>
                        <a href="#" style={linkStyle}>
                            <div style={buttonStyle}>Click here</div>
                        </a>
                    </div>

                    <div style={subCardStyle}>
                        <h4>Upcoming Webinars</h4>
                        <p>To view Upcoming SNIST webinars</p>
                        <a href="#" style={linkStyle}>
                            <div style={buttonStyle}>Click here</div>
                        </a>
                    </div>

                    <div style={subCardStyle}>
                        <h4>Past Conferences</h4>
                        <p>To view Past IRAJ International Conferences and seminars</p>
                        <a href="#" style={linkStyle}>
                            <div style={buttonStyle}>Click here</div>
                        </a>
                    </div>

                    <div style={subCardStyle}>
                        <h4>Digital Xplore</h4>
                        <p>To view past publications and research papers</p>
                        <a href="#" style={linkStyle}>
                            <div style={buttonStyle}>Click here</div>
                        </a>
                    </div>

                    <div style={subCardStyle}>
                        <h4>Paper Submission</h4>
                        <p>To submit your research paper for upcoming conferences</p>
                        <a href="#" style={linkStyle}>
                            <div style={buttonStyle}>Click here</div>
                        </a>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default QuickLinks;
