import React, {useState} from 'react';

const Person =()=>{

  const [personList, setpersonlist] = useState([

    {id:'01', Name:'Buda', Email:'Bhuyan', Action:'Jamshedpur'},
    {id:'02', Name:'Somendra', Email:'Bhuyan', Action:'Jamshedpur'},
    {id:'03', Name:'Pankaj', Email:'Bhuyan', Action:'Jamshedpur'},
    {id:'04', Name:'Krish', Email:'Bhuyan',  Action:'Jamshedpur'},

]);

return (     

  <div >
  <table className='table table-dark' border='1'>
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
          <button type='button' className='btn btn-primary' >Delete</button>
          <button type='button' className='btn btn-primary' >Edit</button>          
      </>
  )
}


const TableRow = (props) => {  // props.studentList you can access the studentList variable then through the map function try to create a dynamic row

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
                              {element.Name}
                          </td>
                          <td>
                              {element.Email}
                          </td>
                          
                          <td>
                              <TableAction />
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