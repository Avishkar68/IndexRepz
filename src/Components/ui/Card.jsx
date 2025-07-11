import React from 'react';

const Card = React.forwardRef(({ className = '', ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg  bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  />
));

Card.displayName = 'Card';

const CardHeader = ({ className = '', ...props }) => (
  <div
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  />
);

const CardTitle = ({ className = '', ...props }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
);

const CardDescription = ({ className = '', ...props }) => (
  <p
    className={`text-sm text-muted-foreground ${className}`}
    {...props}
  />
);

const CardContent = ({ className = '', ...props }) => (
  <div
    className={`p-6 pt-0 ${className}`}
    {...props}
  />
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent };