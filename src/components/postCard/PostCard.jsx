import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/13182836/pexels-photo-13182836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.title}>Title</h2>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          facilis nobis asperiores aut. Amet a sapiente officiis praesentium
          dicta, corrupti saepe. Accusantium ducimus beatae adipisci dolore
          maxime porro optio iure?
        </p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
