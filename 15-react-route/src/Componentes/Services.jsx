import React from "react"
import { Link, Routes, Route } from 'react-router-dom'

export default function Services() {
    return (
        <section className="container">
            <div className="row justify-content-center mt-3">
                <div className="col-8 card bg-light text-center p-3">
                    <h2>Services!</h2>

                    <Routes>
                        <Route path="service1" element={<h3>Serviço 1</h3>} />
                        <Route path="service2" element={<h3>Serviço 2</h3>} />
                        <Route path="service3" element={<h3>Serviço 3</h3>} />
                    </Routes>

                    <Link to='/about/servico'>About</Link>
                </div>
            </div>
        </section>
    )
}