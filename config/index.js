const dev = process.env.NODE_ENV !== 'production'

export const server_api = dev ? 'http://localhost:8000/api' : 'https://www.emsc.ir/api'
export const server_front = dev ? 'http://localhost:3000' : 'https://www.emsc.ir'