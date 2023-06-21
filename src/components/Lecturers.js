import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Lecturers = () => {
    const [lecturers, setLecturers] = useState([]);

    useEffect(() => {
        // Fetch lecturers from the API
        const fetchLecturers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/lecturer/');
                setLecturers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLecturers();
    }, []);

    return (
        <div>
            <h1>Lecturers</h1>
            {lecturers.map((lecturer) => (
                <div key={lecturer.id}>
                    <h3>{lecturer.firstname} {lecturer.lastname}</h3>
                    <p>Email: {lecturer.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Lecturers;
