import { useEffect, useState } from "react"

const useDatas = () =>{
          const [breakfast , setBreakfast] = useState([])
          const [lunch , setLunch] = useState([])
          const [dinner , setDinner] = useState([])
          useEffect(()=>{
                    fetch('Breakfast.json')
                    .then(res =>res.json())
                    .then(data => setBreakfast(data))
          },[])
          useEffect(()=>{
                    fetch('Lunch.json')
                    .then(res =>res.json())
                    .then(data => setLunch(data))
          },[])
          useEffect(()=>{
                    fetch('Dinner.json')
                    .then(res =>res.json())
                    .then(data => setDinner(data))
          },[])

          return [breakfast , lunch , dinner]

}

export default useDatas