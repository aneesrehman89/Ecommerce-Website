// Admin authentication types

export interface AdminLoginFormData {
  email: string;
  password: string;
}

export interface AdminAuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  adminUser: AdminUser | null;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: "admin" | "super_admin";
}

export interface AdminLoginProps {
  logoSrc: string;
  logoAlt: string;
}

export interface AdminLoginPageProps extends AdminLoginProps {
  onLogin?: (credentials: AdminLoginFormData) => void;
}