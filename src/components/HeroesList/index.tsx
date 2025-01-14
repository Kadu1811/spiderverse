"use client";

import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./heroesList.module.scss";
import { HeroPictures } from "../HeroPictures";

import { motion } from "framer-motion";

interface IProps {
  heroes: IHeroData[];
}

const HeroesList = ({ heroes }: IProps) => {
  return (
    <>
      <motion.h1
        className={`${spidermanFont.className} ${styles.title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        Spiders
      </motion.h1>

      <motion.section
        className={styles.heroes}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {heroes.map((hero, i) => (
          <motion.div
            key={i}
            className={`${styles.imageContainer} ${styles[hero.id]}`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <HeroPictures hero={hero} />
          </motion.div>
        ))}
      </motion.section>
    </>
  );
};

export { HeroesList };
