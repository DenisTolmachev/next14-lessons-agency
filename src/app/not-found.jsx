import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>Sorry, this page is not found!</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFoundPage;
