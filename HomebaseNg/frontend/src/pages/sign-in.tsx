import { Link } from 'react-router-dom'
import { Navbar } from '../components/navbar'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Home, Mail, Lock } from 'lucide-react'

export default function SignIn() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Home className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Welcome back to HomeBaseNG</h1>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-md">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-muted-foreground" />
                  <Input type="email" className="pl-10" placeholder="Enter your email" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-muted-foreground" />
                  <Input type="password" className="pl-10" placeholder="Enter your password" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button className="w-full">Sign In</Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
