import Head from 'next/head'
// import Image from 'next/image'
import Input from '../components/Input'

// export default function Home() {
// const click = () => {
//     window.location.href = "/home"
// }

// return (
//     <section className='home'>
//         <div className='pokeHome'>
//             <Input />
//         </div>
//     </section>

// )
// }


import React, { useState } from 'react'
// import Head from 'next/head'
// import Style from './Style.module.css';
import axios from 'axios';
// import SearchPokemons from 'components/Search-Pokemons/searchPokemons';
// import SearchModal from 'components/Search-modal/searchModal';
// import ModalPokemon from 'components/Modal-Pokemon/modalPokemon';

export default function Home() {
    // const [pokemon, setPokemon] = useState<any>();
    const [valores, setValores] = useState  ('');
    const [detalhes, setDetalhes] = useState  (false);

    const modal = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,
            )
            .then((preview) => {
                setValores(preview.data);
                setDetalhes(true)
            })
            .catch(error => {
                alert("Quem é esse pokemon?")
            });
    }

    const itensName = valores?.stats?.slice(0, 3)

    console.log(itensName, 'itensName')

    const itens = valores?.stats?.map((item) => item.base_stat)

    console.log(itens, 'intes')

    console.log(valores, 'dataPokemon')

    return (

        <div className='container'>
            {valores && (
                <ModalPokemon
                    image={valores.sprites.other.dream_world.front_default}
                    name={valores.name}
                    infos={itens.stat?.name}
                    status={itens}
                    onClick={''}
                />
            )}
            <div />

<Input />

            {/* <form className="inicio">
                <SearchModal
                    text='Abrir'
                    onChange={(e) => setPokemon(e.target.value)}
                    onClick={(e) => { modal(), e.preventDefault(); }}
                />
                <SearchPokemons
                    text='Pokemons'
                />
            </form> */}
        </div>
    )
}