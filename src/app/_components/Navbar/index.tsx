"use client";
import Link from "next/link";
import { useState } from "react";
import styles from './navbar.module.scss'
import { revalidatePath } from "next/cache";

export interface NavbarProps {
    title: string
}

export const Navbar = ({ title }: NavbarProps) => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    {title}
                </div>
                <div className={styles.menuIcon} onClick={handleShowNavbar}>
                    Menu
                </div>
                <div className={`${styles.navElements}  ${showNavbar && `${styles.active}`}`}>
                    <ul>
                        <li>
                            <Link href="/" legacyBehavior>
                                <a onClick={(e) => revalidatePath("/")}>Inicio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dash" legacyBehavior>
                                <a onClick={(e) => revalidatePath("/dash")}>Planilha</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/bids" legacyBehavior>
                                <a onClick={(e) => revalidatePath("/bids")}>Jogos</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
