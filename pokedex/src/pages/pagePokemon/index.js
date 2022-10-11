import Style from "./Style.module.css"
import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function pagePokemon() {
    const [data, setData] = useState();
    const [detalhes, setDetalhes] = useState(false);
    const [valores, setValores] = useState();

    const modal = (pokemons) => {
        setDetalhes(true);
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${pokemons}`,
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
                // {
                //     headers: {},
                // }
            )
            .then((preview) => {
                setData(preview.data.results);
            });
    }, []);



    return (
        <section className={Style.container}>
            <>
                <a className={Style.linkVoltar} href="/">Voltar</a>
            </>
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
                                            <p className={Style.pokeHp}>{stats.stat.name}=
                                                {stats.base_stat}</p>

                                        </div>
                                    )

                                }
                                )}
                                {valores.abilities.map((abilities) => {
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
                            <img className={Style.imgPok} src={valores.sprites.other.dream_world.front_default} />

                        </div>
                    </div>
                )}

                <div className={Style.pokelist}>
                    {
                        data?.map((pokemon, img) => {
                            const name = pokemon.name;
                            return (
                                <div className={Style.listPokemons} onClick={() => {
                                    modal(name);
                                }}>
                                    <p className={Style.pokeNome}>{pokemon.name}</p>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${img + 1}.png`} />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </section>
    )
}