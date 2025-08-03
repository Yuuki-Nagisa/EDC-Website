import {
    Intro,
    Activity,
    Mission,
    Membership,
    JoinUs,
} from "@/components/about";
import { Navbar, Footer } from "@/components/globals";
import './About.scss';

export default function AboutPage() {
    return (
        <>  
            <Navbar />
            <main>
                <Intro />
                <Mission />
                <Activity />
                <Membership />
                <JoinUs />
            </main>
            <Footer />
        </>
    );
}
