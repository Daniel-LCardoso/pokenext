import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
export default function Navbar(){

    return(

        <navbar className={styles.navbar}>
            <div className={styles.logo}>
          <Image 
          src='/images/pokeball.png' 
          height='30' 
          width='30' 
          alt='pokenext'>

          </Image>
          <h1>Pokenext</h1>
          </div>
          <ul className={styles.link_items}>
            <li>
                <Link href={'/'}><a>Home</a></Link>
                
            </li>
            <li>
            <Link href={'/About'}><a>Sobre</a></Link>
            </li>
            
          </ul>
          

        </navbar>
    )
}