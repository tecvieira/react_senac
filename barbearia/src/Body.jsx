import React from "react";
import FotoHeader from './assets/img/fotoHeader.png'

export function Body() {
    return (
        <section >
            <img src={FotoHeader} alt="Foto Header" className="w-100" style={{ height: '300px', objectFit: 'cover' }} />
        </section>
    )
}