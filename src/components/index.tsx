import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  heroes: IHeroData[];
}

const HeroesList = ({ heroes }: IProps) => {
  return (
    <>
      <h1>Spiders</h1>
      {heroes.map((hero, i) => (
        <p key={i}>{hero.name}</p>
      ))}
    </>
  );
};

export { HeroesList };
