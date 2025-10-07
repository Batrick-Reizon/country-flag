import React, { useEffect, useState } from "react"
import axios from "axios"
import Loading from "./Loading"
import { Link } from "react-router-dom"

function Countrydata() {

    const [countryDatas, setcountryDatas] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,currencies,tld,languages,borders")
            .then((res) => {
                console.log(res.data)
                setcountryDatas(res.data)
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                setisLoading(false)
            })
    },[])

    if(isLoading) {
        return(<Loading></Loading>)
    }

    return (<div>
        <h1 className="text-3xl font-black text-center my-5">All Countries</h1>
        <div className="flex flex-wrap w-full gap-5 justify-center items-center mb-5">
            {countryDatas.map((country,index) => {
                return (
                    < Link to={`/countrydetail/${country.name.common}`} key={index} className = "p-4 border rounded-lg shadow-md w-[80%] sm:w-[40%] lg:w-[23%]" >
                    <img src={country.flags.svg} alt={country.name.common} className="w-full h-40 object-contain"></img>
                    <h1 className="text-center mt-1 font-medium">{country.name.common}</h1>
                </Link>
                )
            }) 
        }
    </div>
    </div >)
}

export default Countrydata