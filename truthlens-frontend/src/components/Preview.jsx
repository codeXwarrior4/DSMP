import { useEffect, useState } from "react";

export default function Preview({ file }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url); // cleanup
  }, [file]);

  if (!file) return null;

  return (
    <div className="mt-4">
      <h3 className="text-md font-semibold mb-2">Preview</h3>

      {file.type.startsWith("image") ? (
        <img
          src={previewUrl}
          alt="preview"
          className="w-64 rounded-xl shadow"
        />
      ) : (
        <video
          src={previewUrl}
          controls
          className="w-64 rounded-xl shadow"
        />
      )}
    </div>
  );
}