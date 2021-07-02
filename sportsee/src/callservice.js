import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000";

/** Get user and key datas in the database corresponding to the userId as an object.
 * @class
 * @param {number} userId Id of the user in the database
 * @returns {mainUserData} Object with user information and keyData
 * @property {Object} userInfos  Actual user information
 * @property {Object} userInfos.firstName  Actual user firstname
 * @property {Object} userInfos.lastName  Actual user lastname
 * @property {Object} userInfos.age  Actual user age
 * @property {Object} keyData  Actual user keydatas
 * @property {Object} keyData.calorieCount  Actual user calories
 * @property {Object} keyData.proteinCount  Actual user proteins
 * @property {Object} keyData.carbohydrateCount  Actual user carbohydrates
 * @property {Object} keyData.lipidCount  Actual user lipids
 */
export default async function getUserDatas(userId) {
  const datasToReturn = await Axios.get(`/user/${userId}`).catch((err) => {
    console.log(err);
  });
  const { userInfos, keyData } = datasToReturn.data.data;
  return {
    ...userInfos,
    keyData,
  };
}

export async function getUserActivity(userId) {
  const datasToReturn = await Axios.get(`/user/${userId}/activity`).catch(
    (err) => {
      console.log(err);
    }
  );
  const { sessions } = datasToReturn.data.data;
  return { sessions };
}

export async function getUserAverageSessions(userId) {
  const datasToReturn = await Axios.get(
    `/user/${userId}/average-sessions`
  ).catch((err) => {
    console.log(err);
  });
  return datasToReturn.data.data;
}
export async function getUserPerformance(userId) {
  const datasToReturn = await Axios.get(`/user/${userId}/performance`).catch(
    (err) => {
      console.log(err);
    }
  );
  const { data, kind } = datasToReturn.data.data;
  const arrayToReturn = [];
  data.forEach((el, index) => {
    const firstLetterUpperKind =
      kind[index + 1].charAt(0).toUpperCase() + kind[index + 1].slice(1);
    let objectToPush = { value: el.value, kind: firstLetterUpperKind };
    arrayToReturn[index] = objectToPush;
  });
  return arrayToReturn;
}
