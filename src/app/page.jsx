import Banner from "@/components/pages/home/Banner";
import PetAdoptionProcess from "@/components/pages/home/PetAdoptionProcess";
import PetCareTips from "@/components/pages/home/PetCareTips";
import SuccessStories from "@/components/pages/home/SuccessStories";
import TrustedPlatform from "@/components/pages/home/TrustedPlatform";
import WhyAdoptPets from "@/components/pages/home/WhyAdoptPets";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyAdoptPets />
      <PetCareTips />
      <PetAdoptionProcess />
      <TrustedPlatform />
      <SuccessStories />
    </div >
  );
}
