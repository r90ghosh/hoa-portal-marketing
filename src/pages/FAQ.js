import React, { useState } from 'react';

const faqs = [
  {
    question: "What is HOA Portal?",
    answer: "HOA Portal is an all-in-one platform that empowers HOAs to manage communities digitally — from financials and violations to amenities and communication tools."
  },
  {
    question: "Who can use the HOA Portal?",
    answer: "The platform is designed for HOA administrators, board members, property managers, and community residents."
  },
  {
    question: "Is it available on mobile?",
    answer: "Yes! The HOA Portal is accessible via web, iOS, and Android."
  },
  {
    question: "How does a new HOA get started?",
    answer: "An HOA admin signs up, creates a community, and subscribes to a plan. From there, they can build residences, invite residents, and customize community features."
  },
  {
    question: "Can residents join without admin approval to the HOA portal?",
    answer: "Residents do not have access to HOA Portal, HOA Portal is only for HOA admins and board members. Residents have access to Community Portal via which they will be able to connect with HOA"
  },
  {
    question: "How secure is user data?",
    answer: "All data is access-controlled. The platform supports full audit trails, permissions, and data privacy standards."
  },
  {
    question: "How are homes and residents added?",
    answer: "Admins can manually add homes or upload a CSV. Each home can then be linked to its residents via an onboarding step."
  },
  {
    question: "Can multiple residents be linked to one home?",
    answer: "Yes, each home can have multiple residents and roles (e.g., primary resident, tenant, family)."
  },
  {
    question: "Can residents edit their home info?",
    answer: "Only admins can edit home data. Residents can update their profile, but not property metadata."
  },
  {
    question: "How do I reserve amenities like the clubhouse or tennis court?",
    answer: "Go to the Amenities tab, select an available time slot, and submit a request. Some reservations may require approval."
  },
  {
    question: "Are there any fees for amenities?",
    answer: "That depends on the HOA. Some amenities may require a one-time or recurring payment, which you can pay directly in the app."
  },
  {
    question: "Can I see who else is using an amenity?",
    answer: "No, for privacy reasons that information is restricted to admins."
  },
  {
    question: "Can I download financial statements?",
    answer: "Yes, residents can download receipts, and admins can export full financial reports."
  },
  {
    question: "Where can I find CC&Rs or HOA policies?",
    answer: "These are available in the Document Vault. Documents are grouped into categories such as By-laws, Notices, Policies, and more."
  },
  {
    question: "Can I upload or share documents?",
    answer: "YResidents cannot upload documents. Admins can upload and enable secure sharing for specific residents or groups."
  },
  {
    question: "How do I submit a maintenance request?",
    answer: "Use the “Maintenance” tab to describe your issue, attach photos, and submit. You can track the request’s status and communicate with vendors directly."
  },
  {
    question: "How do I receive announcements?",
    answer: "Admins can send announcements via email, in-app notifications, or even SMS/phone messages depending on settings."
  },
  {
    question: "Is there a community chat?",
    answer: "Yes, there are group chats, announcement channels, and direct messaging—all with moderation, media sharing, and reporting features."
  },
  {
    question: "Can I report spam or inappropriate messages?",
    answer: "Yes, every message and post has a “Report” option. Reports are routed to moderators."
  },
  {
    question: "How do I report a security incident?",
    answer: "Use the “Security” tab to report theft, suspicious activity, or lost items. Reports are visible to admins and may trigger alert broadcasts."
  },
  {
    question: "Is the platform moderated?",
    answer: "Yes, any content flagged by users is sent to a moderation queue for admin review."
  },
  {
    question: "Are there AI features?",
    answer: "Upcoming features include AI-assisted support, auto-classification of documents, and smart financial reporting."
  },
  {
    question: "What is automated in the platform?",
    answer: "Payments, amenity approvals, vendor workflows, document tagging, and community alerts can all be automated."
  },
 
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-20">
      <h1 className="text-4xl font-bold mb-10 text-center text-indigo-800">Frequently Asked Questions</h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm p-4 cursor-pointer hover:bg-indigo-50 transition"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-indigo-800">{faq.question}</h2>
              <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
