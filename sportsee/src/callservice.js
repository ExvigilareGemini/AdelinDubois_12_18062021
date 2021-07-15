import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000";

/** Get user and key datas in the database corresponding to the userId as an object.
 * @class
 * @param {number} userId Id of the user in the database
 * @returns {mainUserData} Object with user information and keyData
 * @property {Object} userInfos  Actual user information
 * @property {String} userInfos.firstName  Actual user firstname
 * @property {String} userInfos.lastName  Actual user lastname
 * @property {Number} userInfos.age  Actual user age
 * @property {Object} keyData  Actual user keydatas
 * @property {Number} keyData.calorieCount  Actual user calories
 * @property {Number} keyData.proteinCount  Actual user proteins
 * @property {Number} keyData.carbohydrateCount  Actual user carbohydrates
 * @property {Number} keyData.lipidCount  Actual user lipids
 * @property {Number} todayScore  Value of the objective score
 * @property {Number} score If todayScore is undefinned, the property name of the objective score is this one
 */
export default async function getUserDatas(userId) {
  const datasToReturn = await Axios.get(`/user/${userId}`).catch((err) => {
    console.log(err);
  });
  const { userInfos, keyData, todayScore, score } = datasToReturn.data.data;
  return {
    ...userInfos,
    keyData,
    todayScore,
    score,
  };
}

/** Get the user activity informations in the database corresponding to the userId
 *
 * @param {Number} userId
 * @returns {Array} an array of object
 * @property {String} object.day the date 'YYYY-MM-DD'
 * @property {Number} object.kilogram wieght of the person for the corresponding day
 * @property {Number} object.calories calories burnt for the corresponding day
 */
export async function getUserActivity(userId) {
  const datasToReturn = await Axios.get(`/user/${userId}/activity`).catch(
    (err) => {
      console.log(err);
    }
  );
  return datasToReturn.data.data.sessions;
}

/** Get the user average length of sessions in the database corresponding to the userId
 *
 * @param {Number} userId
 * @returns {Array} an array of object
 * @property {Number} object.day the position in the week (from 1 tp 7)
 * @property {Number} object.sessionLength length of the session in minute for the corresponding day
 */
export async function getUserAverageSessions(userId) {
  const datasToReturn = await Axios.get(
    `/user/${userId}/average-sessions`
  ).catch((err) => {
    console.log(err);
  });
  return datasToReturn.data.data.sessions;
}

/** Get the user performances value in the database corresponding to the userId
 *
 * @param {Number} userId
 * @returns {Array} array of objects
 * @property {Number} array.value the value to the corresponding category
 * @property {Number} array.kind the category of the performance value
 */
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
