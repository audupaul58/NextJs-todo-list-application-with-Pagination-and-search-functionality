import React from 'react'

const bars = ({mypost}) => {
    console.log('data', mypost)
  return (
    <div>
        {
            mypost.map((item, index)=>{
                return (
                    <p key={index}>{item.Name}</p>
                )
            })
        }
    </div>
  )
}

export default bars

