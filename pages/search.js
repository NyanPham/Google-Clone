import SearchHeader from "@/components/SearchHeader"
import Head from "next/head"
import item from "@/reponse"

export default function Search({ results }) {
    console.log(results)

    return (
        <div>
            <Head>
                <title>Search Page</title>
            </Head>

            {/* Search header */}
            <SearchHeader />

            {/* Search result */}
        </div>
    )
}

export async function getServerSideProps(context) {
    const mockData = true

    let data

    if (mockData) {
        data = item
    } else {
        const response = await fetch(
            `https://www.googleapis.com/customsearch/v1?key=${
                process.env.API_KEY
            }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
                context.query.searchType && "&searchType=image"
            }`
        )

        data = await response.json()
    }

    return {
        props: { results: data },
    }
}
