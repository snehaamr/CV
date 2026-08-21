import { useState } from 'react'
import { books } from '../data/books.js'
import { asset } from '../lib/asset.js'

function ReviewCard({ book }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="card review">
      <img src={asset(book.cover)} alt={book.alt} />
      <div>
        <h3>{book.title}</h3>
        <p className="meta">
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Review excerpt:</strong> {book.excerpt}
        </p>
        <button type="button" className="btn btn-primary" onClick={() => setExpanded((open) => !open)}>
          {expanded ? 'Show less' : 'Read full review'}
        </button>
        {expanded ? <p className="review-body">{book.review}</p> : null}
      </div>
    </article>
  )
}

export default function Books() {
  return (
    <>
      <h1 className="page-title">Books & Banter</h1>
      <div className="card-list">
        {books.map((book) => (
          <ReviewCard key={book.id} book={book} />
        ))}
      </div>
    </>
  )
}
