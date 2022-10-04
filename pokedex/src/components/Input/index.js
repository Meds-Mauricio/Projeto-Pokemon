import React, { useState, useEffect } from 'react'
import Style from "./Style.module.css"

export default function Input() {
    const [data, setData] = useState();
    const [detalhes, setDetalhes] = useState(false);
    const [valores, setValores] = useState();

    const click = () => {
        window.location.href = "/pagePokemon"
    }
    const click1 = () => {
        const Search = () => {
            href = "/modal"
            const Modal = (id) => {
                setDetalhes(true);
    // useEffect(() => {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`, {}
    //     )
    //         .then((preview) => {
    //             setValores(preview.data);
    //             console.log(preview.data);
    //         })


    // }, []);
    return (
        <>
            {/* <div className={Style.pokeNomes}>
                            <div className={Style.pokeInfo1}>
                                <p className={Style.InfoId}>{valores.name} {valores.id}</p>
                            </div>
                            {valores.stats.map((stats) => {
                                console.log(stats, "hp")
                                return (
                                    <div className={Style.pokeInfo}>
                                        <p className={Style.pokeHp}>{stats.stat.name}=
                                            {stats.base_stat}</p>

                                        {console.log(stats.base_stat.stat, "alo")}
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
                        <img className={Style.imgPok} src={valores.sprites.other.dream_world.front_default} /> */}

           
        </>
         


    )}
    <form>
         <div className={Style.pokeSearch}>
             <input onChange={(e) => (e.target.value)} placeholder='Nome do Pokemon' />
             <button className={Style.open} click1 onClick={(e) => { e.preventDefault(Search) }}>Search</button>
             <button class={Style.search} href="/Modal" onClick={click}>Open</button>
         </div>
     </form>





        }}}