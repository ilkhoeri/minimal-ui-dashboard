import db from '@/server/db';
import { auth } from '@/server/auth/auth';

export async function getAccountByUserId(userId: string) {
  try {
    const account = await db.account.findFirst({
      where: { userId }
    });
    return account;
  } catch {
    return null;
  }
}

export async function currentUser() {
  return (await auth())?.user;
}
