import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/Cards'
import Input from '../components/Input'

export default function Home() {
    const click = () => {
        window.location.href = "/#"
    }
    
    return (
        <section className='home'>
            <div className='pokeHome'>
                <Input/>
            </div>
        </section>

    )
}
