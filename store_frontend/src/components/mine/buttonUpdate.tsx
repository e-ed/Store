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
  return (
    <Dialog>
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
              <Input name="productId" type="text" placeholder="Ex.: 1"></Input>
            </div>
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input name="name" type="text" placeholder="Ex.: Pants" />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Input
                name="description"
                type="text"
                placeholder="Ex.: Blue pants used by professor David"
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Input name="category" type="text" placeholder="Ex.: Cloths" />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input name="price" type="text" placeholder="R$ 00,00" />
            </div>
            <div>
              <Label htmlFor="stockQuantity">Stock Quantity</Label>
              <Input name="stockQuantity" type="text" placeholder="Ex.: 3" />
            </div>

            <Button className="bg-green-600 hover:bg-green-800 text-white font-bold">
              Update
            </Button>
            <Button className="bg-red-600 hover:bg-red-800 text-white font-bold">
              Cancel
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
