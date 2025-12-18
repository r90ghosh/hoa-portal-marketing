import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`../blogs/${slug}.md`)
      .then(res => fetch(res.default).then(r => r.text()))
      .then(text => setContent(text))
      .catch(() => setContent('# Blog Not Found 😢'));
  }, [slug]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate('/blogs')}
        className="mb-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition"
      >
        ← Back to Blogs
      </button>

      {/* Blog Content */}
      <ReactMarkdown
        children={content}
        components={{
          h1: ({ node, children, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props}>{children}</h1>,
          h2: ({ node, children, ...props }) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props}>{children}</h2>,
          p: ({ node, ...props }) => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
          li: ({ node, ...props }) => <li className="ml-6 list-disc mb-2" {...props} />,
          a: ({ node, children, ...props }) => (
            <a {...props} className="text-indigo-600 underline hover:text-indigo-800">{children}</a>
          ),
        }}
      />
    </div>
  );
}

export default BlogPost;
