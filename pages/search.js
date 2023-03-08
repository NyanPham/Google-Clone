import SearchHeader from "@/components/SearchHeader"
import Head from "next/head"
import { item, imagesItems } from "../Reponse"
import SearchResult from "@/components/SearchResult"
import { useRouter } from "next/router"
import ImageResults from "@/components/ImageResults"

export default function Search({ results }) {
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{router.query.term} - Search page</title>
            </Head>

            {/* Search header */}
            <SearchHeader />

            {/* Search web and images result */}

            {router.query.searchType === "image" ? (
                <ImageResults results={results} />
            ) : (
                <SearchResult results={results} />
            )}
        </div>
    )
}

export async function getServerSideProps(context) {
    const startIndex = context.query.start || "1"

    const mockData = false

    let data

    if (mockData) {
        data = context.query.searchType === "image" ? imagesItems : item
    } else {
        const response = await fetch(
            `https://www.googleapis.com/customsearch/v1?key=${
                process.env.API_KEY
            }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
                context.query.searchType && "&searchType=image"
            }&start=${startIndex}`
        )

        data = await response.json()
    }

    return {
        props: { results: data },
    }
}
