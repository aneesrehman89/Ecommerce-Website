interface ActionCardProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export default function ActionCard({ title, icon, onClick }: ActionCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-purple-50 hover:bg-purple-100 rounded-lg p-8 transition-all text-center group shadow-sm hover:shadow-md"
    >
      <div className="flex justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </button>
  );
}