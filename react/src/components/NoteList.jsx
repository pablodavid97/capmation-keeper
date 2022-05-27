import React, {useEffect, useState, useRef} from 'react';
import Note from './Note';

function List(){
 const [list, setList] = useState([]);
 const url = 'http://localhost:8080/api/cards';

 useEffect(()=>{
  fetch(url)
    .then(response => response.json())
    .then(setList);
 }, []);

 return (
   <div>
      {list.map(note =>
        <Note key={note._id} title={note.title} text={note.text} />
        )}
    </div>
  );
}

export default List;