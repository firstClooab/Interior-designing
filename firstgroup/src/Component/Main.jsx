import React from 'react'
import Header from './Header'
import Carousal from './Carousal'
import Crafted from './Crafted'

export default function Main() {
  return (
    <div style={{backgroundColor:"#F0F2F1"}}>
     <Header></Header>
     <Carousal></Carousal>
     <Crafted></Crafted>
    </div>
  )
}
