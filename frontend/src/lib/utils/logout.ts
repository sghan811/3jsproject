/** @type {import('./$types').PageServerLoad} */

import axios from 'axios';
import { isLogedin, username } from './store';

/** @type {import('./$types').Actions} */
axios.defaults.withCredentials = true;
export function logout() {
	try {
		location.reload();
		axios.get('http://localhost:3000/api/v1/user/logout');
	} catch (err) {
		console.log(err);
	}
}
