import React, { useEffect, useState } from 'react';
import { HiSearch } from 'react-icons/hi'
import HeaderResponsive from "../../Components/HeaderResponsive";
import api from '../../Api';

function Personagens() {
    const [data, setData] = useState(null)
    const [name, setName] = useState('')
    
    useEffect(() => {
        async function loadAll() {
            let res = await api.getCharacterByName()
            setData(res.data)
        }

        loadAll()
    }, [data])


    function clickMouse(e) {
        e.preventDefault()
        console.log(data)
    }

    return (
        <div>
            <HeaderResponsive />
            <div className="search-container">
                <form onSubmit={clickMouse}>
                    <input type="text" onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                    <button type="submit">
                        <HiSearch size="30px" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Personagens;