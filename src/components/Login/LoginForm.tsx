import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MoreVertical, Plus } from 'lucide-react';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {

  // Mock handler functions to demonstrate interactivity
  const handleExistingAccountLogin = React.useCallback(() => {
    // In a real application, this would initiate the SSO login process for the saved account.
    console.log('Logging in with michaelscott@ascendion.com...');
  }, []);

  const handleDifferentAccountLogin = React.useCallback(() => {
    // This would typically redirect to a page with a full email/password form or another provider list.
    console.log('Redirecting to sign in with a different account...');
  }, []);

  const handleTroubleSigningIn = React.useCallback(() => {
    // This would navigate to a help or password recovery page.
    console.log('Navigating to help page...');
  }, []);

  return (
    <Card className={cn("w-full max-w-sm", className)}>
      <CardHeader className="text-center space-y-2 pt-8">
        <CardTitle className="text-2xl font-bold">Login with SSO</CardTitle>
        <CardDescription>Login with Company Account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <button
          onClick={handleExistingAccountLogin}
          className="flex items-center w-full p-3 text-left bg-secondary hover:bg-muted rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://i.pravatar.cc/40?u=michaelscott" alt="Michael Scott" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <div className="ml-4 flex-grow">
            <p className="text-sm font-medium text-foreground">michaelscott@ascendion.com</p>
            <p className="text-sm text-muted-foreground tracking-widest">●●●●●●●●●●</p>
          </div>
          <MoreVertical className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              or
            </span>
          </div>
        </div>

        <Button variant="secondary" className="w-full" onClick={handleDifferentAccountLogin}>
          <Plus className="mr-2 h-4 w-4" />
          Sign in with different account
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center pb-8">
         <p className="text-xs text-muted-foreground">
            Still have trouble signing in?{' '}
            <button
              onClick={handleTroubleSigningIn}
              className="font-medium text-primary hover:underline underline-offset-2 focus:outline-none focus:underline"
            >
              Click Here
            </button>
          </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
