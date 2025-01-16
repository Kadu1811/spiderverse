import getHeroesData from "@/app/api/heroes/spiders";
import HeroesCarousel from "@/components/HeroesCarousel";

export async function generateStaticParams() {
  const heroes = await getHeroesData();
  return heroes.data.map((hero: { id: string }) => ({
    id: hero.id,
  }));
}

export default async function HeroPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const heroes = await getHeroesData();

  return <HeroesCarousel heroes={heroes.data} activeId={id} />;
}
