// URLs
const baseURL = "http://localhost:3001/"
const signinURL = baseURL + "signin"
const validationURL = baseURL + "validate"
const currentUserURL = baseURL + "user"
const currentAppointmentsURL = baseURL + "appointments"
const currentPatientsURL = baseURL + "patients"


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
    return fetch(currentAppointmentsURL, {
        headers: {"Authorisation": localStorage.token}
    })
    .then(resp => resp.json())
}

export function currentPatientsFetch(){
    return fetch(currentPatientsURL, {
        headers: {"Authorisation": localStorage.token}
    })
    .then(resp => resp.json())
}


export default { signinFetch, validate, currentDoctorFetch, currentPatientsFetch }