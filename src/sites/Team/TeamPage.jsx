import { TeamSection } from "@/components/team";
import { Navbar, Footer } from "@/components/globals";
export default function TeamPage() {
    return (
        <>
            <Navbar />
            <main>
                <TeamSection />
            </main>
            <Footer />
        </>
    );
}
