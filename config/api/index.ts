import axios, { AxiosRequestConfig } from 'axios'

interface CallAPIProps extends AxiosRequestConfig {
  formData?: boolean,
  token?: boolean,
}

export default async function callAPI({ url, method, data, token, formData }: CallAPIProps) {
  let headers = {
    'content-type': 'application/x-www-form-urlencoded',
  }

  if (formData) {
    headers = {
      'content-type': 'form-data',
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response)

  return response
}
