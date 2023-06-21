import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Semesters = () => {
    const [semesters, setSemesters] = useState([]);

    useEffect(() => {
        // Fetch semesters from the API
        const fetchSemesters = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/semester/');
                setSemesters(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSemesters();
    }, []);

    return (
        <div>
            <h1>Semesters</h1>
            {semesters.map((semester) => (
                <div key={semester.id}>
                    <h3>{semester.name}</h3>
                    <p>Start Date: {semester.start_date}</p>
                    <p>End Date: {semester.end_date}</p>
                    <p>Year: {semester.year}</p>
                </div>
            ))}
        </div>
    );
};

export default Semesters;
