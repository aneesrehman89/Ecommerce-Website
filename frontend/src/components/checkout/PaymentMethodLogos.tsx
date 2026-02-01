"use client";

interface PaymentMethodLogosProps {
  logos: readonly string[];
}

export default function PaymentMethodLogos({ logos }: PaymentMethodLogosProps) {
  const logoComponents: Record<string, React.ReactNode> = {
    visa: (
      <div className="h-6 px-2 bg-white border border-checkout-gray-200 rounded flex items-center justify-center">
        <span className="text-xs font-bold text-blue-600">VISA</span>
      </div>
    ),
    mastercard: (
      <div className="h-6 px-2 bg-white border border-checkout-gray-200 rounded flex items-center gap-0.5">
        <div className="w-3 h-3 rounded-full bg-red-500 opacity-80"></div>
        <div className="w-3 h-3 rounded-full bg-orange-400 opacity-80 -ml-1.5"></div>
      </div>
    ),
    amex: (
      <div className="h-6 px-2 bg-blue-600 border border-checkout-gray-200 rounded flex items-center justify-center">
        <span className="text-xs font-bold text-white">AMEX</span>
      </div>
    ),
    discover: (
      <div className="h-6 px-2 bg-orange-500 border border-checkout-gray-200 rounded flex items-center justify-center">
        <span className="text-xs font-bold text-white">D</span>
      </div>
    ),
    jcb: (
      <div className="h-6 px-2 bg-white border border-checkout-gray-200 rounded flex items-center justify-center">
        <span className="text-xs font-bold text-blue-700">JCB</span>
      </div>
    ),
    diners: (
      <div className="h-6 px-2 bg-white border border-checkout-gray-200 rounded flex items-center justify-center">
        <span className="text-xs font-bold text-blue-800">DC</span>
      </div>
    ),
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {logos.map((logo) => (
        <div key={logo}>{logoComponents[logo] || null}</div>
      ))}
    </div>
  );
}