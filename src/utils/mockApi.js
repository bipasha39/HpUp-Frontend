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

export const userSignUp = async ({ username,company,role,email, password }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(username,company,role,email,password)
            if (username && company && role && email && password ) {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    });
};

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