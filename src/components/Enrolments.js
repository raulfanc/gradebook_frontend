import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Enrolments = () => {
    const [enrolments, setEnrolments] = useState([]);

    useEffect(() => {
        // Fetch enrolments from the API
        const fetchEnrolments = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/manage-class-enrolment/');
                setEnrolments(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchEnrolments();
    }, []);

    return (
        <div>
            <h1>Enrolments</h1>
            {enrolments.map((enrolment) => (
                <div key={enrolment.id}>
                    <h3>Enrolment ID: {enrolment.id}</h3>
                    <p>Student: {enrolment.enrolled_student.firstname} {enrolment.enrolled_student.lastname}</p>
                    <p>Class: {enrolment.enrolled_class.number}</p>
                </div>
            ))}
        </div>
    );
};

export default Enrolments;
