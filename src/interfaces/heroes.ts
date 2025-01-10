export interface IHeroData {
  id: string;
  name: string;
  universe: number;
  details: {
    fullname: string;
    birthday: string | null;
    homeland: string;
    height: number;
    weight: number;
  };
}
