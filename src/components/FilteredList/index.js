import React from 'react';

const FilteredList = ( { list, search } ) => {
    
    return (
        <>
            <h3>El listado aparece a continuación</h3>
            <section>
                {
                    list.map(alumno => {
                        const {id, name, grado} = alumno;
                        if (search == name) {
                            console.log(search);
                            return (
                                <article key={id}>
                                    <ul>
                                        <li>El nombre del alumno es: {name}</li>
                                        <li>El grado del alumno es: {grado}</li>
                                    </ul>
                                </article>
                            )
                        }
                        else if (search == grado) {
                            console.log(search);
                            return (
                                <article key={id}>
                                    <ul>
                                        <li>El nombre del alumno es: {name}</li>
                                        <li>El grado del alumno es: {grado}</li>
                                    </ul>
                                </article>
                            )
                        }
                        else if (search == "nombre") {
                            console.log(search);
                            return (
                                <article key={id}>
                                    <ul>
                                        <li>El nombre del alumno es: {name}</li>
                                    </ul>
                                </article>
                            )
                        }
                        else if (search == "grado") {
                            console.log(search);
                            return (
                                <article key={id}>
                                    <ul>
                                        <li>El grado del alumno es: {grado}</li>
                                    </ul>
                                </article>
                            )
                        }
                        else if (search == "") {
                            return (
                                <article key={id}>
                                    <ul>
                                        <li>El nombre del alumno es: {name}</li>
                                        <li>El grado del alumno es: {grado}</li>
                                    </ul>
                                </article>
                            )
                        }
                        else {
                            console.log("No definido");
                        }
                    })
                }
            </section>
        </>
    )
}

export default FilteredList;