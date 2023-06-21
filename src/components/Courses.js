import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch courses from the API
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/course/');
                setCourses(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div>
            <h1>Courses</h1>
            {courses.map((course) => (
                <div key={course.id}>
                    <h3>{course.title}</h3>
                    <p>Code: {course.code}</p>
                    <p>Description: {course.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Courses;
