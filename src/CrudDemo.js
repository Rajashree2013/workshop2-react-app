import React, {useEffect, useState} from 'react';
import AlertMessage from './AlertMessage';
import axios from 'axios';

const Person =()=>{

  

   /* const [personList, setpersonlist] = useState([

        {id:'01', Name:'Buda', Email:'Bhuyan', Action:'Jamshedpur'},
        {id:'02', Name:'Somendra', Email:'Bhuyan', Action:'Jamshedpur'},
        {id:'03', Name:'Pankaj', Email:'Bhuyan', Action:'Jamshedpur'},
        {id:'04', Name:'Krish', Email:'Bhuyan',  Action:'Jamshedpur'},
    
    ]);

    const API_URL = "http://localhost:8080/api/v1/person";
    const [personList, setpersonlist] = useState([]);
    const [alert,setAlert] = useState({type: '', message: ''});

    const getAllPeopleAction = async () => {
        await axios.get(API_URL).then(resposne => {
            if(resposne.status === 200){
                setpersonlist(resposne.data);
                setAlert({type: 'alert-success', message: 'Get API Operation is Done!'})
            } else {
                setAlert({type: 'alert-warning', message: 'APE Error ' + resposne.status})
            }
        }).catch(err => {
            setAlert({type: 'alert-danger', message: 'Error'})
        })
    }*/
    const API_URL = "http://localhost:8080/api/v1/person";
    const [personList, setpersonlist] = useState([]);
    
    const getAllPeopleAction = () => {
        axios.get(`${API_URL}`).then(
            (response) =>{
                console.log(response);
                
                setpersonlist(response.data);
            },
            (error) =>{
                console.log(error);
            }
        )
    }

    useEffect(() => {
        getAllPeopleAction();
    },[])

return (     

    <div >
    <table className='table table-dark' border='3'>
    <TableHeader />
    <TableRow personList={personList}/>            
        
    </table>
    </div>
    );
};

const TableHeader = () => {
return ( <thead>
  <tr>
      <th>id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Action</th>     
      
  </tr>
</thead>);

}


const TableAction = () => {
  return (
      <>
          <button type='button' className='btn btn-primary' >Details</button>
          <button type='button' className='btn btn-danger' >Delete</button>
          <button type='button' className='btn btn-warning' >Edit</button>          
      </>
  )
}




const TableRow = (props) => {  

  return(
      <tbody>
          {
              props.personList.map(element => {
                  return(
                      <tr key={element.id}>
                          <td>
                              {element.id}
                          </td>
                          <td >
                          {element.firstName} {element.lastName}
                          </td>
                          <td>
                              {element.title}
                          </td>
                          
                          <td>
                            <button type='button' className='btn btn-primary' >Details</button>
                            <button type='button' className='btn btn-danger' >Delete</button>
                            <button type='button' className='btn btn-warning' >Edit</button> 
                          </td>
                          
                      </tr>
                  )
              }) 
          }
             
      </tbody>
          
  )
}



const CrudDemo= () => {
    return ( 
    <div>
      <h2><Person /></h2>
    </div>);
  }


  export default CrudDemo;