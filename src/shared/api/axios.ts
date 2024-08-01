import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const useApi = () => {
  function $service(options?: AxiosRequestConfig) {
    const headersObj: any = {
      ...options?.headers,
    }

    return axios.create({
      ...options,
      headers: {
        ...headersObj,
      },
    })
  }

  function $get<T = never>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      $service(options)(endpoint)
        .then((response: T | any) => {
          resolve(response.data)
        })
        .catch((error) => reject(error.response))
    })
  }

  function $put<T = never>(endpoint: string, options: AxiosRequestConfig): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'PUT' })(endpoint)
        .then((response: T | any) => resolve(response.data))
        .catch((error) => reject(error.response))
    })
  }

  function $post<T = never>(endpoint: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'POST' })(endpoint)
        .then((response: T | any) => resolve(response.data))
        .catch((error) => reject(error.response))
    })
  }

  function $delete<T = never>(endpoint: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'DELETE' })(endpoint)
        .then((response: T | any) => {
          resolve(response)
        })
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
