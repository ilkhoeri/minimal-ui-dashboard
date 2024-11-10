'use client';

import * as z from 'zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';

import { products } from '@/shared/schemas/client';
import { Input } from '@/client/components/ui/input';
import { SelectProduct } from '@/shared/types/client';
import { Button } from '@/client/components/ui/button';
import { Heading } from '@/client/components/ui/heading';
import { Textarea } from '@/client/components/ui/textarea';
import { Separator } from '@/client/components/ui/separator';
import { ImageUpload } from '@/client/components/ui/image-upload';
import { DeleteProduct } from './actions';
import { Session } from '@/shared/types/auth';
import { IconTrash } from '@tabler/icons-react';
import { formatDateToInput } from '@/shared/utils/functions';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/client/components/ui/form';

export function ProductForm({
  session,
  data
}: Session & { data: SelectProduct | null }) {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  if (session && data && session?.id !== data?.userId) {
    return null;
  }

  const title = data ? data.name : 'Add product';
  const subtitle = data ? 'Edit a product.' : 'Add a new product';
  const toastMessage = data ? 'Product updated.' : 'Product added.';
  const action = data ? 'Save' : 'Add';

  const defaultValues = data
    ? {
        ...data,
        images: data.images || [],
        price: parseFloat(data.price) || 0,
        stock: parseFloat(data.stock) || 0,
        availableAt: formatDateToInput(new Date(data.availableAt))
      }
    : {
        name: '',
        description: '',
        images: [],
        status: '',
        price: 0,
        stock: 1,
        availableAt: formatDateToInput(new Date())
      };

  type ProductFormValues = z.infer<typeof products>;

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(products),
    defaultValues
  });

  const onSubmit = async (values: ProductFormValues) => {
    try {
      setLoading(true);
      if (data) {
        await axios.patch(
          `/api/client/${params.dashboard}/products/${params.editId}`,
          values
        );
      } else {
        await axios.post(`/api/client/${params.dashboard}/products`, values);
      }

      router.refresh();
      router.push(`/${params.dashboard}/products`);
    } catch (error) {
      alert(`Something went wrong. error.`);
    } finally {
      setLoading(false);
      console.log('success:', toastMessage);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={subtitle} />
        {data && (
          <DeleteProduct session={session} product={data}>
            <Button variant="destructive" size="sm">
              <IconTrash className="size-5" />
            </Button>
          </DeleteProduct>
        )}
      </div>
      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <ImageUpload
                    disabled={loading}
                    value={field.value.map((image) => image.url) || []}
                    onChange={(url) =>
                      field.onChange([...field.value, { url }])
                    }
                    onRemove={(url) =>
                      field.onChange([
                        ...field.value.filter((current) => current.url !== url)
                      ])
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="grid content-baseline md:grid-cols-1 gap-4 md:gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl aria-disabled={loading}>
                      <Input
                        disabled={loading}
                        placeholder="Product name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl aria-disabled={loading}>
                        <Input
                          type="number"
                          inputMode="numeric"
                          disabled={loading}
                          placeholder="9.99"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="stock"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stock</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          inputMode="numeric"
                          disabled={loading}
                          placeholder="1"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="availableAt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Available</FormLabel>
                      <FormControl>
                        <Input
                          type="datetime-local"
                          disabled={loading}
                          placeholder=""
                          className="inline-block cursor-text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <FormControl aria-disabled={loading}>
                        <Input
                          list="statusSuggest"
                          disabled={loading}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <datalist id="statusSuggest">
                  <option value="active" />
                  <option value="draft" />
                  <option value="archived" />
                </datalist>
              </div>
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="h-full w-full pb-8">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="Product description"
                      className="rounded-md max-w-full max-h-full min-h-full max-md:min-h-[200px] resize-y"
                      maxLength={1500}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            disabled={loading}
            className="flex w-[80px] min-w-[80px]"
            type="submit"
          >
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
}
