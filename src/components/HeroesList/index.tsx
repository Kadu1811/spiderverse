import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./heroesList.module.scss";

interface IProps {
  heroes: IHeroData[];
}

const HeroesList = ({ heroes }: IProps) => {
  return (
    <>
      <h1 className={`${spidermanFont.className} ${styles.title}`}>Spiders</h1>
    </>
  );
};

export { HeroesList };
