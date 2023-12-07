/** @type {import('./$types').PageServerLoad} */

import axios from 'axios';
import { isLogedin, username } from './store';

/** @type {import('./$types').Actions} */
import { goto } from '$app/navigation';
axios.defaults.withCredentials = true;
export async function verify() {
	try {
		let value = (await axios.get('http://localhost:3000/api/v1/user/verify')).data;
		console.log(value.isAuth);
		console.log(value.user.nickname);
		username.update((data) => value.user.nickname);
		isLogedin.update((data) => value.isAuth);
	} catch (err) {
		console.log(err);
	}
}
