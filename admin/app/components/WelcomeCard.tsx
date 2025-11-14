import AdminIcon from "./icons/AdminIcon";

export default function WelcomeCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="text-purple-600">
          <AdminIcon width={36} height={36} />
        </div>
        <h1 className="text-3xl font-bold text-purple-600">
          Admin Panel Dashboard
        </h1>
      </div>
      <p className="text-gray-600 text-sm max-w-3xl mx-auto">
        Welcome to the admin panel. Use the sidebar to manage items, view orders, and
        control the application settings.
      </p>
    </div>
  );
}