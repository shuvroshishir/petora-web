import { getAllPets } from "@/actions/getAllPets";
import Banner from "@/components/pages/home/Banner";
import FeaturedPets from "@/components/pages/home/FeaturedPets";
import PetAdoptionProcess from "@/components/pages/home/PetAdoptionProcess";
import PetCareTips from "@/components/pages/home/PetCareTips";
import SuccessStories from "@/components/pages/home/SuccessStories";
import TrustedPlatform from "@/components/pages/home/TrustedPlatform";
import WhyAdoptPets from "@/components/pages/home/WhyAdoptPets";

export default async function Home() {
  const pets = await getAllPets()

  return (
    <div>
      <Banner />
      <FeaturedPets pets={pets} />
      <WhyAdoptPets />
      <PetCareTips />
      <SuccessStories />
      <TrustedPlatform />
      <PetAdoptionProcess />
    </div >
  );
}
