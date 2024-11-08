import { isServer, PORT } from '../constants/env';
import type { Image, Product } from '@prisma/client';

export async function getProduct(
  url: string,
  options?: Record<string, unknown>,
): Promise<(Product & { images?: Image[] }) | null> {
  const fetchUrl =
    isServer && url.startsWith('/') ? `http://localhost:${PORT}${url}` : url;

  return await fetch(fetchUrl, options).then((res) => res.json());
}
