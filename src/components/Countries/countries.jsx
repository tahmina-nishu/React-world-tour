// "rsc" likhe tab dile structure ta chole asbe 

import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])
    
    // jei country gula visit kora hoiche segulo k country er upore alada kore dekhano 

    // state jekhane handler (button) o sekhane thakle pera nai. normally i kore felbo.

    // kintu alada file e thakle
        // 1. ekta state banaite hobe 
        //   demo: const [visitedCountries, setVisitedCountries] = useState([]);
        
        // 2. jekhane trigger korbe sekhane ekta prop pathate hobe 
        //   demo: countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country = {country}></Country>)

        // 3. function ta k jei file e trigger korbo sekhane parameter hisebe pass korte hobe.

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        //console.log(country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        console.log('flag added');
        const newVisitedFlags = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    }


    return (
        <div>
            <h3>Countries : {countries.length}</h3>

        {/* visited countries  */}
            <div className="visited-country-container">
                <h3>Visited Countries : {visitedCountries.length}</h3>
                <h3>Visited countries</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            {/* display flags  */}
            <div className="flag-container">
                <h3>Visited flags</h3>
                {
                    visitedFlags.map((flag, indx) => <img key={indx} src={flag}></img>)
                }
            </div>

            {/* display countries  */}
            <div className="country-container">
                {

                    countries.map(country => <Country 
                        key={country.cca3} 
                        handleVisitedCountry={handleVisitedCountry} 
                        handleVisitedFlags={handleVisitedFlags}
                        country = {country}></Country>) //key te unique kichu ekta dite hobe/ key ta na dileo hoy . kintu dewa ta valo.
                }
            </div>
        </div>
    );
};

export default Countries;