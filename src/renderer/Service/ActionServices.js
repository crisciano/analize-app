/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-async-promise-executor */
const { default: Axios } = require('axios');

exports.getActions = () => {
  console.log('getActions ============================');
  return new Promise(async (resolve, reject) => {
    try {
     Axios({
        method:"GET",
        url: "https://electron-invest.herokuapp.com/v1/magicFormula/acoes"
     })
     .then(res => resolve(res.data))
     .catch(err => reject(err))
    } catch (error) {
      reject(error);
    }
  });
};
