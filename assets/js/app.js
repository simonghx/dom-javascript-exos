// import { Personne } from "./personne.js"; cet import est inutile puisqu'il est importé dans la class Doctor
import { Doctor } from "./doctor.js";

// let personne = new Personne("Jean", 25, "m", "Docteur");
let doctor = new Doctor("Steven", 56, "m", "Docteur");

console.log(doctor);