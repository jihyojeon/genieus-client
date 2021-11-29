import ApiService from "./ApiService";

function getAllStudents() {
  return ApiService.fetchRequest('/student');
}

function getStudentById(id: string) {
  return ApiService.fetchRequest('/student/' + id)
}

function addStudent(body: {
  email: string,
  name: string,
  id: string,
  subscription_type: string, //('basic', 'pro', 'max')
  photo_url: string,
  spoken_language: string[],
  location?: string
}) {
  return ApiService.fetchRequest('/student', {
    method: "POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
}

function updateStudentById(id: string, body: {
  name?: string
  bio?: string
  photo_url?: string
  spoken_language?: string[]
  location?: string
}) {
return ApiService.fetchRequest('/student/' + id, {
  method: "PATCH",
  headers: {
    "content-Type": "application/json"
  },
  body: JSON.stringify(body)
  })
}
// ******************************************************************************************************************************************
// EVERYTHING BELOW HERE HAS TO BE TESTED AND CHECKED!!!!!!!!!!!
// ******************************************************************************************************************************************

function deleteStudentById(id: string) {
  return ApiService.fetchRequest('/student/' + id, {
    method: "DELETE"
  })
}

function addFavouriteTutor(studentId: string, body: {tutorId: string}) {
  return ApiService.fetchRequest('/student/' + studentId + '/favourite', {
    method: "PUT",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
}

const StudentService = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
  addFavouriteTutor
}

export default StudentService