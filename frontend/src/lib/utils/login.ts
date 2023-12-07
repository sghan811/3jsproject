/** @type {import('./$types').PageServerLoad} */

import axios from 'axios';
import { isLogedin } from './store';

/** @type {import('./$types').Actions} */
import { goto } from '$app/navigation';
export function Login(username: String, password: String) {
	let saveData = {
		password: password,
		username: username
	};
	try {
		axios
			.post('http://localhost:3000/api/v1/user/login', JSON.stringify(saveData), {
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

// export const actions = {
//     login: async ({ cookies, request }) => {
//         const data = await request.formData();
// 		const email = data.get('email');
// 		const password = data.get('password');
//         let saveData ={
//             username: email,
//             password:password
//         };
//         try {
//             axios.post("/api/v1/user/login", JSON.stringify(saveData), {
//                 headers: {
//                     "Content-Type": `application/json`,
//                 },
//             }).then((res) => {
//                 if (res.status === 200) {
//                     console.log("200 OK")
//                 }
//             })
//         } catch (error){
//             console.log(error);
//         }
// 		return { success: true };
//     }
// };
