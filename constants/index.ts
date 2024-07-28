export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Aadhar card",
  "Social Security Card",
  "State ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Orthopedist (Ortho)",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Dermatologist (Skincare)",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Neurologist",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Heart specialist",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Physician",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Dentist",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Psychiatrist",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Surgeon",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Gastro",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
