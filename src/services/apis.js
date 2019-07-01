// URLs
const baseURL = "http://localhost:3001/"
const signinURL = baseURL + "signin"
const validationURL = baseURL + "validate"
const currentUserURL = baseURL + "user"
const myAppointmentsURL = baseURL + "myappointments"
const myPatientsURL = baseURL + "mypatients"
const allAppointmentsURL = baseURL + "appointments"


export function signinFetch(email, password){
    return fetch(signinURL, {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
    }).then(resp => resp.json())
}


export function validate(){
   return fetch(validationURL, {
	headers: {"Authorisation": localStorage.token}
}).then(resp => resp.json())
}

export function currentDoctorFetch(){
    return fetch(currentUserURL, {
        headers: {"Authorisation": localStorage.token }
    })
    .then(resp => resp.json())
}


export function currentAppointmentsFetch(){
    return fetch(myAppointmentsURL, {
        headers: {"Authorisation": localStorage.token}
    })
    .then(resp => resp.json())
}

export function currentPatientsFetch(){
    return fetch(myPatientsURL, {
        headers: {"Authorisation": localStorage.token}
    })
    .then(resp => resp.json())
}

export function FetchAllAppointments(){
    return fetch(allAppointmentsURL)
    .then(resp => resp.json())
}


export default { signinFetch, validate, currentDoctorFetch, currentPatientsFetch, FetchAllAppointments }