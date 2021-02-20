// export const userLogin = async ({ username, password }) => {
//     return fetch('http://188.166.50.249/login', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         username,
//         password,
//       })
//     })
//   };
  
// export const userSignUp = async ({ username, company, role, email, password }) => {
//     return fetch('http://188.166.50.249/signup', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         username,
//         company,
//         role,
//         email,
//         password,
//         remainingDays: 10,
//         companyId: 1,
//       })
//     })
// };
// ​
// // export const remindPassword = async ({ email}) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             console.log(email)
// //             if ( email ) {
// //                 resolve();
// //             } else {
// //                 reject();
// //             }
// //         }, 3000);
// //     });
// // };

// export const getAllUsers = async () => {
//     return fetch('http://188.166.50.249/users')
//       .then(response => {
//         if (response.ok) {
//           return response.json()
//         } else {
//           throw response.statusText
//         }
//       })
//   };
  