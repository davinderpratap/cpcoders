import React, { useEffect, useState } from 'react'
import Card from './Card';
import './Data.css';
const axios = require('axios');

function Data() {
    const [data, setData] = useState([]);
    const [Value,setValue] = useState('');

    const getData = async () => {
        const data = await axios.get('https://kontests.net/api/v1/all');
        setData(data.data);
    }
    useEffect(() => {
        getData();
    }, []);

    const handleChange=ev=>{
        setValue(ev.target.value);
        }
        const filterData=data.filter(coin=>
        coin.site.toLowerCase().includes(Value.toLowerCase())
        )
    return (
        <div className="fcontainer">
            <div className="search">
            <form className='searchbox1'>
                <label htmlFor="search" >Search Site </label>
                <input className='searchbox' type="text" onChange={handleChange} value={Value} name="search" placeholder="Eg Codeforces"/>
            </form>
            </div>
            {filterData.map((contest) => {
                const { name, url, start_time, end_time, site } = contest;
                return (
                    <>
                        <Card name={name} link={url} stime={start_time} etime={end_time} image={site} />
                    </>
                )
            })}
        </div>
    )
}

export default Data;
