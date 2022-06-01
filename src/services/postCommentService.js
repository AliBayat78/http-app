import http from './httpService'

export function postComment(data) {
  const token = 'Secure Token'
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  return http.post('/comments/', data, header)
}
