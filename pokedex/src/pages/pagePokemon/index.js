import Style from "./Style.module.css"
import Cards from "../../components/Cards";
import Input from "../../components/Input";
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// function pagePokemon() {
//     const [data, setData] = useState();
//     const [detalhes, setDetalhes] = useState(false);
//     const [valores, setValores] = useState();

//     const modal = (name) => {
//         setDetalhes(true);
//         axios
//             .get(
//                 `https://pokeapi.co/api/v2/pokemon/${name}`,
//             )
//             .then((preview) => {
//                 setValores(preview.data);
//                 console.log(preview.data);
//             })}

//     useEffect(() => {
//         axios
//             .get(
//                 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
//                 {
//                     headers: {},
//                 }
//             )
//             .then((preview) => {
//                 setData(preview.data.results);
//             });
//     }, []);

//     return (
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
//             <header className="header-poklist">
//                 <a className="name-poklist">Lista de Pokemons</a>
//                 <div className="voltar">
//                     <a className="a-voltar" href="/">Voltar</a>
//                 </div>
//             </header>

//             <div className="pokelist">
//                 {
//                     data?.map((pokemon, img) => {
//                         const name = pokemon.name;
//                         return (
//                             <div class="list-pokemons" onClick={() => {
//                                 modal(name);
//                             }}>
//                                 <p className="nome-pok">{pokemon.name}</p>
//                                 <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${img + 1}.png`}/>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </section>
//     )
// }
// export default pagePokemon;
//  export default function pagePokemon() {
//     const [resposta, setResposta] = useState(null);
//     const [selecionado, setSelecionado] = useState([]);


//     useEffect(() => {
//         axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0.json ')
//             .then(function (response) {
//                 console.log(response.data);
//                 setResposta(response.data);
//             })
//     }, []);
//     const click = (pokemon) => {
//         setSelecionado([...selecionado, api])
//         localStorage.setItem('selecionado', JSON.stringify(selecionado))
//         // window.location.href = "/cadastro"

//     }
//     // export default function pagesPokemon() {
//     //     const click = () => {
//     //         window.location.href = "/home"
//     //     }
//     return (
//         <>
//             <section className={Style.containerPrincipal}>
//                 <section className={Style.pokemon}>
//                     {resposta && Object?.values(resposta?.pokemon).map((item) => {
//                         return (
//                             <div className={Style.card}
//                                 onClick={() =>
//                                     click(item)}
//                                 onChange={(e) => setSelecionado(e.target.value)}>
//                                 <p>{item.name}</p>
//                                 <img src={item.imagem} />

//                             </div>
//                         )
//                      })}
//                 </section>
//             </section>
//         </>

//     );
// } 


function pagePokemon() {
    const [data, setData] = useState();
    const [detalhes, setDetalhes] = useState(false);
    const [valores, setValores] = useState();

    const click = (name) => {
        setDetalhes(true);
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${name}`,
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

    // const click = (pokemon) => {
    //     setSelecionado([...selecionado, pokemon])
    //     localStorage.setItem('selecionado', JSON.stringify(selecionado))

    return (
        <>
            <section className={Style.pokeCards}>
                {/* {resposta && Object.entries(resposta).map((item) => { */}
                    return (
                        <div className={Style.pokeLista}>
                            {/* <p>{item.nome}</p> */}
                            {/* <img src={item.imagem} /> */}
                        </div>
                    )
                {/* })} */}
            </section>
        </>

    )
}

export default pagePokemon;