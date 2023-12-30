async function customFetch<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    throw new Error(`Network Error: ${error}`)
  }
}

export default customFetch
