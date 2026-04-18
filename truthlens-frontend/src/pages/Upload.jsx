import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeMedia } from "../services/api";
import Preview from "../components/Preview";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handle file selection
  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setError("");
    }
  };

  // Handle drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setError("");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Upload + API
  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await analyzeMedia(file);

      // 👉 go to result page
      navigate("/result", { state: res });

    } catch (err) {
      console.error(err);
      setError("Failed to analyze file. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <main className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
        
        {/* Glow Background */}
        <div className="pointer-events-none absolute inset-0 bg-heroGlow opacity-80" />

        <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT PANEL */}
          <div className="glass-card rounded-[28px] p-8 backdrop-blur-xl bg-white/5 border border-white/10">
            
            <p className="text-sm uppercase tracking-[0.18em] text-green-300/80">
              Analyze
            </p>

            <h1 className="mt-4 text-4xl font-bold">
              Upload Media
            </h1>

            <p className="mt-4 text-gray-400">
              Drop an image or video file to begin AI-powered verification.
              Get fast, reliable, and forensic-level insights.
            </p>

            <div className="mt-8 space-y-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Supported formats</p>
                <p className="mt-1 font-medium">JPG, PNG, JPEG, MP4</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Processing time</p>
                <p className="mt-1 font-medium">Under 15 seconds</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Output</p>
                <p className="mt-1 font-medium">
                  Verdict • Confidence • Detailed Report
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="glass-card rounded-[28px] p-8 text-center backdrop-blur-xl bg-white/5 border border-white/10">

            <h2 className="text-2xl font-bold mb-6">
              Upload your file
            </h2>

            {/* DRAG & DROP AREA */}
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="cursor-pointer border-2 border-dashed border-white/20 rounded-2xl p-10 hover:border-green-400 transition"
            >
              <p className="text-gray-400">
                Drag & drop your file here
              </p>
              <p className="text-sm text-gray-500 mt-2">
                or click to browse
              </p>

              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleChange}
                className="hidden"
                id="fileInput"
              />

              <label htmlFor="fileInput" className="block mt-4 text-green-400 underline cursor-pointer">
                Browse File
              </label>
            </div>

            {/* PREVIEW */}
            {file && (
              <div className="mt-6">
                <Preview file={file} />
                <p className="text-sm text-gray-400 mt-2">{file.name}</p>
              </div>
            )}

            {/* ERROR */}
            {error && (
              <p className="text-red-400 mt-4 text-sm">{error}</p>
            )}

            {/* BUTTON */}
            <button
              onClick={handleUpload}
              disabled={loading}
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-xl font-semibold transition disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Start Analysis"}
            </button>

          </div>

        </div>
      </main>
    </div>
  );
}