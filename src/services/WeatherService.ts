import { Weather } from '@/store/types/types';
import axios, { AxiosResponse } from 'axios';

export class WeatherService {
	static getCurrentWeather(city: string):Promise<AxiosResponse<Weather>> {
		return axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=9d1630e47e8c6b8915293edc360d71c4`)
	}
}