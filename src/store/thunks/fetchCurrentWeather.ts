 import { WeatherService } from '@/services/WeatherService';
import { AppDispatch } from '../store';
import { currentWeatherSlice } from '../slices/currentWeatherSlice';
import { log } from 'console';

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
	try{
		dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
		const res = await WeatherService.getCurrentWeather(payload) // res: {data: { ....}}
		if (res.status === 200) {
			dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
		} else {
			dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
		}
	} catch (error) {
		console.log(error);
	}
	
}