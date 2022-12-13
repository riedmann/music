import React from 'react'
import styles from './ProductCard.module.css'

type Props = { name: string, inventory: number };

export default function ProductCard({ name, inventory }: Props) {
  const random = Math.floor(Math.random()*5000);
  const url = "https://picsum.photos/300/200?id="+random;
  return (
    <div className={styles.card}>
      <div className={styles.cardimage} style={{ height: "150px", backgroundImage: "url('" + url + "'" }}></div>
      <div className={styles.cardtext}>
        <h2>{name}</h2>
        <h3>Bestand: {inventory}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sit omnis consequatur molestias! Vero, eveniet hic impedit obcaecati eius doloribus doloremque .</p>
      </div>
    </div>
  )
}