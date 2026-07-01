import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold text-black">{title}</h1>
      <p className="text-sm text-black/70 mt-2">{subtitle}</p>
    </div>
  );
};

export default PageHeader;