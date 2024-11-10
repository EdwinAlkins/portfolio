import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { getMarkdownContent } from '../utils/markdownUtils'
import { Article } from '../type'

const Makdown = ({ article }: { article: Article }) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    const loadContent = async () => {
      const markdownContent = await getMarkdownContent(article.slug)
      setContent(markdownContent)
    }
    loadContent()
  }, [article])

  if (!content) return null

  return <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{content}</Markdown>
}

export default Makdown
