export default function SearchResult({ results }) {
    return (
        <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-sm mb-5 mt-3">
                About {results.searchInformation.formattedTotalResults} results
                in {results.searchInformation.formattedSearchTime} seconds
            </p>
            {results.items.map((result) => (
                <div className="" key={result.link}>
                    <p>{result.formattedUrl}</p>
                </div>
            ))}
        </div>
    )
}
