import React, { useState, useEffect } from 'react'
import Style from "./Style.module.css"
import axios from 'axios';

export default function Input() {
    const [data, setData] = useState();
    const [detalhes, setDetalhes] = useState(false);
    const [valores, setValores] = useState();

    const click = () => {
        window.location.href = "/pagePokemon"
    }
    const Search = (name) => {
        setDetalhes(true);
        useEffect(() => {
            axios
                .get(
                    `https://pokeapi.co/api/v2/pokemon/${name}`,{}
                )
                .then((preview) => {
                    setDetalhes(preview.data);
                    console.log(preview.data, 'CONEXÃO RESPOSTA');
                })
        }, []);
    }

    return (
        <>
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
                                    <p className={Style.InfoId}>{valores?.name} {valores?.id}</p>
                                </div>
                                {valores?.stats?.map((stats) => {
                                    // console.log(stats, "hp")
                                    return (
                                        <div className={Style.pokeInfo}>
                                            <p className={Style.pokeHp}>{stats.stat.name}=
                                                {stats.base_stat}</p>

                                            {/* {console.log(stats.base_stat.stat, "alo")} */}
                                        </div>
                                    )

                                }
                                )}
                                {valores.abilities.map((abilities) => {
                                    // console.log(abilities, "habilidades")
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
                <form>
                    <div className={Style.pokeSearch}>
                        <input onChange={(e) => (e.target.value)} placeholder='Nome do Pokemon' />
                        <button
                            className={Style.open}
                            onClick={(e) => {
                                e.preventDefault('Search'),
                                    Search()
                                setValores(true)
                                Search()
                            }}>Search</button>
                        <a className={Style.voltar} href="/pagePokemon">Open</a>
                    </div>
                </form>
            </section>
        </>
    )
}