//api function for getting the data
import axios from "axios";
export let getDataApi = () => {
  let res = axios(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  )
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
  return res;
};
