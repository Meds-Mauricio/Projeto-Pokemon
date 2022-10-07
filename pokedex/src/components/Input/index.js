import React, { useState } from 'react'
import Style from "./Style.module.css"

export default function Input() {
    const [detalhes, setDetalhes] = useState();
    const [valores, setValores] = useState(false);

    const click = () => {
        window.location.href = "/pagePokemon"
    }
    const pokeModal = () => {
        setValores(true);
    }
    return (
        <section>
            <div className="Botões">
                <form>
                    <div>
                        <input
                            onChange={(e) => setDetalhes(e.target.value)} placeholder="digite seu Pokemon"
                        />
                        <button
                            text={"Search"} name={() => pokeModal(valores)}
                            onClik={() => {
                                
                                setValores(valores);
                            }}
                        >
                            Search
                        </button>
                    </div>
                </form>
                <div>
                    <button div className="Open"
                        onClick={click}>
                        Open
                    </button>
                </div>
            </div>
        </section>


    );
}















//         <section className={Style.pokeLista}>
//             {resposta && valores && (
//                 <div className={Style.pokeModal}>
//                     <div className={Style.pokeHabilidades}>
//                         <div className={Style.fecharModal} onClick={() => {
//                             setResposta(false);
//                         }
//                         }>X</div>
//                         <div className={Style.pokeNomes}>
//                             <div className={Style.pokeInfo1}>
//                                 <p className={Style.InfoId}>{valores?.name} {valores?.id}</p>
//                             </div>
//                             {valores?.stats?.map((stats) => {
//                                 // console.log(stats, "hp")
//                                 return (
//                                     <div className={Style.pokeInfo}>
//                                         <p className={Style.pokeHp}>{stats.stat.name}=
//                                             {stats.base_stat}</p>

//                                         {/* {console.log(stats.base_stat.stat, "alo")} */}
//                                     </div>
//                                 )

//                             }
//                             )}
//                             {valores.abilities.map((abilities) => {
//                                 // console.log(abilities, "habilidades")
//                                 return (
//                                     <div className={Style.pokeInfo2}>
//                                         <p>{abilities.ability.name}</p>
//                                     </div>
//                                 );
//                             }
//                             )}
//                             {valores.types.map((types) => {
//                                 return (
//                                     <div className={Style.pokeTipo}>
//                                         <p>Type= {types.type.name}</p>
//                                     </div>
//                                 );
//                             }
//                             )}
//                         </div>
//                         <img className={Style.imgPok} src={valores.sprites.other.dream_world.front_default} />

//                     </div>
//                 </div>
//             )}
//             {!showOptions ? (
//                 <>
//                     <div className="Botões">
//                         <button
//                             className="estilização-botãoclick"
//                             onClick={() => setShowOptions(!showOptions)}
//                         >
//                             Click Here
//                         </button>
//                     </div>
//                 </>
//             ) : ((
//                 <div className="Botões">
//                     <form>
//                         <div>
//                             <input
//                                 onClick={(e) => {
//                                     e.target.value;
//                                 }}
//                             />
//                             <button

//                                 className="Enter"
//                                 onClick={() => {
//                                     alert("Esse é o seu Pokemon");
//                                 }}
//                             >
//                                 Enter
//                             </button>
//                         </div>
//                     </form>
//                     <div>
//                         <button div className="all-pokemons" onClick={handleClick}>
//                             All Pokemons
//                         </button>
//                     </div>
//                 </div>
//             ))
//         </section>
//     )
// }




