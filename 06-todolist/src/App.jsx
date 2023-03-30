import React, { useState, useRef } from "react";

export default function App() {

    const [listaTarefas, setListaTarefas] = useState(()=> {
        return []
    })
    const [tarefa, setTarefa] = useState(()=> {
        return ''
    })

    const idTarefa = useRef(0)

    function adicionarTarefa(){
        setListaTarefas(old => {
            return [...old, {id: idTarefa.current, texto: tarefa}]
        })
        idTarefa.current++
    }

    function limparTarefas(){
        setListaTarefas(old => {
            return []
        })
        idTarefa.current = 0
    }

    return (
        <>
            <h3>Gerenciador de Tarefas</h3>
            <hr />
            <input type="text" value={tarefa} onChange={e => setTarefa(e.target.value)} />
            <div>
                <button onClick={adicionarTarefa} >Adicionar</button>
                <button onClick={limparTarefas}>Limpar Tudo</button>
            </div>
            <hr />
            <p>Tarefas:</p>
            {listaTarefas.map((t)=>{
                return <p key={t.id}>{t.texto}</p>
            })}
        </>
    )
}