import fetch from 'isomorphic-fetch'

export function get(url){
  return (
    fetch(url)
    .then(response => response.json())
  )
}

export function post(url, data){
  return (
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  )
}
