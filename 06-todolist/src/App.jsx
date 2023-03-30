import React, { useState, useRef } from "react";

export default function App() {

    const [listaTarefas, setListaTarefas] = useState(() => {
        return []
    })
    const [tarefa, setTarefa] = useState(() => {
        return ''
    })

    const idTarefa = useRef(0)
    const inputRef = useRef()

    function adicionarTarefa() {
        if(tarefa === ''){
            return alert('Adicione um texto')
        }
        
        setListaTarefas(old => {
            return [...old, { id: idTarefa.current, texto: tarefa }]
        })
        idTarefa.current++
        setTarefa('')
        inputRef.current.focus()
    }

    function limparTarefas() {
        setListaTarefas(old => {
            return []
        })
        idTarefa.current = 0
    }

    function removerTarefa(id) {
        const tmp = listaTarefas.filter(t =>
            t.id !== id 
        )
        setListaTarefas(tmp)
    }

    return (
        <>
            <h3>Gerenciador de Tarefas</h3>
            <hr />
            <input ref={inputRef} type="text" value={tarefa} onChange={e => setTarefa(e.target.value)} />
            <div>
                <button onClick={adicionarTarefa} >Adicionar</button>
                <button onClick={limparTarefas}>Limpar Tudo</button>
            </div>
            <hr />
            <p>Tarefas:</p>
            {listaTarefas.map((t) => {
                return <p key={t.id}>{t.texto} <span onClick={() => { removerTarefa(t.id) }}> - excluir</span></p>
            })}
        </>
    )
}