import React, {useState} from 'react';
import axios from 'axios';

const Marks = () => {
    const [enrolmentId, setEnrolmentId] = useState('');
    const [grade, setGrade] = useState('');

    const handleEnterMarks = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/enter_student_marks/', {
                enrolment_id: enrolmentId,
                grade,
            });

            // Handle the response or perform any necessary actions
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Enter Marks</h1>
            <form onSubmit={handleEnterMarks}>
                <input
                    type="text"
                    placeholder="Enrolment ID"
                    value={enrolmentId}
                    onChange={(e) => setEnrolmentId(e.target.value)}
                />
                <input type="text" placeholder="Grade" value={grade} onChange={(e) => setGrade(e.target.value)}/>
                <button type="submit">Enter Marks</button>
            </form>
        </div>
    );
};

export default Marks;
