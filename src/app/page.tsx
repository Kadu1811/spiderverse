import { HeroesList } from "@/components";
import { heroesInfoData } from "./api/heroes/heroes";

// async function getHeroesData(): Promise<IHeroData> {
//   const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

//   if (!res.ok) {
//     throw new Error("Failed to request heroes list");
//   }

//   return res.json();
// }

export default async function Home() {
  // const heroes = await getHeroesData();

  return <HeroesList heroes={heroesInfoData} />;
}
