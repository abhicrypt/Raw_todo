import React,{useState} from 'react'
// import './App.css';

const Thappatodo = ()=> { 
  const[items,setitems]=useState({
    userName:"",
    email:"",
    mobileNo:"",
    password:"",
});


  const [records,setRecords]=useState([]);
  const handleInput= (e) => {
    const name =e.target.name;
    const value =e.target.value;
    console.log(name,value);

    setitems({ ...items, [name] : value });
     
  } 
  // -----------------------------------------------------------------
  const deleteItems=(id)=>{
    console.log("clickid",id);
    const update = records.filter((cur)=>{
      return cur.id !==id;
    })
    setRecords(update);
  };
  //--------------------------------------------------------------------
    const addItem=()=>{
      if (!records){
        alert("plz fill Data");
      }else if(records && !toggleSubmit){
        setitems(
          items.map((curE)=>{
              if(curE.id===isEdit){
                return{...curE,name:records}
              }
              return curE; 
          })
        )
          //setToggleSubmit(false); //same
          //setRecords('');       //to remove input element after editing and adding
          //setIsEdit(null);      //same

        }else{
        const allInputData={id:new Date().getTime.toString(),name:records}
        setitems([...items,allInputData]);
        setRecords('')
      }
    } 
 
 
  const [toggleSubmit,setToggleSubmit]=useState(true);
  const [isEdit,setIsEdit]=useState(null);
  const editItems=(id)=>{
      let newEdititems=records.find((curE)=>{
        return curE.id==id
      });
      console.log(newEdititems);
      setToggleSubmit(false);

      setRecords(newEdititems.name);
      setIsEdit(id);
      


    }
  //----------------------------------------------------------------------
   const submitForm=(e)=>{
    e.preventDefault();

    const newRecord = {...items, id:new Date().getTime().toString()}
    console.log(records);
    setRecords([...records,newRecord]);
    console.log(records);
   }

  return (
    <div>
      <form onSubmit={submitForm} >
        <div>
          <label htmlFor='UserName'>userName</label>
          <input type="text" name ="userName"
          value={items.userName}
          onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor='email'>email</label>
          <input type="email" name="email"
          value={items.email}
          onChange={handleInput}/>
        </div>
        <div>
          <label htmlFor='mobileNo'>mobileNo</label>
          <input type="number" name="mobileNo"
          value={items.mobileNo}
          onChange={handleInput}/>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type="password" name="password"
          value={items.password}
          onChange={handleInput}
          />
        </div>
         <div>
          toggleSubmit ? <> <button type="submit">Submit</button></> : <>
          <button type="submit">EditItems</button></>


        </div>
        {/* <button type="submit">Login</button>  */}

      </form>
      
      <table className="table mt-3 col-md-8"  >
      
          <thead>
          {/* <tr>
            <th>userName</th>
            <th>emailId</th>
            <th>MobileNo</th>
            <th>Password</th>
          </tr> */}
        
         <div className='container-md'>
        <div className='row' background-color='primary'>
            <div className='col-sm'>userName</div>
            <div className='col-sm'>Email</div>
            <div className='col-sm'>MobileNo</div>
            <div className='col-sm'>Password</div>
            <div className='col-sm'>Actions</div>
            <div className='col-sm'>Actions</div>
        </div>
    </div> 
    </thead>  
        <tbody>
            
      {
        records.map((curE) =>{
          return(<div  key={curE.id}>

            {/* <tr key={curE.id}>
            <td>{curE.userName}</td>
            <td>{curE.email}</td>
            <td>{curE.mobileNo}</td>
            <td>{curE.password}</td>
             
            </tr> */}
        <div className='container-md'>
        <div className='row' background-color='primary'>
            <div className='col-sm'>{curE.userName}</div>
            <div className='col-sm'>{curE.email}</div>
            <div className='col-sm'>{curE.mobileNo}</div>
            <div className='col-sm'>{curE.password}</div>
            <div className='col-sm'>{curE.editItems}<button className='btn btn-primary' onClick={()=>editItems(curE.id)}>Edit</button></div>
            <div className='col-sm'>{curE.deleteItems}<button onClick={()=>deleteItems(curE.id)}  >Delete</button></div> 
            
        </div>
          </div> 
            </div>
            
          )
         
        })
      }
  
       
        </tbody>
      </table>
    </div>
  )
}

export default Thappatodo;