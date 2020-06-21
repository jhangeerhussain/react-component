import React from 'react';

function Student(props){
    return(
        <div>
            <h1>hi i am {props.studentName}</h1>
            <h1> & </h1>
            <h1> i have done my {props.education}</h1>
            <hr />
        </div>
    );
}

export default Student;