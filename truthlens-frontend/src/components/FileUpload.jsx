import { useRef, useState } from "react";
import Preview from "./Preview";
import { useNavigate } from "react-router-dom";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleChoose = () => {
    inputRef.current?.click();
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    navigate("/analyzing");
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white">Upload your file</h2>
      <p className="mt-3 text-gray-400">
        Drag and drop style UI can be added later. For now, use this polished file picker.
      </p>

      <div className="mt-8 rounded-[24px] border border-dashed border-white/15 bg-black/20 p-8 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-4xl text-green-400 shadow-neon">
          ⬆
        </div>

        <p className="mt-6 text-2xl font-semibold text-white">
          Drag & drop an image or video here
        </p>
        <p className="mt-2 text-gray-400">or browse files from your computer</p>

        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          onChange={handleChange}
          className="hidden"
        />

        <button
          type="button"
          onClick={handleChoose}
          className="mt-6 rounded-xl px-6 py-3 text-sm font-semibold transition neon-button hover:scale-[1.02]"
        >
          Browse Files
        </button>
      </div>

      {file && (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-gray-400">Selected file</p>
          <p className="mt-1 font-medium text-white">{file.name}</p>
          <p className="mt-1 text-sm text-gray-500">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      )}

      <Preview file={file} />

      <button
        onClick={handleUpload}
        className="mt-6 w-full rounded-2xl px-6 py-4 text-base font-semibold transition neon-button hover:scale-[1.01]"
      >
        Start Analysis
      </button>
    </div>
  );
}