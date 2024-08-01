import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const useApi = () => {
  function $service(options?: AxiosRequestConfig) {
    return axios.create(options)
  }

  function $get<T = never>(
    endpoint: string,
    options?: AxiosRequestConfig,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service(options)
        .get(endpoint)
        .then((response: AxiosResponse<T>) => resolve(response.data))
        .catch((error) => reject(error.response))
    })
  }

  function $put<T = never>(
    endpoint: string,
    data?: any,
    options?: AxiosRequestConfig,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service(options)
        .put(endpoint, data)
        .then((response: AxiosResponse<T>) => resolve(response.data))
        .catch((error) => reject(error.response))
    })
  }

  function $post<T = never>(
    endpoint: string,
    data?: any,
    options?: AxiosRequestConfig,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service(options)
        .post(endpoint, data)
        .then((response: AxiosResponse<T>) => resolve(response.data))
        .catch((error) => reject(error.response))
    })
  }

  function $delete<T = never>(
    endpoint: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      $service(options)
        .delete(endpoint)
        .then((response: AxiosResponse<T>) => resolve(response))
        .catch((error) => reject(error.response))
    })
  }

  return {
    $get,
    $put,
    $post,
    $delete,
  }
}
