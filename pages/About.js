import Image from "next/image"
import styles from '../styles/About.module.css'
export default function About(){
   return(
   <div className={styles.about}>
    <h1>Sobre o projeto Pokenext</h1>
    <p>Este é um projeto criado com Next.js utilizando a API de Pokemons para gerar uma lista de Pokemons na página principal. Cada Pokemon tem um link que redireciona a uma rota dinâmica com mais detalhes do Pokemon</p>
    <Image src='/images/charizard.png' width='300px' height='300px' alt="pokemon" ></Image>
   </div>
   )
}