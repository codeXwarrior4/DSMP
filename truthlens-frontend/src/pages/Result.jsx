export default function ResultDashboard({ result }) {
  const confidence = result?.confidence || 87;
  const status = result?.status || "Suspicious";

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-white">
        Analysis Result
      </h2>

      {/* Status Card */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
        <p className="text-sm text-gray-400 mb-2">Status</p>
        <h3 className="text-2xl font-semibold text-green-400">
          {status}
        </h3>
      </div>

      {/* Confidence */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
        <p className="text-sm text-gray-400 mb-2">Confidence</p>

        <div className="w-full bg-white/10 h-4 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-full transition-all"
            style={{ width: `${confidence}%` }}
          />
        </div>

        <p className="mt-2 text-green-400 font-semibold">
          {confidence}%
        </p>
      </div>

      {/* Metadata */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
      <a
  href="https://images.google.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-6 text-blue-400 hover:text-blue-300 underline text-sm"
>
  🔍 Check this image on Google (Reverse Search)
</a>
        <p className="text-sm text-gray-400 mb-2">Details</p>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>🧠 AI Model: DeepFake Detector v1</li>
          <li>🕒 Time: 12 sec</li>
          <li>📊 Layers Checked: 3</li>
        </ul>
      </div>
    </div>
  );
}