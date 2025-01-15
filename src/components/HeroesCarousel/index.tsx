import { IHeroData } from "@/interfaces/heroes";
import HeroDetails from "../HeroesDetails";

interface IProps {
  heroes: IHeroData[];
  activeId: string;
}

export default function HeroesCarousel({ heroes, activeId }: IProps) {
  return (
    <>
      <h1>carousel {activeId}</h1>

      <HeroDetails data={heroes[0]} />
    </>
  );
}
