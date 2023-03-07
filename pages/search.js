import SearchHeader from "@/components/SearchHeader"
import Head from "next/head"

export default function search() {
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