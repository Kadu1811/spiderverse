import getHeroesData from "@/app/api/heroes/spiders";
import HeroesCarousel from "@/components/HeroesCarousel";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Hero(props: IProps) {
  const params = await props.params;

  const { id } = params;

  const heroes = await getHeroesData();

  return <HeroesCarousel heroes={heroes.data} activeId={id} />;
}
