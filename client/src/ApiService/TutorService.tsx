import ApiService from "./ApiService";

function getAllTutors () {
  return ApiService.fetchRequest('/tutor');
}

function addTutor(body: {
  email : string
  name : string
  id : string
  photo_url: string
  spoken_language: string[]
  location?: string
}) {
  return ApiService.fetchRequest('/tutor', {
    method: "POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
}

function getTutorById(id: string) {
  return ApiService.fetchRequest('/tutor/' + id);
}

function updateTutorById(id: string, body: {
    name?: string
    bio?: string
    photo_url?: string
    tags?: string
    programming_languages?: string
    spoken_language?: string[]
    location?: string
}) {
  return ApiService.fetchRequest('/tutor/' + id, {
    method: "PATCH",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
}

function deleteTutorById(id: string) {
  return ApiService.fetchRequest('/tutor/' + id, {
    method: "DELETE"
  })
}

const TutorService = {
  getAllTutors,
  addTutor,
  getTutorById,
  updateTutorById,
  deleteTutorById
}

export default TutorService