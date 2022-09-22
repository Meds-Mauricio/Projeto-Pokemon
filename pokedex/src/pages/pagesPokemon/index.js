import Cards from "../../components/Cards";
import Input from "../../components/Input";
import react, { useState, useEffect } from 'react'
import axios from 'axios'

export default function pagesPokemon() {
    const [resposta, setResposta] = useState();
    const [selecionado, setSelecionado] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0.json')

            .then(function (response) {
                console.log(response?.data);
                setResposta(response?.data);
            })
    }, []);
    const click = (pokemon) => {
        setSelecionado([...selecionado, pokemon])
        localStorage.setItem('selecionado', JSON.stringify(selecionado))
        // window.location.href = "/cadastro"

    }
    // export default function pagesPokemon() {
    //     const click = () => {
    //         window.location.href = "/home"
    //     }
    return (
        <>
            <div className="containerPage">
                {/* <Input /> */}
            </div>
            <div className="Cards">
                <Cards />
            </div>
        </>

    );
} 
