import axios from 'axios';

const url='https://covid19.mathdro.id/api';
export const fetchData = async () => {
try {
    const {data}=await axios.get(url);
    const Modifieddata={
        confirmed:data.confirmed,
        recovered:data.recovered,
        deaths:data.deaths,
lastUpdated:data.lastUpdate,
    }
    console.log(Modifieddata);
    return Modifieddata;
} catch (error) {
    console.log(error);
}
}

export const fetchDailydata = async () => {
    try {
        const {data}=await axios.get(`${url}/daily`);
        const Modifieddata=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));
       return Modifieddata;
    } catch (error) {
        
    }
    }

    export const fetchCountries = async () => {
        try {
            const {data:{countries}}=await axios.get(`${url}/countries`);
            return countries.map((country)=>country.name);
        } catch (error) {
            console.log(error); 
        }
        }

        export const fetchDataOfCountries = async (country) => {
            
        
               let changeAbleUrl=`${url}/countries/${country}`;
                console.log(changeAbleUrl);
                      
            try {
                const {data}=await axios.get(changeAbleUrl);
                const Modifieddata={
                    confirmed:data.confirmed,
                    recovered:data.recovered,
                    deaths:data.deaths,
            lastUpdated:data.lastUpdate,
                }
                console.log(Modifieddata);
                return Modifieddata;
            } catch (error) {
                console.log(error);
            }
            }