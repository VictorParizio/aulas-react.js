import React from "react"
import { Link } from 'react-router-dom'

export default function Services() {
    return (
        <section className="container">
            <div className="row justify-content-center mt-3">
                <div className="col-8 card bg-light text-center p-3">
                    <h2>Services!</h2>
                    <Link to='/about/servico'>About</Link>
                </div>
            </div>
        </section>
    )
}