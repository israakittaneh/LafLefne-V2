import React, { Component } from 'react';
import axios from "axios" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import './weather-test.css';
import { data } from 'jquery';

const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=Ramallah&appid=92c5ec943fed63edfcb280cc5b3b8af3';
const ApiKey = '92c5ec943fed63edfcb280cc5b3b8af3';

class Weathertest extends Component {
    constructor(){
        super()
        this.state = {
            temp:"",
            date : null,
            city : "",
            descreption:"",
            day:""
        }
        // var date ;
        // var day = new Date(this.date)
    }
       
    // getWeather= async ()=>{
    //     axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Ramallah&appid=92c5ec943fed63edfcb280cc5b3b8af3")
    //     .then()
    // }
    


    componentDidMount =async() =>{
        
     
         var api = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Ramallah&appid=92c5ec943fed63edfcb280cc5b3b8af3`)
     
        var data = await api.json();
      
        this.setState(
            {city:"Ramallah" ,
            temp:(data.list[0].main.temp),
             date:data.list[0].dt,
             descreption:data.list[0].weather.description,
             //day:new Date(this.state.date).getFullYear()
            }
            )
            //this.day= data.list[0].dt 
            //console.log(new Date(this.day).getFullYear())
        //  var fullDate = new Date(this.state.date).getDate()+' '  + new Date(this.state.date).getMonth() +' '+ new Date(this.state.date).getFullYear()+' ' ;
         console.log(this.state)
        //  this.setState({
        //      day:fullDate
        //  })
        
    }
    getWeather =async (e) => {
        console.log(e.target.value)
        var city = e.target.value ;
        
     
         var api = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=92c5ec943fed63edfcb280cc5b3b8af3`)
     
        var data = await api.json();
        // console.log(data)
        this.setState(
            {city ,
            temp:(data.list[0].main.temp),
             date:data.list[0].dt_txt,
             descreption:data.list[0].weather.description
            }
            )
            console.log(data.list[0].dt_txt)
            
            // var date1 = Math.floor((data.list[0].dt).getTime()/1000.0)
           // console.log(this.state)
            // console.log( date1)

            // console.log(data.list[0].weather[0].description)
            console.log(this.state)
      }
     

    render(){
       //console.log(this.day)
       var fullDate = new Date(this.state.date).getDate()+' '  + new Date(this.state.date).getMonth() +' '+ new Date(this.state.date).getFullYear()+' ' ;

        return(

   
         <div className="d-flex  flex-row-reverse" id="weather-comp">
<div class="input-group mb-3" id="weather">
    <form>
    <select onChange={this.getWeather} class="custom-select" id="inputGroupSelect01" >
        {/* <option selected>Choose City</option> */}
        <option value="Nablus">Nablus</option>
        <option value="Ramallah" selected>Ramallah</option>
        <option value="Hebron">Hebron</option>
        <option value="Ţūbās">Ţūbās</option>
        <option value="Tulkarm">Tulkarm</option>
        <option value="Jenin">Jenin</option>
        <option value="Jericho">Jericho</option>
        <option value="Jerusalem">Jerusalem</option>
        <option value="Bethlehem">Bethlehem</option>
        <option value="Gaza">Gaza</option>
        <option value="Salfīt">Salfīt</option>
    </select>

 </form>
    <div id="WeatherDays">
        <div className="container">
            <div className="row">
            {/* <button onClick={this.getWeather} type="button" id="butoon-getweather" class="btn btn-primary btn-sm">Get Weather</button> */}

                </div>
            </div>
        </div>

    </div>

     
        <div className="page-content page-container" id="page-content">
        <div className="row container d-flex justify-content-center">
            <div className="col-lg-8 grid-margin stretch-card">
               
                <div className="card card-weather">
                    <div className="card-body">
                        <div className="weather-date-location">
                            <h3>Friday</h3>
        <p className="text-gray"> <span className="weather-date">{fullDate}</span><span className="weather-location">{this.state.city}, Palestine</span> </p>
                        </div>
                        <div className="weather-data d-flex">
                            <div className="mr-auto">
                                <h4 className="display-3">32 <span className="symbol">°</span>C</h4>
                                <p> Cloudy </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <div className="d-flex weakly-weather">
                            <div className="weakly-weather-item">
                                <p className="mb-0"> Sun </p> <i className="mdi mdi-weather-cloudy"></i>
                                <p className="mb-0"> 30° </p>
                            </div>
                            <div className="weakly-weather-item">
                                <p className="mb-1"> Mon </p> <i className="mdi mdi-weather-hail"></i>
                                <p className="mb-0"> 31° </p>
                            </div>
                            <div className="weakly-weather-item">
                                <p className="mb-1"> Tue </p> <i className="mdi mdi-weather-partlycloudy"></i>
                                <p className="mb-0"> 28° </p>
                            </div>
                            <div className="weakly-weather-item">
                                <p className="mb-1"> Wed </p> <i className="mdi mdi-weather-pouring"></i>
                                <p className="mb-0"> 30° </p>
                            </div>
                            <div className="weakly-weather-item">
                                <p className="mb-1"> Thu </p> <i className="mdi mdi-weather-pouring"></i>
                                <p className="mb-0"> 29° </p>
                            </div>
                            <div className="weakly-weather-item">
                                <p className="mb-1"> Fri </p> <i className="mdi mdi-weather-snowy-rainy"></i>
                                <p className="mb-0"> 31° </p>
                            </div>
                            <div className="weakly-weather-item">
                                <p className="mb-1"> Sat </p> <i className="mdi mdi-weather-snowy"></i>
                                <p className="mb-0"> 32° </p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
</div>
</div>



        )
    }
   
}

    export default Weathertest;

