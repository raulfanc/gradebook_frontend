import React, {useState} from 'react';
import axios from 'axios';

const UploadStudents = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            await axios.post('http://localhost:8000/api/upload_students/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('File uploaded successfully!');
        } catch (error) {
            console.error(error);
            alert('Error uploading file!');
        }
    };

    return (
        <div>
            <h2>Upload Students</h2>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileChange}/>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadStudents;
