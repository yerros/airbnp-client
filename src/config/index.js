import axios from "axios";
import moment from "moment";
export const BaseUrl = "https://backend-airbnp.herokuapp.com/";

const setHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: { Authorization: `Bearer ${token}` }
  };
};

export const Post = (path, body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BaseUrl + path, body, setHeader())
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

export const Get = path => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseUrl + path, setHeader())
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

export const Delete = path => {
  return new Promise((resolve, reject) => {
    axios
      .delete(BaseUrl + path, setHeader())
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

export const Put = (path, body) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseUrl + path, body, setHeader())
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

export const today = moment()
  .startOf("day")
  .format();

export const yesterday = moment()
  .endOf("day")
  .format();

export const week = moment(today)
  .subtract(7, "days")
  .format();

export const month = moment(today)
  .subtract(30, "days")
  .format();

export const threeMount = moment(today)
  .subtract(90, "days")
  .format();

export const year = moment(today)
  .subtract(365, "days")
  .format();

export const formatRupiah = rupiah => {
  var reverse = rupiah
    .toString()
    .split("")
    .reverse()
    .join("");
  let ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan
    .join(".")
    .split("")
    .reverse()
    .join("");
  return ribuan;
};
