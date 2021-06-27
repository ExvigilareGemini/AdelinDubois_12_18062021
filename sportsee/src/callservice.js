import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000";

/** Get all datas in the database corresponding to the userId as an object
 *
 * @param {number} userId Id of the user in the database
 * @returns {Object} Contain each informations about the request and the user inside an object
 */
export default function getUserDatas(userId) {
  const datasToReturn = Axios.get(`/user/${userId}`).catch((err) => {
    console.log(err);
  });
  return datasToReturn;
}
