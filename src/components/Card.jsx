import React from 'react';


const Card = (props) => {
    return (
        <div className="card text-center" style={{ width: "18rem" }}>
            <div className="overflow">
                <img src={props.imageSrc} alt="" className="card-img-top" style={{ height: "15rem", objectFit: "cover" }} />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste nemo molestias ipsum accusamus quae perspiciatis doloribus, hic eaque blanditiis?
                </p>
                <a href="#" className="btn btn-outline-success">View More</a>
            </div>
        </div>
    );
}

export default Card;