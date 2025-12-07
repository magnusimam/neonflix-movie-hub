import { useState } from "react";
import { Link } from "react-router-dom";
import { NeonContainer } from "@/components/NeonContainer";
import { NeonInput } from "@/components/NeonInput";
import { NeonButton } from "@/components/NeonButton";
import { User, Mail, Lock, Film } from "lucide-react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no actual authentication
    console.log("Signup attempted:", { name, email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12">
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
            <h1 className="text-2xl font-semibold text-foreground">Create Account</h1>
            <p className="text-muted-foreground text-sm mt-1">Join NeonFlix today</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <NeonInput
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon={<User size={18} />}
              required
            />
            <NeonInput
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail size={18} />}
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
            <NeonInput
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              icon={<Lock size={18} />}
              required
            />
          </div>

          {/* Submit Button */}
          <NeonButton type="submit" className="w-full">
            Create Account
          </NeonButton>

          {/* Login Link */}
          <p className="text-center text-muted-foreground text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary hover:underline font-medium">
              Sign In
            </Link>
          </p>
        </form>
      </NeonContainer>
    </div>
  );
};

export default Signup;
