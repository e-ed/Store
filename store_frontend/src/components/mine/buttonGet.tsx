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

export default function buttonGet() {
  return (
    <Dialog>
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
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button className="min-w-[80px] bg-red-600 hover:bg-red-800 text-white font-bold">
                Cancel
              </Button>
              <Button className="min-w-[80px] bg-green-600 hover:bg-green-800 text-white font-bold">
                Get
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
