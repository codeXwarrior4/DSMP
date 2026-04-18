import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Analyze() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev === 2) {
          clearInterval(timer);
          setTimeout(() => navigate("/result"), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const steps = [
    "Uploading file...",
    "Analyzing content...",
    "Generating report...",
  ];

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white/5 p-8 rounded-2xl border border-white/10 w-full max-w-md text-center">
        <h2 className="text-xl font-semibold mb-6">
          Analyzing File...
        </h2>

        <ul className="space-y-4 text-left">
          {steps.map((text, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 ${
                step >= index ? "text-green-400" : "text-gray-500"
              }`}
            >
              {step > index ? "✔" : "⏳"} {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}