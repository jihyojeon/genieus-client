import ApiService from "./ApiService";

function getAllHelpRequests() {
  return ApiService.fetchRequest('/helprequest')
}

function addHelpRequest(body: {
  student_id: string
  description: string
  tags?: string[]
  language: string
  code: string
  favourites_only: boolean
}) {
  return ApiService.fetchRequest('/helprequest', {
    method: "POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
}

function updateHelpRequestById(id: string, body: {
  tutor_id?: string | null
  status?: string // ('pending' | 'assigned' | 'closed-complete' | 'closed-incomplete')
  description?: string
  rating?: number | null
  feedback_comments?: string | null
  tags?: string[]
  language?: string
  code?: string
  zoom_url?: string
  favourites_only?: boolean
}) {
  return ApiService.fetchRequest('/helprequest/' + id, {
    method: "PATCH",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
}

function getHelpRequestById(id: string) {
  return ApiService.fetchRequest('/helprequest/' + id);
}

function getHelpRequestsByParams(params: string) {
  return ApiService.fetchRequest('/helprequest?' + params);
}

function deleteHelpRequestById(id: string) {
  return ApiService.fetchRequest('/helprequest/' + id, {
    method: "DELETE"
  });
}

// ******************************************************************************************************************************************
// EVERYTHING BELOW HERE HAS TO BE TESTED AND CHECKED!!!!!!!!!!!
// ******************************************************************************************************************************************

function getPendingHelpRequestsByTutorId(id: string) {
  return ApiService.fetchRequest('/helprequest/pending/' + id);
}

const HelpRequestService = {
  getAllHelpRequests,
  addHelpRequest,
  updateHelpRequestById,
  getHelpRequestById,
  getHelpRequestsByParams,
  deleteHelpRequestById,
  getPendingHelpRequestsByTutorId
}

export default HelpRequestService