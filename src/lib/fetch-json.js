export default async function fetchJson(url, payload = {}) {
    return await fetch(url, payload)
      .then((response) => response.json())
      .catch((error) => error)
  }