import { HeroesList } from "@/components/HeroesList";
import styles from "./page.module.scss";
import getHeroesData from "./api/heroes/spiders";

export default async function Home() {
  const heroes = await getHeroesData();

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data} />
    </main>
  );
}
