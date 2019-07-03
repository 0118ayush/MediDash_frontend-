// URLs
const baseURL = "http://localhost:3001/"
const signinURL = baseURL + "signin"
const validationURL = baseURL + "validate"
const currentUserURL = baseURL + "user"
const myAppointmentsURL = baseURL + "myappointments"
const myPatientsURL = baseURL + "mypatients"
const allAppointmentsURL = baseURL + "appointments"
const allPatientsURL = baseURL + "patients"
const allDoctorsURL = baseURL + "doctors"


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

export function fetchAllAppointments(){
    return fetch(allAppointmentsURL)
    .then(resp => resp.json())
}

export function fetchAllPatients(){
    return fetch(allPatientsURL)
    .then(resp => resp.json())
}

export function fetchAllDoctors(){
    return fetch(allDoctorsURL)
    .then(resp => resp.json())
}

export function deleteAppointmentBackend(deletedAppointment){
    return fetch(`${allAppointmentsURL}/${deletedAppointment.id}`,{
        method: "DELETE"
    })
}

export function addPatientBackend(newPatient){
    return fetch(allPatientsURL, {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(newPatient)
    }).then(resp => resp.json())
}


export default { signinFetch, validate, currentDoctorFetch, currentPatientsFetch, fetchAllAppointments, deleteAppointmentBackend, fetchAllPatients, fetchAllDoctors, addPatientBackend }