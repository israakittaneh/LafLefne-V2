import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './weather-test.css';

function Weathertest() {
    
    return (
         <div className="d-flex  flex-row-reverse" id="weather-comp">

<div class="input-group mb-3" id="weather">
    <select class="custom-select" id="inputGroupSelect01">
        <option selected>Choose City</option>
        <option value="nablus">Nablus</option>
        <option value="ramallah">Ramallah</option>
        <option value="hebron">Hebron</option>
        <option value="tubas">Tubas</option>
        <option value="tulkarem">Tulkarem</option>
        <option value="jenin">Jenin</option>
        <option value="jereco">Jereco</option>
        <option value="al-quds">Al-Quds</option>
        <option value="bethlehem">Bethlehem</option>

    </select>


    <div id="WeatherDays">
        <div className="container">
            <div className="row">
            <button type="button" id="butoon-getweather" class="btn btn-primary btn-sm">Get Weather</button>

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
                            <p className="text-gray"> <span className="weather-date">25 March, 2019</span> <span className="weather-location">Sydney, Australia</span> </p>
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

    )}
    export default Weathertest;

