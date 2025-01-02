import Link from 'next/link'

export default function BlogPage() {
    return (
        <main>
            <h1> Blog Pages</h1>
                <ul>
                    <Link href="/blog/post-1">
                     First Post
                    </Link>
                </ul>
                <ul>
                    <Link href="/blog/post-2">
                        Second Post
                    </Link>
                </ul>
        </main>
    )
}