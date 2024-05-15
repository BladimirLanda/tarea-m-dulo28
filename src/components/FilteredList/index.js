import React from 'react';

const FilteredList = ( { list, search } ) => {
    
    return (
        <>
            <h3>El listado aparece a continuación</h3>
            <section>
                {
                    list.map(alumno => {
                        const {id, name, grado} = alumno;
                        const boxElement = document.getElementById("text").value;
                        if (boxElement == "name") {
                            return (
                                <article key={id}>
                                    <ul>
                                        <li>El nombre del alumno es: {name} --- {search}</li>
                                    </ul>
                                </article>
                            )
                        }
                        else if (boxElement == "grado") {
                            return (
                                <article key={id}>
                                    <ul>
                                        <li>Los grados de los alumnos son: {grado} --- {search}</li>
                                    </ul>
                                </article>
                            )
                        }
                        else {
                            return (
                                <article key={id}>
                                    <ul>
                                        <li>El nombre del alumno es: {name}</li>
                                        <li>El grado del alumno es: {grado}</li>
                                    </ul>
                                </article>
                            )
                        }
                    })
                }
            </section>
        </>
    )
}

export default FilteredList;