import React, { useEffect, useState } from "react"
import Loading from "./Loading"
import axios from "axios"
import { Link, useParams } from "react-router-dom"

function Countrydetail() {

    const [countryData, setcountryData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const { name } = useParams()

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
            .then((res) => {
                console.log(res.data[0])
                setcountryData(res.data[0])
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                setisLoading(false)
            })
    },[name])

    if(isLoading) {
        return(<Loading></Loading>)
    }

    return (<div className="p-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold">{countryData?.name?.common}</h1>
        <img src={countryData?.flags?.svg} alt={countryData?.name?.common} className="w-60 h-40 object-fill my-5"></img>
        <p><b>Capital:</b> {countryData?.capital}</p>
        <p><b>Region:</b> {countryData?.region}</p>
        <p><b>Population:</b> {countryData?.population}</p>
        <Link to={"/"} className="my-3 font-medium bg-black text-white px-5 py-2">Back</Link>
    </div>)
}

export default Countrydetail