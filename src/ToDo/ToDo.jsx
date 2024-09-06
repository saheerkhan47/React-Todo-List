import { useState } from "react";
import './Todo.css'

export default function ToDo() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  function btnAdd() {
    if (text.trim() !== "") {
      setData([...data, text]);
      setText("");
    }
  }

  function deleteData(index) {
    const updatedDataList = [...data];
    updatedDataList.splice(index, 1);
    setData(updatedDataList);
  }

  function editData(index, value) {
    const updatedDataList = [...data];
    updatedDataList[index] = value;
    setData(updatedDataList);
  }

  return (
    <div className="todo">
      <h1>React To-Do App</h1>
      <div className="Add">
        <input type="text" placeholder="Add Data" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={btnAdd}>Add</button>
      </div>

      <div>
        {data.map((item, index) => (
          <h2 key={index}>
            {editIndex === index ? (
              <div className="view">
                <input type="text" placeholder="Edit Data" value={item} onChange={(e) => editData(index, e.target.value)} />
                <button id="sv" onClick={() => setEditIndex(-1)}>Save</button>
              </div>
            ) : (
              <div className="view">
                {item}
                <button id="et" onClick={() => setEditIndex(index)}> Edit</button>
                <button id="de" onClick={() => deleteData(index)}> Delete</button>
              </div>
            )}
          </h2>
        ))}
      </div>
    </div>
  );
}
