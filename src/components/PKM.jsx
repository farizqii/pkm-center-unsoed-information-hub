export default function PKM({ pkmObj }) {
  return (
    <li className="shadow-white shadow-lg scale-95 flex gap-6 rounded-4xl border-4 border-black bg-white p-2 items-start transition-transform hover:scale-100">
      <div className="flex flex-col gap-4 py-6">
        <h1 className="text-4xl font-semibold text-center text-black text-shadow-sm text-shadow-black">
          {pkmObj.Name}
        </h1>
        <p className="px-3 font-normal text-center text-black">
          {pkmObj.Description}
        </p>
      </div>
    </li>
  );
}
