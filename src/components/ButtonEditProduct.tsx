import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { useEditProductForm } from "@/http/use-edit-products";
import { useGetProductByIdForm } from "@/http/use-get-product-by-id";

const formSchema = z.object({
  name: z.string().min(1, { message: "Campo é obrigatório" }),
  description: z.string().optional(),
  price: z.string().min(1, { message: "Campo é obrigatório" }),
  sku: z.string().min(1, { message: "Campo é obrigatório" }),
});

type EditProductsFromProps = z.infer<typeof formSchema>;

interface ButtonEditProductProps {
  productId: string;
}

export function ButtonEditProduct({ productId }: ButtonEditProductProps) {
  const { mutateAsync: editProduct } = useEditProductForm(productId);
  const { data: productDetails } = useGetProductByIdForm({ productId })
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "0",
      sku: "",
    },
  });

  function onSubmit({ name, description, price, sku }: EditProductsFromProps) {
    editProduct({
      name,
      description,
      price: Number(price),
      sku,
    });

    form.reset();
    setIsOpen(false);
  }

  useEffect(() => {
    if(productDetails) {
      form.setValue("name", productDetails.product.name);
      form.setValue("description", productDetails.product.description);
      form.setValue("price", productDetails.product.price.toString());
      form.setValue("sku", productDetails.product.sku);
    }
  }, [productDetails])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setIsOpen(true)}
          >
            <Pencil />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Criar produto</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do produto</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome do produto" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Input placeholder="Descrição" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço</FormLabel>
                    <FormControl>
                      <Input placeholder="Preço" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sku"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SKU</FormLabel>
                    <FormControl>
                      <Input placeholder="SKU" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Editar produto
              </Button>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
