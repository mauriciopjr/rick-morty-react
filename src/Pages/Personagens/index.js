import React, { useState} from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { HeaderResponsive } from '../../Components/HeaderResponsive'
import { api } from '../../Api'
import './style.css'
import { Card } from '../../Components/Card'


export function Personagens() {
    const [data, setData] = useState(null)
    const [name, setName] = useState('')

    async function load() {
        let res = await api.getCharacterByName(name)
        setData(res)
    }

    function searchCharacter(e) {
        e.preventDefault()
        setData(null)
        if (name) {
            load()
        }
    }

    return (
        <div>
            <HeaderResponsive />
            <div className="search-container">
                <form onSubmit={searchCharacter}>
                    <div>
                        <input type="text" placeholder="nome do personagem" onChange={(e) => {
                            setName(e.target.value)
                        }} />
                        <button type="submit">
                            <HiOutlineSearch size="30px"/>
                        </button>    
                    </div>
                </form>
            </div>
            <div className="results-container">
                {data && ((data.error) ? <p>Busca não encontrada</p> : 
                (data.results.map((item, key) => {
                    return <Card id={item.id} img={item.image} name={item.name} />
                })))}
            </div>
        </div>
    )
}
