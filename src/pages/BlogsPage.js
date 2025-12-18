import React, { useState } from 'react';

const blogData = [
  {
    topic: 'HOA Management Expertise & Best Practices',
    blogs: [
      { title: 'Top 10 Challenges HOA Boards Face—and How to Solve Them', link: '/blogs/hoa-challenges' },
      { title: 'A Day in the Life of an HOA Manager: Behind the Scenes', link: '/blogs/day-to-day' },
      { title: 'The Importance of Transparent Financial Reporting in HOAs Utilizing Technology', link: '/blogs/transparent-reporting' },
      { title: 'Strategies for Enhancing Community Engagement and Participation: The Digital Transformation', link: '/blogs/engagement-strategy' },
      { title: 'What Are HOA Fees and What Do They Cover?', link: '/blogs/hoa-fees' },
      { title: 'Understanding HOA Reserve Funds: Why They Matter', link: '/blogs/reserve-funds' },
      { title: 'How to Choose the Right HOA Management Company', link: '/blogs/right-hoa' },
      { title: 'HOA Rules and Regulations: What Homeowners Need to Know', link: '/blogs/hoa-rules' },
      { title: 'The Role of Technology in Modern HOA Management', link: '/blogs/hoa-moderntech' },
    ],
  },
  {
    topic: 'Legal and Regulatory Insights',
    blogs: [
      { title: 'Navigating New HOA Legislation: What Boards Should Know', link: '/blogs/hoa-legislation' },
      { title: 'Ensuring Fair Enforcement of HOA Rules and Bylaws', link: '/blogs/hoa-bylaws' },
      { title: 'Understanding HomeownersRights Within an HOA', link: '/blogs/hoa-rights' },
      { title: 'The Impact of State Laws on HOA Operations', link: '/blogs/state-laws' },
      { title: 'How Recent Fair Housing Law Changes Impact Your HOA Policies', link: '/blogs/hoa-policies' },
      { title: 'Navigating Short-Term Rental Policies in HOA Communities', link: '/blogs/short-rentals' },
      { title: 'Sustainable Initiatives That Can Lower HOA Costs and Increase Property Values', link: '/blogs/hoa-initiatives' },
      { title: 'Electric Vehicle Charging Stations: What HOAs Need to Consider', link: '/blogs/ev-electric-vehicle' },
      { title: 'Post-Pandemic HOA Management: Lessons Learned and Best Practices', link: '/blogs/post-pandamic' },
    ],
  },
  {
    topic: 'Community Building and Engagement',
    blogs: [
      { title: 'Organizing Successful Community Events in Your HOA', link: '/blogs/hoa-events' },
      { title: 'Tips for Improving Communication Between Boards and Residents', link: '/blogs/amenity-analytics' },
      { title: 'Creating a Welcoming Environment for New Homeowners', link: '/blogs/amenity-analytics' },
      { title: 'The Benefits of Community Newsletters and Updates', link: '/blogs/amenity-analytics' },
      { title: 'Leveraging Social Media to Enhance Community Engagement', link: '/blogs/amenity-analytics' },
      { title: 'Beyond the Bulletin Board: Modern Communication Strategies for HOAs', link: '/blogs/amenity-analytics' },
      { title: 'Building Community Spirit: HOA Events That Actually Increase Participation', link: '/blogs/amenity-analytics' },
      { title: 'Resolving HOA Disputes Before They Escalate to Legal Action', link: '/blogs/amenity-analytics' },
    ],
  },
  {
    topic: 'Operational Efficiency and Technology',
    blogs: [
      { title: 'Top Software Solutions for HOA Management', link: '/blogs/automated-amenities' },
      { title: 'Automating HOA Fee Collection: Pros and Cons', link: '/blogs/amenity-analytics' },
      { title: 'Implementing Online Voting Systems for HOA Decisions', link: '/blogs/amenity-analytics' },
      { title: 'Using Data Analytics to Improve HOA Services', link: '/blogs/amenity-analytics' },
      { title: 'Cybersecurity Best Practices for HOA Boards', link: '/blogs/amenity-analytics' },
      { title: 'Beyond the Bulletin Board: Modern Communication Strategies for HOAs', link: '/blogs/amenity-analytics' },
      { title: 'Building Community Spirit: HOA Events That Actually Increase Participation', link: '/blogs/amenity-analytics' },
      { title: 'Resolving HOA Disputes Before They Escalate to Legal Action', link: '/blogs/amenity-analytics' },
    ],
  },
];

function BlogsPage() {
  const [openTopic, setOpenTopic] = useState(null);

  const toggleTopic = (index) => {
    setOpenTopic(openTopic === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">HOA Portal Blog Center</h1>

      <div className="space-y-6">
        {blogData.map((topic, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <button
              onClick={() => toggleTopic(index)}
              className="w-full text-left flex justify-between items-center text-xl font-semibold text-gray-800 focus:outline-none"
            >
              {topic.topic}
              <span>{openTopic === index ? '−' : '+'}</span>
            </button>

            {openTopic === index && (
              <ul className="mt-4 space-y-2 list-disc list-inside">
                {topic.blogs.map((blog, i) => (
                  <li key={i}>
                    <a href={blog.link} className="text-indigo-600 hover:underline">
                      {blog.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
