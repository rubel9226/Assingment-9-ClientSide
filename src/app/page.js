import HeroSwiper from "@/Components/Home/HeroSwiper";
import HomeCard from "@/Components/Home/HomeCard";
import HomeReview from "@/Components/Home/HomeReview";
import WhyChoose from "@/Components/Home/WhyChoose";
import Footer from "@/Components/Shared/Footer";


export default function Home() {
  return (
    <div className=" mt-16">
      <HeroSwiper />

      <div className=" max-w-7xl mx-auto">
        <HomeCard />
        <WhyChoose />
        <HomeReview />
      </div>
      <Footer />
    </div>
  );
}
