// import React from 'react'
// import Card from './components/Card'

// const App = () => { 
//   // const animals =["dogs","cats","monkey","rat","lion"]
//   // const fruits = ["apple","loud","grape","coconut","mango"]

//   let img1="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/367108/1.jpg?1265"
//   let img2="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/745887/1.jpg?1158"
//   let img3="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/7614941/1.jpg?8154"
//   let img4="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/7741722/1.jpg?2511"
//   let img5="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/9360511/1.jpg?4608"

//   let tittle1="Power bank"
//   let tittle2="Smart Watch"
//   let tittle3="Phone"
//   let tittle4="Ear pods"
//   let tittle5="earpods pro"

//   const clntn = () => {
//     prompt("enter your name")
//   }
//   const cltn =() =>{
//     console.log("clinton")
//   }
//   return (
//     <>
//     {/* {
//        fruits.map(a  => (
//         <ul><li >{a}</li></ul>
//       ))
//     } */}
//     <div className='d-flex'>
//     <Card img={img1} title={tittle1}/>
//     <Card img={img2} title={tittle2}/>
//     <Card img={img3} title={tittle3}/>
//     <Card img={img4} title={tittle4}/>
//     <Card img={img5} title={tittle5}/>
//    </div>
//    <div>
//    <button onClick={cltn}>button1</button>
//     <button onClick={clntn}>button2</button>
//    </div>
//     </>
    
//   )
// }

// export default App
import React from 'react'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App