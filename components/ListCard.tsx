import { IList } from "@/app/page";

export default function ListCard({ x }: { x: IList }) {
  return (
    <div className="shadow-md border border-gray-400 w-1/3 px-4">
      <p>{x.title}</p>
      <p>{x.description}</p>
    </div>
  );
}
