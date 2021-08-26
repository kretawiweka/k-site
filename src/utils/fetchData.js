import axios from 'axios';

const fetchData = ({ url, method = 'GET', data = {} }) => {
  let headers = null;
  const defaultHeaders = {
    Accept: 'application/json'
  };
  headers = defaultHeaders;
  return axios({
    url,
    method,
    data,
    headers
  });
};

export default fetchData;
