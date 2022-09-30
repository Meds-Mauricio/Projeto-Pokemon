// import Style from "./Style.module.css"
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// function Modal() {
//     const [data, setData] = useState();
//     const [detalhes, setDetalhes] = useState(false);
//     const [valores, setValores] = useState();

//     const pokeModal = (name) => {
//         setDetalhes(true);
//         axios
//             .get(
//                 `https://pokeapi.co/api/v2/pokemon/${name}`, {}
//             )
//             .then((preview) => {
//                 setValores(preview.data);
//                 console.log(preview.data);
//             })
//     }

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

    // return (
    //     <>
           

            
    //     </>
    // )

    
// }

// export default Modal;