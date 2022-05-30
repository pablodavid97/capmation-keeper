import React, {useEffect, useState} from 'react';
import Note from './Note';
import configData from '../config.json';

function List(){
 const [list, setList] = useState([]);
 const url = `${configData.SERVER_URL}/cards`;

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