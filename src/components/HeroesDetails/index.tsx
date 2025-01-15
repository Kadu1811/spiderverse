import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./heroesDetails.module.scss";
import { Quicksand } from "next/font/google";
import Image from "next/image";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface IProps {
  data: IHeroData;
}

export default function HeroDetails({ data }: IProps) {
  const { id, name, universe, fullname, birthday, homeland, height, weight } =
    data;

  return (
    <div className={quicksand.className}>
      <h1 className={`${spidermanFont.className} ${styles.title}`}>
        {name} (Universo-{universe})
      </h1>

      <div className={styles.details}>
        <h2 className={styles.subtitle}>Informações</h2>

        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>Nome Completo</td>

              <td>{fullname}</td>
            </tr>

            <tr>
              <td className={styles.label}>Data de Nascimento</td>

              <td>
                {new Date(birthday as string).toLocaleDateString("pt-br")}
              </td>
            </tr>

            <tr>
              <td className={styles.label}>Terra Natal</td>

              <td>{homeland}</td>
            </tr>

            <tr>
              <td className={styles.label}>Altura</td>

              <td>{height.toFixed(2)}m</td>
            </tr>

            <tr>
              <td className={styles.label}>Peso</td>

              <td>{weight.toFixed(2)}kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.details}>
        <h2 className={styles.subtitle}>Primeira Aparição</h2>

        <Image
          src={`/spiders/${id}-comic-book.png`}
          alt={`Primeira aparição nos quadinhos de ${name} no universo ${universe}`}
          width={80}
          height={122}
        />
      </div>
    </div>
  );
}
