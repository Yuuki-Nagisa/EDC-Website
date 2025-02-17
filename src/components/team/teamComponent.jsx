import "./teamComponent.scss";


export default function TeamComponent() {
    return (
        <div className="team-item">
            <img
                src="https://placehold.co/300x400/png"
                alt="team"
            />
            <h4>
                Some Guy
                <span>Lead</span>
            </h4>
            <div className="social-links">
                <a href="">
                    <i className="fa fa-envelope"></i>
                </a>
                <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
}
