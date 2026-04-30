export interface ParsedJsonResult<T> {
  data: T | null
  rawText: string | null
  parseError: Error | null
}

export async function parseJsonResponse<T>(response: Response): Promise<ParsedJsonResult<T>> {
  const text = await response.text()

  if (!text) {
    return {
      data: null,
      rawText: null,
      parseError: null,
    }
  }

  try {
    return {
      data: JSON.parse(text) as T,
      rawText: text,
      parseError: null,
    }
  } catch (error) {
    return {
      data: null,
      rawText: text,
      parseError: toError(error),
    }
  }
}

function toError(error: unknown): Error {
  if (error instanceof Error) {
    return error
  }

  return new Error('Unknown parsing error')
}
