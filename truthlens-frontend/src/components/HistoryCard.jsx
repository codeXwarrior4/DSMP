export default function HistoryCard({ item }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-3">
      <p className="font-medium text-gray-800">{item.filename}</p>

      <p className="text-sm text-gray-500">
        Uploaded: {item.date}
      </p>

      <p className="mt-1">
        Verdict:{" "}
        <span
          className={
            item.fake ? "text-red-500 font-semibold" : "text-green-500 font-semibold"
          }
        >
          {item.fake ? "Fake" : "Real"}
        </span>
      </p>
    </div>
  );
}