// import Head from 'next/head'
// import Image from 'next/image'
import React, { useState } from 'react'
import Input from '../components/Input'



export default function Home() {
    // const click = () => {
    //     window.location.href = "/home"
    // }

    return (
        <section className='home'>
            <div className='pokeHome'>
                <Input />
            </div>
        </section>

    )
}