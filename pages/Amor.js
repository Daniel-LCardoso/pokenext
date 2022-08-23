import styles from '../styles/Amor.module.css'
import Image from "next/image"
export default function Amor(){
    return(
        <div className={styles.amor}>
        <Image src='/images/coracao.png' width='300px' height='300px' alt="coracao"></Image>
        <h1>Te amo amor!</h1>
        </div>)
}