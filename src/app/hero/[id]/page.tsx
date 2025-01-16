import getHeroesData from "@/app/api/heroes/spiders";
import HeroesCarousel from "@/components/HeroesCarousel";

interface IParams {
  id: string;
}

export default async function Hero({ params }: { params: IParams }) {
  const { id } = await params;
  const heroes = await getHeroesData();

  return <HeroesCarousel heroes={heroes.data} activeId={id} />;
}
