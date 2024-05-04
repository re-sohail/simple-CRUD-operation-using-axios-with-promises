import React from 'react'

function Item(props){
    return(
        <>
        <div className='w-[250px] h-[300px]'>
            <div className='w-full h-[80%]'>
                <img className='w-full h-full object-cover object-center' src={props.image} alt="" />
            </div>
            <p className='py-2'>{props.name}</p>
            <p>{props.email}</p>
        </div>
        </>
    )
}

export default Item