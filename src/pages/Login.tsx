import { useState } from "react";
import { Link } from "react-router-dom";
import { NeonContainer } from "@/components/NeonContainer";
import { NeonInput } from "@/components/NeonInput";
import { NeonButton } from "@/components/NeonButton";
import { User, Lock, Film } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no actual authentication
    console.log("Login attempted:", { username });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <NeonContainer size="md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <Film className="w-10 h-10 text-secondary" />
              <span className="text-2xl font-bold">
                <span className="text-primary">Neon</span>
                <span className="text-secondary">Flix</span>
              </span>
            </Link>
            <h1 className="text-2xl font-semibold text-foreground">Welcome Back</h1>
            <p className="text-muted-foreground text-sm mt-1">Sign in to continue</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <NeonInput
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              icon={<User size={18} />}
              required
            />
            <NeonInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<Lock size={18} />}
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button type="button" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <NeonButton type="submit" className="w-full">
            Sign In
          </NeonButton>

          {/* Sign Up Link */}
          <p className="text-center text-muted-foreground text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-secondary hover:underline font-medium">
              Sign Up
            </Link>
          </p>
        </form>
      </NeonContainer>
    </div>
  );
};

export default Login;
