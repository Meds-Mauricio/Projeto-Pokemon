import React from "react";
import Style from "./Style.module.css"

 const Modal = (Props) => {(image, name, infos, status, onClick) 
    name= string;
    infos= any;
    status= string;
    onClick= any;



    return (
        <section className={Style.modal}>
            <div>
                <img src={image} />
            </div>

            <div className={Style.namePokemon}>{name}</div>
            <div className={Style.pokeInfo}>
                <p>{infos}</p>
                <p>{status}</p>
            </div>
            <div onClick={onClick}>More Datails</div>
        </section>
    )
}

export default Modal;