"use client";

import ButtonCreate from "@/components/mine/buttonCreate";
import ButtonDelete from "@/components/mine/buttonDelete";
import ButtonGet from "@/components/mine/buttonGet";
import ButtonUpdate from "@/components/mine/buttonUpdate";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "@/lib/axios";
import { BadgeCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then((r) => {
      setProducts(r);
    });
  }, []);

  async function getAllProducts() {
    try {
      const result = await api.get("/product");

      if (!result) {
        console.log("deu erro chefia");
        return;
      }

      return result.data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      {showAlert && (
        <div className="absolute top-2 right-2">
          <Alert>
            <BadgeCheck className="h-4 w-4" />
            <AlertTitle>Sucess!</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        </div>
      )}

      <section className="flex gap-4">
        <ButtonCreate setMessage={setMessage} showAlert={setShowAlert} />
        <ButtonGet
          setMessage={setMessage}
          showAlert={setShowAlert}
          showFoundProduct={setProducts}
        />
        <ButtonUpdate />
        <ButtonDelete setMessage={setMessage} showAlert={setShowAlert} />
      </section>

      <section>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, i) => (
              <TableRow key={i}>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stockQuantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
