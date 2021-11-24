import { useEffect, useState } from 'react'
import { HeaderResponsive } from '../../Components/HeaderResponsive'
import { useParams } from 'react-router-dom'
import { api } from '../../Api'
import './style.css'

export function Personagem() {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const [dateCreated, setDataCreated] = useState(null)

    useEffect(() => {
        const load = async() => {
            let response = await api.getCharacterById(id)
            setData(response)
            let data_criacao = new Date(response.created)
            data_criacao = data_criacao.toLocaleDateString('pt-br')
            setDataCreated(data_criacao)
        }
        load()
    }, [id])
    return (
        <>
            <HeaderResponsive />
            <div className="personagem-container">
                {data && (
                    <div className="full-info-data-container">
                        <img src={data.image} alt={data.name} />
                        <div className="info-data-container">
                            <h1>Informações completas</h1>

                            <div>
                                <p>Nome:</p>
                                <span>{data.name}</span>
                            </div>

                            <div>
                                <p>Estado:</p>
                                <span>{data.status}</span>
                            </div>
                            
                            <div>
                                <p>Espécie:</p>
                                <span>{data.species}</span>
                            </div>

                            <div>
                                <p>Gênero:</p>
                                <span>{data.gender}</span>
                            </div>

                            <div>
                                <p>Visto pela primeira vez em:</p>
                                <span>{data.origin.name}</span>
                            </div>

                            <div>
                                <p>Visto pela última vez em:</p>
                                <span>{data.location.name}</span>
                            </div>

                            <div>
                                <p>Criado em:</p>
                                <span>{dateCreated}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}