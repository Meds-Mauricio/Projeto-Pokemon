import Head from 'next/head'
import Image from 'next/image'
import Input from '../src/components/Input'
import styles from '../styles/Home.module.css'

export default function Home() {
    const click = () => {
        window.location.href = "/#"
    }
    return (
        <div className={styles.container}>
            <Input/>
        </div>
    )
}
