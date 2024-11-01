// ----------------steps--------------------

//     1. create a folder named "component"

//     2. create two folder in component named "countries" & "country"

//     3. in the folder "countries", create a file named "Countries.jsx"

//     4. in the folder "country", create a file named "Country.jsx" & a file "country.css" for adding style. 

//     5. In "Countries.jsx"
//         -> create a Component by entering "rsc" and remove the react import

//         -> fetch data using "useState"
//             demo:  const [countries, setCountries] = useState([]);
//                 useEffect(()=>{
//                 fetch('')
//                 .then(res => res.json())
//                 .then(data => setCountries(data));
//                 },[])

//         -> in return 
//                 map countries and pass every single country
//                 demo: {
//                         countries.map(country => <Country key={country.cca3} country = {country}></Country>) //key te unique kichu ekta dite hobe/ key ta na dileo hoy . kintu dewa ta valo.
//                     }

//     6. In "country.jsx"
//             -> create a function
//             -> in the function first using console , see if your process works 
//             -> before the return , destruct the country informations
//             -> in return , write what you want to show 

//     7. then if you want to add CSS, create a css file in the same folder and add the css using class or id 
// ensure that the css file is imported 

// ------------------------------------------------------------- 

import { useState } from 'react';
import './country.css'


const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
   // console.log(country);

    const {name, flags, population, area, cca3} = country;


    
// ---------------handle visited button ---------------

            // 1. create a button in return 
            //     demo : <button onClick={handleVisited}>Visited</button>

            // 2. declare a state 
            //     demo : const [visited, setVisited] = useState(false)

            // 3. create a function name "handleVisited()"

// --------------------------------------------------- 


    const [visited, setVisited] = useState(false)
    // const handleVisited = () => {
    //     setVisited(true)
    // }

    const handleVisited = () => {
        setVisited(!visited)
    }

// console.log(handleVisitedCountry);

    return (
        // conditional class 
        <div className={`country ${visited &&  'visited'}`}>
            <p>Name : {name.common}</p>
            <img src={flags.png}/>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>

            <button className='btn-cls'  onClick={() =>handleVisitedCountry(country)}>Mark Visited</button> 
            {/*  handleVisitedCountry te parameter pathanor jonno first bracket dile prottekta countryr jonno function ta auto call hoye jabe. ei prblm solve er jonno ekhane arrow function dite hobe. tarpor arrow function ta k call kore dibo ekhane. */}
            
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add flag</button> <br />

            <button className='btn-cls' onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button> <br />
            {/* {visited && 'I have visited this country.'} */}
            {visited ? 'I have visited this country.' : 'I want to visit this country.'}
        </div>
    );
};

export default Country;