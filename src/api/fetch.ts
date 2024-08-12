import type { HeroResponse } from './HeroResponse';

export async function get<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const dataResponse: HeroResponse<T> = await response.json();

  if (dataResponse.code !== 200 || dataResponse.status !== 'Ok') {
    throw new Error('Error in get request');
  }

  return dataResponse.data.results;
}
