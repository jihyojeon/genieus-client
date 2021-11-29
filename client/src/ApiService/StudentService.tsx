import ApiService from "./ApiService";

function getAllStudents() {
  return ApiService.fetchRequest('/student');
}

function getStudentById(id: string) {
  return ApiService.fetchRequest('/student/' + id)
}

const StudentService = {
  getAllStudents,
  getStudentById
}

export default StudentService