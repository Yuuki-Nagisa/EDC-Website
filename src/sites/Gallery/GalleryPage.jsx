import Gallery from '@/components/gallery/Gallery';
import { Navbar, Footer } from "@/components/globals";
import './GalleryPage.scss';

export default function GalleryPage() {
  return (
    <>
    <Navbar />
    <main className='gallery-section'>
      <Gallery />
    </main>
    <Footer />
    </>
  );
};

// export default GalleryPage;
