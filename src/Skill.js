import React from 'react';

const Skill = props => {
    return (
        <div className='Skill'>
            <h3>{props.title}</h3>
            <strong><p>{props.desc}</p></strong>
            <div className='overlay'>
                <img src={props.source}/>
            </div>
        </div>
    );
}

export default Skill;