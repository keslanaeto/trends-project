import React from 'react'
import back from '../assets/back.mp4'
import BEMO8845 from '../assets/BEMO8845.MP4'


const Slider = () => {

  const slides =[
    {
      video: "back"

    }
  ]
  return (
    <div>
      <video src={back}></video>
      <video src={BEMO8845}></video>
    </div>
  )
}

export default Slider