import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Início"
        subtitle="Página inicial do projeto em React.">
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar a construção
            de um CRUD desenvolvido em React!</p>
    </Main>