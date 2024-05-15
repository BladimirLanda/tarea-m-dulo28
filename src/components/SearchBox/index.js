import React from 'react';

const SearchBox = ( {boxValue, functionUp} ) => {

    return (
        <section className="SearchBox">
            <h1>Sistema de Gestión del Alumnado</h1>
            <form>
                <div>
                    <label>Buscar...</label>
                    <input 
                        id="text"
                        type="text"
                        placeholder="name/grado"
                        name="boxSearch"
                        value={boxValue}
                        onChange={functionUp}
                    />
                </div>
            </form>
        </section>
    )
}

export default SearchBox;