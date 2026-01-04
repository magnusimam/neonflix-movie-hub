import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NeonContainer } from "@/components/NeonContainer";
import { NeonInput } from "@/components/NeonInput";
import { NeonButton } from "@/components/NeonButton";
import { User, Mail, Lock, Film } from "lucide-react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no actual authentication
    console.log("Signup attempted:", { name, email });
    // Navigate to the login page after signup
    navigate("/login");
  };

  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <NeonContainer>
        <div className="text-center">
          <div className="inline-block p-3 bg-neon-red rounded-full mb-4">
            <Film className="h-8 w-8 text-background" />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-neon-red">
            Create Your Account
          </h2>
          <p className="text-muted-foreground mb-6">
            Join NeonFlix and start exploring.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <NeonInput
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            icon={<User className="h-5 w-5" />}
            required
          />

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

          {/* Confirm Password Input */}
          <NeonInput
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            icon={<Lock className="h-5 w-5" />}
            required
          />

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
