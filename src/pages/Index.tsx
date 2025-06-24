import React from 'react';
import LoginForm from '@/components/Login/LoginForm';
import LeftImageSection from '@/components/layout/LeftImageSection';
import AuthFormWrapper from '@/components/layout/AuthFormWrapper';

/**
 * The main SSO Login Page for the application.
 *
 * This page component orchestrates the overall layout of the login screen. It follows a
 * responsive, two-column structure. On larger screens, it displays a decorative image
 * panel on the left and the login form, centered, on the right. On smaller screens,
 * the image panel is hidden to prioritize the login form.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="grid h-screen w-full lg:grid-cols-2">
      {/* The left image section, which is hidden on screens smaller than 'lg' */}
      <LeftImageSection />
      
      {/* The right section containing the centered login form */}
      <AuthFormWrapper>
        <LoginForm />
      </AuthFormWrapper>
    </div>
  );
};

export default IndexPage;
