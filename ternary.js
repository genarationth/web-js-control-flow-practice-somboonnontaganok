const password = 'passdfad';

(password.length >= 12)
? console.log('Password is very strong so WELCOME!!!') 
: (password.length >= 8) 
? console.log('Welcome!!!')
: console.log('Password is too short');
