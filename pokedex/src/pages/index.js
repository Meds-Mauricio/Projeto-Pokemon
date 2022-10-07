// import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Input from '../components/Input'
import axios from 'axios'

export default function Home() {
    const [resposta, setResposta] = useState();
    const [valores, setValores] = useState();
    const [data, setData] = useState();
    const [detalhes, setDetalhes] = useState(false);

  
    const pokeModal = (pokemons) => {
        setDetalhes(true);
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${pokemons}`,
            )
            .then((preview) => {
                setValores(preview.data);
                console.log(preview.data);
            })}

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
        <section className='pokeHome'>
            {detalhes && valores && (
                <div className={Style.pokeModal}>
                    <div className={Style.pokeHabilidades}>
                        <div className={Style.fecharModal} onClick={() => {
                            setValores(false);
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
            <div className='logo'>
                <div className='pokeHome1'>
                    <Input />
                </div>

            </div>

        </section>

    )

}