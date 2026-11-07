import "./site.css";
import Intro from "./Intro";
import Nav from "./Nav";
import OfferBar from "./OfferBar";
import Footer from "./Footer";
import StorySection from "@/components/story/StorySection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import MenuSection from "@/components/sections/MenuSection";
import DunkSection from "@/components/sections/DunkSection";
import VisitSection from "@/components/sections/VisitSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

/** BR-TAPRI — first, chai. One page, one pinned 3D story, then the counter. */
export default function SitePage() {
  return (
    <>
      <Intro />
      <Nav />
      <main id="main">
        <StorySection />
        <ManifestoSection />
        <MenuSection />
        <DunkSection />
        <VisitSection />
        <ReviewsSection />
      </main>
      <Footer />
      <OfferBar />
    </>
  );
}
