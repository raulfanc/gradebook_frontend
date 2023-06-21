import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch students from the API
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/student/');
                setStudents(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <h1>Students</h1>
            {students.map((student) => (
                <div key={student.id}>
                    <h3>{student.firstname} {student.lastname}</h3>
                    <p>Email: {student.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Students;
