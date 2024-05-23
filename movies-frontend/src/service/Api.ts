import axios, { AxiosInstance } from "axios"

const BASE_URL = 'http://localhost:3030/movies'

export const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
})