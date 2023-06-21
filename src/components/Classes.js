import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        // Fetch classes from the API
        const fetchClasses = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/class/');
                setClasses(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchClasses();
    }, []);

    return (
        <div>
            <h1>Classes</h1>
            {classes.map((classItem) => (
                <div key={classItem.id}>
                    <h3>{classItem.number}</h3>
                    <p>Course: {classItem.course.title}</p>
                    <p>Semester: {classItem.semester.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Classes;
