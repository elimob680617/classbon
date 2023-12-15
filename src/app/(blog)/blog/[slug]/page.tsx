import React from "react";

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <div className="text-3xl flex justify-center items-center text-red-800">
      <h1>{slug}</h1>
    </div>
  );
}
