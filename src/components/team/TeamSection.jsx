import { TeamComponent } from ".";
import teamdata from "../../../public/data/team.json";
export default function TeamSection() {
    return (
        <section>
            <h2>Meet the Team</h2>
            <div className="tem">
                {teamdata.map((teamMember, index) => (
                    <TeamComponent key={index} {...teamMember} />
                ))}
            </div>
        </section>
    );
}
