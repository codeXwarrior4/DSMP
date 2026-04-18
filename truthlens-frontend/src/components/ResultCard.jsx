export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-2">Analysis Result</h3>

      <p className="text-gray-700">
        <strong>Score:</strong> {result.score}%
      </p>

      <p className="mt-2">
        <strong>Status:</strong>{" "}
        <span
          className={
            result.fake ? "text-red-500 font-semibold" : "text-green-500 font-semibold"
          }
        >
          {result.fake ? "Fake / Manipulated" : "Real / Authentic"}
        </span>
      </p>
    </div>
  );
}