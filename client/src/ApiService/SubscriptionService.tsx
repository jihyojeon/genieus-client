import ApiService from "./ApiService";

function getAllSubscriptionTypes() {
  return ApiService.fetchRequest('/subscription')
}

const SubscriptionService = {
  getAllSubscriptionTypes
}

export default SubscriptionService