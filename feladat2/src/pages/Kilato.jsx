import React from 'react'
import { Link } from 'react-router-dom'

export default function Kilato() {
    const kilatok = [
        { varos: "Alsóörs", hely: "Csere-hegyi kilátó" },
        { varos: "Alsóörs", hely: "Somlyó-hegyi kilátó" },
        { varos: "Ábrahámhegy", hely: "Bökk-hegyi kilátó" },
        { varos: "Badacsony", hely: "Kisfaludy kilátó" },
        { varos: "Badacsonyörs", hely: "Folly Arborétum kilátója" },
        { varos: "Balatonalmádi", hely: "Óvári Messzelátó" }
    ]

    return (
        <div className='container'>
            <div className="row">
                <div className="col-6">
                    <div className='row'>
                        <div className='col'>
                            <header>
                                <div className="row">
                                    <h1 className='col text-center'>Balatoni kilátók</h1>
                                </div>
                                <nav className='nav bg-dark justify-content-center'>
                                    <Link className='nav-link link-light' to="/">Kezdőlap</Link>
                                    <Link className='nav-link link-light' to="/kilatok">Kilátók</Link>
                                    <Link className='nav-link link-light' to="/kepek">Képek</Link>
                                </nav>
                            </header>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Város</th>
                                        <th>Kilátó</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kilatok.map(kilato => (
                                        <tr key={kilato.id}>
                                            <td>{kilato.varos}</td>
                                            <td>{kilato.hely}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <p className='col text-center alert alert-dark white'>Készítette: Nagy Eszter Petra</p>
                    </footer>

                </div>
            </div>
        </div>
    )
}
