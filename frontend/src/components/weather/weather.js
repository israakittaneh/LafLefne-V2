import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './weather.css';

function Weather() {
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
                            <div >
                                <div className="weather">
                                    <div className="current">
                                        <div className="info">
                                            <div>&nbsp;</div>
                                            <div className="city"><small><small>CITY:</small></small> London</div>
                                            <div className="temp">67&deg; <small>F</small></div>
                                            <div className="wind"><small><small>WIND:</small></small> 22 km/h</div>
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="icon">
                                            <span className="wi-day-sunny"></span>
                                        </div>
                                    </div>
                                    <div className="future">
                                        <div className="day">
                                            <h3>Mon</h3>
                                            <p><span className="wi-day-cloudy"></span></p>
                                        </div>
                                        <div className="day">
                                            <h3>Tue</h3>
                                            <p><span className="wi-showers"></span></p>
                                        </div>
                                        <div className="day">
                                            <h3>Wed</h3>
                                            <p><span className="wi-rain"></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >



        </div>

    )
}

export default Weather;
