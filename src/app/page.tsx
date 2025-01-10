import { HeroesList } from "@/components";
import { heroesInfoData } from "./api/heroes/heroes";
import styles from "./page.module.scss";

// ENDPOINT IS RECIEVING ERROR 500 SERVE IS DOWN

// async function getHeroesData(): Promise<IHeroData> {
//   const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

//   if (!res.ok) {
//     throw new Error("Failed to request heroes list");
//   }

//   return res.json();
// }

export default async function Home() {
  // const heroes = await getHeroesData();

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroesInfoData} />
    </main>
  );
}
