import axios from 'axios'
import React, { useState } from 'react'
import styles from './Converter.module.css'

const Converter = () => {
    const [input1Value, setInput1Value] = useState('')
    const [input2Value, setInput2Value] = useState('')
    const [from, setFrom] = useState('UAH')
    const [to, setTo] = useState('USD')

    const getPrice = (from, to, amount) => axios.get(`https://v6.exchangerate-api.com/v6/499fe1f958491e801322d0e8/pair/${from}/${to}/${amount}`).then(res => res.data.conversion_result)

    const onChangeInput = async (input, e) => {
        if (input == 1) {
            setInput1Value(e.target.value)
            setInput2Value(await getPrice(from, to, e.target.value))
        } else if (input == 2) {
            setInput2Value(e.target.value)
            setInput1Value(await getPrice(to, from, e.target.value))
        }
    }

    const onSelectChange = async (type, e) => {
        if (type == 'from') {
            setFrom(e.target.value)
            setInput2Value(await getPrice(e.target.value, to, input1Value))
        } else if (type == 'to') {
            setTo(e.target.value)
            setInput2Value(await getPrice(from, e.target.value, input1Value))
        }
    }
    return (
        <div className={styles.converter}>
            <div className={styles.input}>
                <input type="number" value={input1Value} onChange={(e) => onChangeInput(1, e)} />
                <select name="" id="" value={from} onChange={e => onSelectChange('from', e)}>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <div className={styles.input}>
                <input type="number" value={input2Value} onChange={(e) => onChangeInput(2, e)} />
                <select name="" id="" value={to} onChange={e => onSelectChange('to', e)}>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        </div>
    )
}

export default Converter