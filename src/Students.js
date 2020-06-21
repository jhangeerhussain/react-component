import React from 'react';

function Student(props){
    return(
        <div>
            <h1>hi i am {props.studentName}</h1>
            <h1> & </h1>
            <h1> i have done my {props.education}</h1>
            <h1>hi i am zanbish i have my intermediate</h1>
            <h1>hi i am zahra i have my B.A</h1>
        </div>
    );
}

export default Student;