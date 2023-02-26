export default function validateInfo(values){
    let errors = {}

    if (!values.username.trim()){
        errors.username = "Username required";
    }

    if (!values.email) {
        errors.email = 'Email required';
      } 
      else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = "Password required";
    }
    else if(values.password.length < 8){
        errors.password = "Password need to be at least 8 characters long";
    }
    else if(!/[A-Z]/.test(values.password)){
        errors.password = "Password must conatin uppercase letter"
    }
    else if(!/[a-z]/.test(values.password)){
        errors.password = "Password must conatin lowercase letter"
    }
    else if(!/[0-9]/.test(values.password)){
        errors.password = "Password must conatin a number"
    }

    if (!values.password2) {
        errors.password2 = "Re-type your password";
    }
    else if(values.password2 !== values.password) {
        errors.password2= "Confirm password doesn't match password";
    }

    return errors;
}