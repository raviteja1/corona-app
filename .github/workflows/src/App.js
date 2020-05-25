import React from'react';
import './App.css';
// import Cards from './components/Cards/Cards';
// import Charts from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import {Cards,Chart,CountryPicker} from './components'
import {fetchData,fetchDataOfCountries} from './api';
import coronaImage from './Images/image.png';

class App extends React.Component
{
state={
data:{},
country:'',
}

  async componentDidMount()
    {
        const fetchedData=await fetchData();
    this.setState({data:fetchedData});
    }
    
handleCountryChange=async(country)=>{
    const fetchedData=await fetchDataOfCountries(country);
    this.setState({data:fetchedData,country:country})
    console.log(fetchedData);
}

    render(){
        const {data,country}=this.state;
        console.log(data);
        return (
            <div className="container">
                <img className="image" src={coronaImage} alt="COVID-19"/>
               <Cards data={data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart data={data} country={country}/>
            </div>
        )
    }
}
export default App;