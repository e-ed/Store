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

export default function buttonDelete({ setMessage, showAlert }: Props) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await api.delete(`product/${id}`);

      if (response) {
        setOpen(false);
        setMessage("Successfully deleted!");
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
        <Button variant={"default"}>Delete Product</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
          <DialogDescription>
            Type in an ID to delete it from the database. This action is
            irreversible, so please be carefull.
          </DialogDescription>

          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="id">ID</Label>
              <Input
                name="id"
                type="text"
                placeholder="Ex.: 31f4e65a-e4a4-49a3-b376-f436eb3749be"
                onChange={(data) => {
                  setId(data.target.value);
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
                Delete
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
