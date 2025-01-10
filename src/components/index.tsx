import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  heroes: IHeroData[];
}

const HeroesList = ({ heroes }: IProps) => {
  return (
    <>
      <h1>Spiders</h1>
    </>
  );
};

export { HeroesList };
