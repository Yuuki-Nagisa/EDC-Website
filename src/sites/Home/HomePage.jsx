import { Navbar, Footer } from "@/components/globals";
import { Hero, Welcome, Carousel } from "@/components/home";

import "./Homepage.scss";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Welcome />
                <Carousel />
            </main>
            <Footer />
        </>
        
    );
}
