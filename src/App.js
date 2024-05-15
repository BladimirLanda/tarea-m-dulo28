import { useEffect, useState } from "react";
import FilteredList from "./components/FilteredList";
import SearchBox from "./components/SearchBox";
import "./style.css";

function App() {
  //FilderedList
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const fetchAlumnos  = async () => {
      const response = [
        {id: 1, name: "Bladimir", grado: "6"},
        {id: 2, name: "Galy", grado: "6"},
        {id: 3, name: "Michelle", grado: "1"},
        {id: 4, name: "Carlos", grado: "4"},
        {id: 5, name: "Ximena", grado: "4"},
        {id: 6, name: "Juan", grado: "1"},
        {id: 7, name: "Maria", grado: "1"},
        {id: 8, name: "Paula", grado: "4"},
        {id: 9, name: "Rosio", grado: "6"},
        {id: 10, name: "Marco", grado: "6"},
        {id: 11, name: "Juan", grado: "3"},
        {id: 12, name: "Mirely", grado: "3"},
        {id: 13, name: "Karen", grado: "2"},
        {id: 14, name: "Fany", grado: "5"},
        {id: 15, name: "Uriel", grado: "5"},
        {id: 16, name: "Fabian", grado: "2"},
      ];

      setAlumnos(response);
    };

    fetchAlumnos();
  }, []);

  //SearchBox
  const [box, setBox] = useState({
    boxSearch: '',
  });


  const handleInputChange = (e) => {
    setBox(prev => ({...prev, [e.target.name]: e.target.value}))
  };

  //Return
  return (
    <div className="App">
      <SearchBox boxValue={box.boxSearch} functionUp={(e) => handleInputChange(e)}/>
      <FilteredList list={alumnos} search={box.boxSearch}/>
    </div>
  );
}

export default App;
