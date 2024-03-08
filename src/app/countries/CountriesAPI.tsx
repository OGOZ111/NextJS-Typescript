"use client";

import axios from "axios"
import React, { useEffect, useState } from "react"


const CountriesAPI = () => {

    const [countries, setCountries] = useState([])

    const getCountries = async () => {
        const response = await axios.get("https://restcountries.com/v3.1/all?fields=capital")
        console.log(response.data)
        if (response.data) {
            setCountries(response.data)
        }
    }

    useEffect(() => {
        getCountries()
    }, [])


    return (
        <div>
            <h1>Countries API here</h1>

        </div>
    );
}

export default CountriesAPI;