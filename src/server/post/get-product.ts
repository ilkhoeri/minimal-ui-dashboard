import db from '@/server/db';
import { SelectProduct } from '@/shared/types/client';
import { price, formatTime } from '@/shared/utils/functions';
import { Image, Product } from '@prisma/client';

export async function getProducts(
  search: string,
  tab: number,
  {
    productsPerPage = 5,
    userId
  }: { productsPerPage?: number; userId?: string } = {}
) {
  const moreProducts = await db.product.findMany({
    where: {
      name: { contains: search, mode: 'insensitive' },
      userId
    },
    include: { images: true },
    orderBy: { createdAt: 'desc' },
    take: productsPerPage,
    skip: tab
  });

  const products: SelectProduct[] = moreProducts.map((item) => ({
    ...item,
    image: item.images.length > 0 ? item.images[0].url : '',
    price: price.format(item.price.toNumber()),
    stock: String(item.stock),
    availableAt: formatTime(item.createdAt),
    createdAt: formatTime(item.createdAt)
  }));

  const totalProducts = await db.product.count({
    where: {
      name: { contains: search, mode: 'insensitive' },
      userId
    }
  });

  const tabValue =
    products.length >= productsPerPage ? tab + productsPerPage : null;

  return { products, tabValue, totalProducts };
}

export async function getProduct(productId: string) {
  const product = await db.product.findFirst({
    where: {
      id: productId
    },
    include: {
      images: true
    }
  });
  return {
    ...product!,
    price: String(product?.price),
    stock: String(product?.stock),
    availableAt: String(product?.availableAt),
    createdAt: String(product?.availableAt)
  };
}

export async function getProductById(
  productId: string
): Promise<(Product & { images?: Image[] }) | null> {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/client/products/${productId}`,
    { cache: 'no-store' }
  );
  return await res.json();
}

export async function getIdNameProducts(): Promise<
  { id: string; name: string }[] | null
> {
  return await db.product.findMany({
    select: { id: true, name: true }
  });
}

/**
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

  function secondLargest(arr) {
    let max = -Infinity,
      secondMax = -Infinity;
    for (let num of arr) {
      if (num > max) {
        secondMax = max;
        max = num;
      } else if (num > secondMax && num < max) {
        secondMax = num;
      }
    }
    return secondMax;
  }
  // console.log(secondLargest([10, 20, 4, 45, 99])); // Output: 45
  // Kita mencari nilai terbesar dan menyimpannya di max, kemudian setiap nilai yang lebih kecil dari max tetapi lebih besar dari secondMax akan diatur sebagai secondMax.

  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

  // algoritma untuk mencari angka di array yang sudah terurut [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] menggunakan metode binary search.
  // Dengan menggunakan Set, kita otomatis menghapus elemen duplikat karena Set hanya menyimpan elemen unik.

  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1; // jika tidak ditemukan
  }
  // Binary search bekerja dengan membagi array menjadi dua, mengurangi waktu pencarian dari O(n) menjadi O(log n).
  // console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)); // Output: 6

  // Hitung waktu eksekusi fungsi rekursif untuk menghitung faktorial dari sebuah angka n.
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  // console.log(factorial(5)); // Output: 120
  // Algoritma rekursif ini memiliki kompleksitas waktu O(n) karena memanggil dirinya sendiri n kali.

  // Buat algoritma untuk mengecek apakah sebuah string adalah palindrome.
  function isPalindrome(str) {
    let left = 0,
      right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  // console.log(isPalindrome('madam')); // Output: true
  // console.log(isPalindrome('hello')); // Output: false
  // Kita membandingkan karakter dari awal dan akhir string, bergerak menuju tengah. Kompleksitasnya adalah O(n).
 */
