import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Upssss");
  }

  return res.json();
};

const SinglePostPage = async ({params}) => {

  const {slug} = params
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/13182836/pexels-photo-13182836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/13182836/pexels-photo-13182836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Author</div>
            <div className={styles.detailValue}>Denys Tolmachov</div>
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>01.01.2024</div>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
