import Style from "./Style.module.css"

export default function Cards({ nome, imagem }) {
    return (
        <section className={Style.containerCard}>
            <div className={Style.cardNome}>
                <span className={Style.Pokenome}>{nome}</span>
            </div>
            <div className={Style.cardImg}>
                <img src={imagem} />
            </div>
        </section>
    )
}