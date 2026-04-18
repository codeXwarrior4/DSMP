export default function HowItWorks() {
  const steps = [
    {
      title: "Upload Media",
      desc: "Upload image or video for analysis",
    },
    {
      title: "AI Analysis",
      desc: "Advanced AI scans for manipulation",
    },
    {
      title: "Get Result",
      desc: "Receive a verified confidence score",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto text-white space-y-10">
      <h1 className="text-4xl font-bold text-center">
        How It Works
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl"
          >
            <h2 className="text-xl font-semibold mb-2">
              {i + 1}. {step.title}
            </h2>
            <p className="text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}