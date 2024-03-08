"use client";

import axios from "axios"
import React, { useEffect, useState } from "react"


interface CountryCapital {
    capital: string[];

}


const CountriesAPI = () => {

    const [countries, setCountries] = useState<CountryCapital[]>([])

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
    <>


        <div>
            <h1>Countries API here</h1>
            {countries.map((country) => (
                <div key={country.capital[0]}>
                    <h2>{country.capital[0]}</h2>
                </div>  
            ))
                    
                
            
            } 
        </div>
        </>
    );
}

export default CountriesAPI;