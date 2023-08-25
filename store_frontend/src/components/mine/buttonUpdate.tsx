import { api } from "@/lib/axios";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function buttonUpdate() {
  const [open, setOpen] = useState(false);
  const [uuid, setUuid] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");

  async function handleUuid(uuid: string) {
    if (uuid.length < 36) {
      setUuid("");
      return;
    }

    setUuid(uuid);

    try {
      const result = await api.get(`/product/findById/${uuid}`);

      if (!result) {
        console.log("não veio nada chefia");
        return;
      }

      const product: Product = result.data;

      setProductName(product.productName);
      setDescription(product.description);
      setCategory(product.category);
      setPrice(product.price.toString());
      setStockQuantity(product.stockQuantity.toString());
    } catch (e) {
      console.error(e);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (uuid == "") return;

    try {
      const result = await api.put(`/product/${uuid}`, {
        productName,
        description,
        category,
        price: parseFloat(price),
        stockQuantity: parseInt(stockQuantity),
      });

      if (!result) {
        console.log("deu ruim");
        return;
      }

      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog defaultOpen={false} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"default"}>Update Product</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>Update an existing product</DialogDescription>

          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="productId">Product Id</Label>
              <Input
                maxLength={36}
                name="productId"
                type="text"
                placeholder="Ex.: 114b4623-b871-4518-a208-01e7b6ad91cb"
                onChange={(data) => {
                  handleUuid(data.target.value);
                }}
                value={uuid}
              />
            </div>
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                name="name"
                type="text"
                placeholder="Ex.: Pants"
                onChange={(data) => {
                  setProductName(data.target.value);
                }}
                value={productName}
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Input
                name="description"
                type="text"
                placeholder="Ex.: Blue pants used by professor David"
                onChange={(data) => {
                  setDescription(data.target.value);
                }}
                value={description}
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Input
                name="category"
                type="text"
                placeholder="Ex.: Cloths"
                onChange={(data) => {
                  setCategory(data.target.value);
                }}
                value={category}
              />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input
                name="price"
                type="text"
                placeholder="R$ 00,00"
                onChange={(data) => {
                  setPrice(data.target.value);
                }}
                value={price}
              />
            </div>
            <div>
              <Label htmlFor="stockQuantity">Stock Quantity</Label>
              <Input
                name="stockQuantity"
                type="text"
                placeholder="Ex.: 3"
                onChange={(data) => {
                  setStockQuantity(data.target.value);
                }}
                value={stockQuantity}
              />
            </div>

            <Button
              className="bg-green-600 hover:bg-green-800 text-white font-bold"
              onClick={handleSubmit}
            >
              Update
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-800 text-white font-bold"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
