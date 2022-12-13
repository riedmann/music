import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Navbar.module.css'

type Props = {}
const nav = [
    { name: "Home", link: "/", isActive: true },
    { name: "Produkte", link: "/products", isActive: false },
    { name: "Partner", link: "/partners", isActive: false },
    { name: "Öffnungszeiten", link: "/about", isActive: false }
];
export default function Navbar({ }: Props) {
    const [navArr, setNavArr] = useState(nav)

    const setActive = (name: string) => {
        nav.forEach(element => {
            if (element.name === name) {
                element.isActive = true;
            } else {
                element.isActive = false;
            }
        });
        setNavArr(nav);
    }
    return (
        <div className={styles.navbar}>
            <ul>
                {nav.map((el) => (<li key={el.name}><Link href={el.link} style={el.isActive ? { color: "red" } : { color: "grey" }} onClick={() => { setActive(el.name) }}>{el.name}</Link></li>))}
            </ul>
            <div>
                Logo
            </div>


        </div>
    )
}