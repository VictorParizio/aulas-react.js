import { React, useState } from "react";
import { useParams } from 'react-router-dom'

export default function About() {

    let {servico, teste} = useParams()

    const [servicos] = useState([
        'Desenvolvimento Web',
        'Desenvolvimento Mobile',
        'Desktop'
    ])
    return (
        <section className="container">
            <div className="row justify-content-center mt-3">
                <div className="col-8 card bg-info text-center p-3">
                    <h5>Serviços:</h5>
                    <h4>{servicos[servico]}</h4>
                    <p>{teste}</p>
                </div>
            </div>
        </section>
    )
}