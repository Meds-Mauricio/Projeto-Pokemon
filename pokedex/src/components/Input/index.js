import Style from "./Style.module.css"

export default function Input() {
    const click = () => {
        window.location.href = "/pagePokemon"
    }
    return (
    <>
        <section className={Style.container}>
            <div className={Style.pokeSearch}>
                <input playceholder='Nome do Pokemon' onChange={(e) => (e.target.value)} />
                <button className={Style.open} onClick={() => Click()}>Search</button>
                <button class={Style.search} href="/pagePokemon" onClick={click}>Open</button>
            </div>
        </section>
    </>

    )
}