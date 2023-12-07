/** @type {import('./$types').PageServerLoad} */

import axios from 'axios';

/** @type {import('./$types').Actions} */

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		let saveData = {
			username: email,
			password: password
		};
		try {
			axios
				.post('http://localhost:3000/api/v1/user/login', JSON.stringify(saveData), {
					headers: {
						'Content-Type': `application/json`
					}
				})
				.then((res) => {
					if (res.status === 200) {
						console.log('200 OK');
					}
				});
		} catch (error) {
			console.log(error);
		}
		return { success: true };
	}
};
