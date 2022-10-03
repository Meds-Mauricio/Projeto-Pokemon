import Style from "./Style.module.css"
import Cards from "../../components/Cards";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from "../../components/Modal";


export default function pagePokemon() {
    const [data, setData] = useState();
    const [detalhes, setDetalhes] = useState(false);
    const [valores, setValores] = useState();

    // const Search = () => {
    //     href: "/modal"
    const modal = (name) => {
        setDetalhes(true);
        useEffect(() => {
            axios
                .get(
                    `https://pokeapi.co/api/v2/pokemon/${name}`, {}
                )
                .then((preview) => {
                    setValores(preview.data);
                    console.log(preview.data);
                })




        }, []);
        return (
            <>

                <div className={Style.voltarHome}>
                    <a className={Style.linkVoltar} href="/">Voltar</a>
                    
                </div>

                <section className={Style.pokeLista}>
                    {detalhes && valores && (
                        <div className={Style.pokeModal}>
                            <div className={Style.pokeHabilidades}>
                                <div className={Style.fecharModal} onClick={() => {
                                    setDetalhes(false);
                                }
                                }>X</div>
                                <div className={Style.pokeNomes}>
                                    <div className={Style.pokeInfo1}>
                                        <p className={Style.InfoId}>{valores.name} {valores.id}</p>
                                    </div>
                                    {valores.stats.map((stats) => {
                                        return (
                                            <div className={Style.pokeInfo}>
                                                <p className={Style.pokeHp}>{stats.stat.name}={stats.base_stat}</p>

                                            </div>
                                        )
                                    }
                                    )}
                                    {valores.abilities.map((abilities) => {
                                        console.log(abilities, "habilidades")
                                        return (
                                            <div className={Style.pokeInfo2}>
                                                <p>{abilities.ability.name}</p>
                                            </div>
                                        );
                                    }
                                    )}
                                    {valores.types.map((types) => {
                                        return (
                                            <div className={Style.pokeTipo}>
                                                <p>Type= {types.type.name}</p>
                                            </div>
                                        );
                                    }
                                    )}
                                </div>
                                <img className="img-pok" src={valores.sprites.other.dream_world.front_default} />

                            </div>
                        </div>
                    )}

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


                </section>

            </>
        )

    }}
