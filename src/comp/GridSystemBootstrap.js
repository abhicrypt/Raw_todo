import React from 'react'

function GridSystemBootstrap() {
  return (
      <div>
    <div className='container-md'>
        <div className='row' background-color='primary'>
            <div className='col-sm'>1</div>
            <div className='col-sm'>2</div>
            <div className='col-sm'>3</div>
            <div className='col-sm'>4</div>
        </div>
    </div>
    <div className='container'>
        <div className='row'>
            <div className='col-md-8'>MainContent</div>
            <div className='col-md-4'>Sidebar</div>

        </div>

    </div>
        <h2>Gutter</h2>
        <div className='container px-4'>
            <div className='row gx-1'>
                <div className='col'>
                    <div className='p-3 border'>custom column padding</div>
                </div>
                <div className='col'>
                    <div className='p-3 border'>custom coium padding</div>
                </div>
            </div>
        </div>
        
       toggleSubmit ? <><button type="submit">Submit</button></> : <>
          <button type="submit">Edit</button></>
         <br/>

          <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">
  Single toggle
</button>
<br/>

const [toggleSubmit,settoggle] = useState(true) ;

{
<div>
toggleSubmit ? <i class="fa fa-edit add-btn" ></i> :
<i class="fa fa-plus-square" aria-hidden="true"></i> <br/> <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
</div>
}
  </div>
  )
}

export default GridSystemBootstrap