import getHeroesData from "@/app/api/heroes/spiders";
import HeroesCarousel from "@/components/HeroesCarousel";

interface IProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const heroes = await getHeroesData();
  return heroes.data.map((hero: { id: string }) => ({
    id: hero.id,
  }));
}

export default async function HeroPage({ params }: IProps) {
  const { id } = await params;
  const heroes = await getHeroesData();

  return <HeroesCarousel heroes={heroes.data} activeId={id} />;
}
