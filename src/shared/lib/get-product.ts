import db from '@/shared/lib/db';
import { SelectProduct } from '@/shared/types/client';
import { price, formatTime } from '@/shared/lib/utils';
import { Image, Product } from '@prisma/client';

export async function getProducts(
  search: string,
  tab: number,
  {
    productsPerPage = 5,
    userId,
  }: { productsPerPage?: number; userId?: string } = {},
) {
  const moreProducts = await db.product.findMany({
    where: {
      name: { contains: search, mode: 'insensitive' },
      userId,
    },
    include: { images: true },
    orderBy: { createdAt: 'desc' },
    take: productsPerPage,
    skip: tab,
  });

  const products: SelectProduct[] = moreProducts.map((item) => ({
    ...item,
    image: item.images.length > 0 ? item.images[0].url : '',
    price: price.format(item.price.toNumber()),
    stock: String(item.stock),
    availableAt: formatTime(item.createdAt),
    createdAt: formatTime(item.createdAt),
  }));

  const totalProducts = await db.product.count({
    where: {
      name: { contains: search, mode: 'insensitive' },
      userId,
    },
  });

  const tabValue =
    products.length >= productsPerPage ? tab + productsPerPage : null;

  // search double id
  function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = [];
    for (let num of arr) {
      if (seen.has(num)) {
        duplicates.push(num);
      } else {
        seen.add(num);
      }
    }
    return duplicates;
  }
  // console.log(findDuplicates([1, 3, 2, 3, 4, 1]));
  const productId = products.flatMap((i) => i.id);
  console.log(findDuplicates(productId));

  return { products, tabValue, totalProducts };
}

export async function getProduct(productId: string) {
  const product = await db.product.findFirst({
    where: {
      id: productId,
    },
    include: {
      images: true,
    },
  });
  return {
    ...product!,
    price: String(product?.price),
    stock: String(product?.stock),
    availableAt: String(product?.availableAt),
    createdAt: String(product?.availableAt),
  };
}

export async function getProductById(
  productId: string,
): Promise<(Product & { images?: Image[] }) | null> {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/client/products/${productId}`,
    { cache: 'no-store' },
  );
  return await res.json();
}

export async function getIdNameProducts(): Promise<
  { id: string; name: string }[] | null
> {
  return await db.product.findMany({
    select: { id: true, name: true },
  });
}
