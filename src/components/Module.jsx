import styled from '../assets/css/2.module.css';

const Module = () => {
    return (
        <div>
            <h1 className="heading">Css Module</h1>
            <p className={styled.heading}>This is a paragraph within the module.</p>
        </div>
    );
};

export default Module;