import React from "react";

// Example props interface for a Card component
interface CardProps {
  title: string;
  description: string;
}

// Example Card component
const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Example props interface for a Pill component
interface PillProps {
  label: string;
  color: string; // e.g., "bg-blue-500" or "bg-red-500"
}

// Example Pill component
const Pill: React.FC<PillProps> = ({ label, color }) => {
  return (
    <span className={`inline-block px-3 py-1 text-white rounded-full ${color}`}>
      {label}
    </span>
  );
};

// Example props interface for a Button component
interface ButtonProps {
  title: string;
  onClick: () => void;
  styles?: string; // Additional Tailwind classes
}

// Example Button component
const Button: React.FC<ButtonProps> = ({ title, onClick, styles }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const HomePage: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">Welcome to the Home Page</h1>
        <p className="text-center text-gray-500 mt-2">
          A simple React + TypeScript page using dynamic components
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-6">
        {/* Card Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Card</h2>
          <Card title="Sample Card" description="This is an example of a reusable Card component." />
        </section>

        {/* Pill Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Pill Component</h2>
          <div className="space-x-2">
            <Pill label="React" color="bg-blue-500" />
            <Pill label="TypeScript" color="bg-green-500" />
            <Pill label="Tailwind CSS" color="bg-purple-500" />
          </div>
        </section>

        {/* Button Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Dynamic Button</h2>
          <Button title="Click Me" onClick={handleClick} styles="bg-indigo-500 hover:bg-indigo-600" />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="mt-8 text-center text-gray-400">
        © 2024 Your Project Name. All Rights Reserved.
      </footer>
    </div>
  );
};

export default HomePage;
