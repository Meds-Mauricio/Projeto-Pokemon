import { resolveHref } from "next/dist/shared/lib/router/router";
// import Modal from "../Modal";
import Style from "./Style.module.css"

export default function Input() {
    const [data, setData] = useState();
    const [detalhes, setDetalhes] = useState(false);
    const [valores, setValores] = useState();

    const click = () => {
        window.location.href = "/pagePokemon"
    }
    const Search = () => {
        href = "/modal"
        const Modal = (name) => {
            setDetalhes(true);
useEfect(() => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`, {}
            )
                .then((preview) => {
                    setValores(preview.data);
                    console.log(preview.data);
                })


        }, []);

        return (
            <>
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
                <section className={Style.container}>
                    <div className={Style.pokeSearch}>
                        <input onChange={(e) => (e.target.value)} placeholder='Nome do Pokemon' />
                        <button className={Style.open} onClick={(e) => Search(Modal)}>Search</button>
                        <button class={Style.search} href="/Modal" onClick={click}>Open</button>
                    </div>

                </section>
            </>
        )
    }
    }}