import getHeroesData from "@/app/api/heroes/spiders";
import HeroesCarousel from "@/components/HeroesCarousel";

interface IProps {
  params: {
    id: string;
  };
}

export default async function HeroPage({ params }: IProps) {
  const { id } = params;
  const heroes = await getHeroesData();

  return <HeroesCarousel heroes={heroes.data} activeId={id} />;
}
