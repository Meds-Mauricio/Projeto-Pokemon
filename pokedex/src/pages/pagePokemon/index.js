import Style from "./Style.module.css"
import Cards from "../../components/Cards";
import Input from "../../components/Input";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from "../../components/Modal";


function pagePokemon() {

 const [pokemon, setPokemon] = useState();
    const [data, setData] = useState();
    const [detalhes, setDetalhes] = useState(false);
    const [valores, setValores] = useState();

    const modal = (name) => {
        setDetalhes(true);
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${name}`, {}
            )
            .then((preview) => {
                setValores(preview.data);
                console.log(preview.data);
            })
    }

    useEffect(() => {
        axios
            .get(
                'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
                {
                    headers: {},
                }
            )
            .then((preview) => {
                setData(preview.data.results);
            });
    }, []);
    return (
        <>
            <Modal />

            <div className={Style.pokelist}>

                {data?.map((pokemon, img) => {
                    const name = pokemon.name;
                    return (
                        <div className={Style.listPokemons} onClick={() => {
                            modal(name);
                        }}>
                            <p className={Style.pokeNome}>{pokemon.name}</p>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${img + 1}.png`} />
                        </div>
                    )
                })}

            </div>
            <form>
                <SearchModal
                    text='Abrir'
                    onChange={(e) => setPokemon(e.target.value)}
                    onClick={(e) => { modal(), e.preventDefault(e); }}
                />
                <SearchPokemons
                    text='Pokemon'
                />
            </form>
        </>
    )

}

export default pagePokemon;

    // const [data, setData] = useState();
    // const [detalhes, setDetalhes] = useState(false);
    // const [valores, setValores] = useState();

    // const modal = (name) => {
    //     setDetalhes(true);
    //     axios
    //         .get(
    //             `https://pokeapi.co/api/v2/pokemon/${name}`, {}
    //         )
    //         .then((preview) => {
    //             setValores(preview.data);
    //             console.log(preview.data);
    //         })
    // }

    // useEffect(() => {
    //     axios
    //         .get(
    //             'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
    //             {
    //                 headers: {},
    //             }
    //         )
    //         .then((preview) => {
    //             setData(preview.data.results);
    //         });
    // }, []);

    // return (
    //     <>
    //         <header className={Style.pokeHeader}>
    //             <a className="name-poklist">Lista de Pokemons</a>
    //             <div className="voltar">
    //                 <a className="voltar" href="/">Voltar</a>
    //             </div>
    //         </header>
    //         <section className={Style.pokeLista}>
    //             {detalhes && valores && (
    //                 <div className="modal">
    //                     <div className="habilidades">
    //                         <div className="x" onClick={() => {
    //                             setDetalhes(false);
    //                         }
    //                         }>X</div>
    //                         <div className="valores-nomes">
    //                             <div className="info1">
    //                                 <p>{valores.name}</p>
    //                                 <p className="id-info">{valores.id}</p>
    //                             </div>
    //                             {valores.stats.map((stats) => {
    //                                 console.log(stats, "hp")
    //                                 return (
    //                                     <div className="info">
    //                                         <p className="hp">{stats.stat.name}=</p>
    //                                         <p>{stats.base_stat}</p>

    //                                         {console.log(stats.base_stat.stat, "alo")}
    //                                     </div>
    //                                 )

    //                             }
    //                             )}
    //                             {valores.abilities.map((abilities) => {
    //                                 console.log(abilities, "habilidades")
    //                                 return (
    //                                     <div className="info2">
    //                                         <p>{abilities.ability.name}</p>
    //                                     </div>
    //                                 );
    //                             }
    //                             )}
    //                             {valores.types.map((types) => {
    //                                 return (
    //                                     <div className="tipo">
    //                                         <p>Type= {types.type.name}</p>
    //                                     </div>
    //                                 );
    //                             }
    //                             )}
    //                         </div>
    //                         <img className="img-pok" src={valores.sprites.other.dream_world.front_default} />

    //                     </div>
    //                 </div>
    //             )}


