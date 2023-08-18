import ButtonCreate from "@/components/mine/buttonCreate";
import ButtonDelete from "@/components/mine/buttonDelete";
import ButtonGet from "@/components/mine/buttonGet";
import ButtonUpdate from "@/components/mine/buttonUpdate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <section className="flex gap-4">
        <ButtonCreate />
        <ButtonUpdate />
        <ButtonDelete />
        <ButtonGet />
      </section>

      {/* <section className="row-span-2">
        <table className="bg-slate-700 rounded-md">
          <tr>
            <th>Product name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Added Date</th>
          </tr>
          <tr>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
          </tr>
        </table>
      </section> */}
    </main>
  );
}
