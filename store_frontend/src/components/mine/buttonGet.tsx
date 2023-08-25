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
  showFoundProduct: (value: Product[]) => void;
}

export default function buttonGet({
  setMessage,
  showAlert,
  showFoundProduct,
}: Props) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const idParsed = parseInt(id);

    if (idParsed && idParsed == -1) {
      try {
        const result = await api.get("/product");
        if (result) {
          console.log(result.data);
          showFoundProduct(result.data);

          setOpen(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        return;
      }
    } else {
      try {
        const result = await api.get(`/product/findById/${id}`);

        if (result) {
          console.log(result.data);
          showFoundProduct([result.data]);

          setOpen(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"default"}>Get Product</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get Product</DialogTitle>
          <DialogDescription>
            Type in an ID to search in the database. The results will be shown
            in the main page's table.
            <br />
            If you want to return all the table values, set the ID to '-1'.
          </DialogDescription>

          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="id">ID</Label>
              <Input
                name="id"
                type="text"
                placeholder="Ex.: 114b4623-b871-4518-a208-01e7b6ad91cb"
                onChange={(d) => {
                  setId(d.target.value);
                }}
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button
                className="min-w-[80px] bg-red-600 hover:bg-red-800 text-white font-bold"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                className="min-w-[80px] bg-green-600 hover:bg-green-800 text-white font-bold"
                onClick={handleSubmit}
              >
                Get
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
