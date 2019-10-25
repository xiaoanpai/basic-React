import React from 'react'

const Instructions = ({ title, steps }) =>
    <section className="instructons">
        <h2>{title}</h2>
        {steps.map((s, i) =>
            <p key={i}>{s}</p>
        )}
    </section>

export { Instructions }