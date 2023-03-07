import SearchHeader from "@/components/SearchHeader"
import Head from "next/head"
import item from "@/reponse"
import SearchResult from "@/components/SearchResult"
import { useRouter } from "next/router"

export default function Search({ results }) {
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{router.query.term} - Search page</title>
            </Head>

            {/* Search header */}
            <SearchHeader />

            {/* Search result */}
            <SearchResult results={results} />
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
