/** @type {import('./$types').PageServerLoad} */

import axios from 'axios';
import { isLogedin } from './store';

/** @type {import('./$types').Actions} */
import { goto } from '$app/navigation';
export function Register(username: String, password: String, nickname: String) {
	let saveData = {
		password: password,
		username: username,
		nickname: nickname
	};
	try {
		axios
			.post('http://localhost:3000/api/v1/user/register', JSON.stringify(saveData), {
				headers: {
					'Content-Type': `application/json`
				},
				withCredentials: true
			})
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					console.log('200 OK');
					isLogedin.update((data) => true);
					goto('/');
				} else {
					console.log(res.data);
				}
			});
	} catch (err) {
		console.log(typeof err);
		console.log(err);
	}
}
