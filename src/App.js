import "./App.css";
import React, {useEffect, useState} from "react";
import Item from "./components/Item/Item";

function App() {
    // функция для проверки отзывчивости формы и её работоспособности
    // const log = (e) => {
    //     e.preventDefault()
    //     console.group()
    //     console.log(title)
    //     console.log(color)
    //     console.groupEnd()
    // }




  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('items'))
        setItems([...data])
    }, [])

    useEffect(() =>localStorage.setItem('items', JSON.stringify(items)), [items])

    const deleteI = (n) => {
         setItems(items.filter(p => n.color !== p.color))
        console.log(n)
    }
    // функция для создания нового элемента
    const newItem = (e) => {
        e.preventDefault()
        if ( title !== '' && color !== '')
         {
            const newI = {
                title, color
            }
            setItems([...items, newI])
            setColor('')
            setTitle('')
            console.log(items)
        } else {alert("empty")}
    }



    //
  return (
      <div>
        <h1
            style={{
              textAlign: "center",
              marginTop: "50px",
              marginBottom: "70px",
              border: "1px solid black",
            }}
        >
          Color Picker
        </h1>
        <form>
          <input type="text" placeholder="Choose name of your color" value={title} onChange={e => setTitle(e.target.value)}/>
          <input type="color" value={color} onChange={e => setColor(e.target.value)}/>
        </form>
        <button type="submit" onClick={e => newItem(e)}>Create</button>

        {/*list of created colors*/}

        <div style={{display:"flex", flexWrap:'wrap'}}>
          {items.map((n, i) =>
              <Item n={n} remove={deleteI} key={i}/>
          )}
        </div>
        <div>
        </div>
      </div>
  );
}

export default App;
