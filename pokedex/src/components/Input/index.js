// import styles from styles/Home.module.css'

export default function Input() {
    const click = () => {
        window.location.href = "/#"
    }
    return (
        <div className='container'>
            <div className='pokeseach'>
                <input playceholder='Nome do Pokemon' onChange={(e) => (e.target.value)} />
                {/* <button onClick={() => Click()}>Seach</button> */}
                <button className="submit" href="#" onClick={click}>Search</button>
            </div>
        </div>
    )
}