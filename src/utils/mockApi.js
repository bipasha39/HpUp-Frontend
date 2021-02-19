const allUsers = [
    {
      avatar: '',
      name: 'George Fields',
      email: 'bips@gail.com',
      companyName: 'Bips',
      role: 'Manager',
      forecast: '50%',
      recentActivity: '2 minutes ago',
    },
    {
      name: 'Lindey Stroud',
      email: 'bips@gmail.com',
      companyName: 'Wirehouse',
      role: 'Manager',
      forecast: '50%',
      recentActivity: '1 hour ago',
    },
    {
      name: 'Farhana',
      email: 'bips@gmail.com',
      companyName: 'Cable',
      role: 'Manager',
      forecast: '50%',
      recentActivity: '1 hour ago',
    },
    {
      name: 'Rebeca More',
      email: 'bips@gmail.com',
      companyName: 'Tablet',
      role: 'Manager',
      forecast: '50%',
      recentActivity: '1 hour ago',
    },
    {
      name: 'Jane Doe',
      email: 'bips@gmail.com',
      companyName: 'Desktop',
      role: 'Manager',
      forecast: '50%',
      recentActivity: '5 minutes ago',
    },
    {
      name: 'Jones Dermot',
      email: 'bips@gmail.com',
      companyName: 'Laptop',
      role: 'Manager',
      forecast: '50%',
      recentActivity: '55 minutes ago',
    },
    {
      name: 'Martin Merces',
      email: 'bips@gmail.com',
      companyName: 'Zoom',
      role: 'Manager',
      forecast: '50%',
      recentActivity: '5 hour ago',
    },
    {
      name: 'Franz Ferdinand',
      email: 'bips@gmail.com',
      companyName: 'Trello',
      role: 'Manager',
      forecast: '50%',
      recentActivity: '2 hour ago',
    },
    {
      name: 'John Smith',
      email: 'bips@gmail.com',
      companyName: 'Facebook',
      role: 'HR',
      forecast: '50%',
      recentActivity: '1 hour ago',
    },
    {
      name: 'Gullem Gabril',
      email: 'bips@gmail.com',
      companyName: 'Slack',
      role: 'Product Designer',
      forecast: '50%',
      recentActivity: '1 hour ago',
    },
  ];
export const userLogin = async ({ email, password }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'test@test.com' && password === 'password') {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    });
};

// export const userSignUp = async ({ username,company,role,email, password }) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(username,company,role,email,password)
//             if (username && company && role && email && password ) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 3000);
//     });
// };

export const remindPassword = async ({ email}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(email)
            if ( email ) {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    });
};

export const getAllUsers = async () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            resolve(allUsers)
            
            
        }, 3000);
    });
};