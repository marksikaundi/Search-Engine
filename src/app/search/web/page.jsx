import Link from "next/link";
import React from "react";

export default async function WebSearchPage(searchParams) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  // if (!response.ok) {
  //   throw new Error("Something went wrong try again later");
  // }

  const data = await response.json();

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl pb-4"> No results found</h1>
        <p className="text-lg">Try search something else
          <Link href="/" className="text-blue-500>Home">Home</Link>
        </p>
      </div>
    );
  }

  const results = data.items;

  return (
    <>
      {results && results.map((result) => <h1 key={result}>{result.title}</h1>)}
    </>
  );
}
