export const validateSignUp = ({
  username,
  company,
  role,
  email,
  password,
}) => {
  if (username === undefined || username.length === 0) {
    throw 'user name is not valid';
  } 
  if (company === undefined || company.length === 0) {
    throw 'company name is not valid';
  } 
  console.log('role',role)
  if (role === undefined || role.length === 0) {
    throw 'role is not selected';
  } 
  if (email === undefined || email.length === 0) {
    throw 'email is not valid';
  } 
  if (password === undefined || password.length<6) {
    throw 'password should be longer than 6 character';
  } 

};
