
import React from "react";
import Style from "./Style.module.css" 

export default function SearchModal ({ text, onClick, onChange }: Props) => {
   return (
        <section>
            <S.SearchPokemon
                type='text'
                name='pokemon'
                placeholder="Pokemom"
                onChange={onChange} />

            <button onClick={onClick}>
                {text}
            </button>
        </section>
    )

}