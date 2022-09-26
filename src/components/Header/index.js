import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'

const Header = () => {
    const [usd, setUsd] = useState()
    const [eur, setEur] = useState()

    const getPrice = (currency) => axios.get(`https://v6.exchangerate-api.com/v6/499fe1f958491e801322d0e8/pair/${currency}/UAH`).then(res => res.data.conversion_rate.toFixed(2))

    useEffect(async () => {
        setUsd(await getPrice('USD'))
        setEur(await getPrice('EUR'))
    }, [])

    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <span>$ {usd} uah</span>
                <span>€ {eur} uah</span>
            </div>
        </div>
    )
}

export default Header