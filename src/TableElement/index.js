import { Button } from "bootstrap"
import { Form } from "react-bootstrap";
import axios from 'axios';
import {Symbol} from './symbolStyle';

const TableElement = ({id,author,title}) =>{

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:5000/${id}`).then(resp=>{
            window.location.reload(true);
}
        )
    };

    return(
         <tr>
                <td>
                    {author}
                </td>
                <td>
                   {title}
                </td>
                <td>
                    <div onClick={()=>deleteHandler(id)}><Symbol>✘</Symbol></div>
                </td>
     
            </tr>
    );
} ;
export default TableElement;