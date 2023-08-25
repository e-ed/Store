"use client";

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

interface Props {
  showAlert: (value: boolean) => void;
  setMessage: (value: string) => void;
}

export default function buttonCreate({ showAlert, setMessage }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const priceParsed = parseFloat(price);
    const stockQuantityParsed = parseInt(stockQuantity);

    try {
      const response = await api.post("product", {
        productName: name,
        description,
        category,
        price: priceParsed,
        stockQuantity: stockQuantityParsed,
        addedDate: "2023-01-11 01:01:01.000001",
      });

      if (response) {
        setOpen(false);
        setMessage("Successfully created!");
        showAlert(true);

        setTimeout(() => {
          showAlert(false);
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"default"}>Create Product</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Product</DialogTitle>
          <DialogDescription>Create a new item</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} method="post">
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                name="name"
                type="text"
                placeholder="Ex.: Pants"
                onChange={(data) => {
                  setName(data.target.value);
                }}
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
              />
            </div>

            <Button
              className="bg-green-600 hover:bg-green-800 text-white font-bold"
              type="submit"
            >
              Create
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
        </form>
      </DialogContent>
    </Dialog>
  );
}
