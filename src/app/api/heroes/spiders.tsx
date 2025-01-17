import { IHeroData } from "@/interfaces/heroes";

export default async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(`${process.env.API_URL}/api/heroes`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to request heroes list");
  }

  return { data };
}
