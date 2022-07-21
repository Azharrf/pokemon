import callAPI from '../config/api'

const ROOT_API = process.env.NEXT_PUBLIC_API

export async function getPokemon() {
  const res = await fetch(`${ROOT_API}?limit=10&page=1&keyword=`, { method: 'GET' })
  const data = await res.json()

  return data
}

export async function addPokemon(data: FormData) {
  const url = `${ROOT_API}`

  return callAPI({
    url,
    method: 'POST',
    data,
  })
}

export async function editPokemon(data: FormData) {
  const url = `${ROOT_API}`

  return callAPI({
    url,
    method: 'PUT',
    data,
  })
}

export async function deletePokemon(id: string) {
  const url = `${ROOT_API}`

  return callAPI({
    url,
    method: 'DELETE',
  })
}

export async function detailPokemon(id: string) {
  const url = `${ROOT_API}/${id}`

  return callAPI({
    url,
    method: 'GET',
  })
}
