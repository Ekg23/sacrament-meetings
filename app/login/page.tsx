import { LoginForm } from '@/components/login-form';

export default function LoginPage() {
  return (
    <main className="flex justify-center px-4 pt-8">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-2xl font-semibold">Sign In</h1>
        <LoginForm />
      </div>
    </main>
  );
}