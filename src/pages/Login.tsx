import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NeonContainer } from "@/components/NeonContainer";
import { NeonInput } from "@/components/NeonInput";
import { NeonButton } from "@/components/NeonButton";
import { Mail, Lock, Film } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no actual authentication
    console.log("Login attempted:", { email });
    // Navigate to the home page after login
    navigate("/");
  };

  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <NeonContainer>
        <div className="text-center">
          <div className="inline-block p-3 bg-neon-blue rounded-full mb-4">
            <Film className="h-8 w-8 text-background" />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-neon-blue">
            Welcome Back
          </h2>
          <p className="text-muted-foreground mb-6">
            Sign in to continue your movie journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <NeonInput
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail className="h-5 w-5" />}
            required
          />

          {/* Password Input */}
          <NeonInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="h-5 w-5" />}
            required
          />

          {/* Submit Button */}
          <NeonButton type="submit" className="w-full">
            Sign In
          </NeonButton>

          {/* Sign Up Link */}
          <p className="text-center text-muted-foreground text-sm">
            Don't have an account yet?{" "}
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
