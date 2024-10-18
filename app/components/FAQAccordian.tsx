'use client'

import * as React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unused items in their original packaging. Please contact our customer service team to initiate a return."
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's site."
  },
  {
    question: "Are your products eco-friendly?",
    answer: "We are committed to sustainability and use eco-friendly materials whenever possible. Many of our products are made from recycled or biodegradable materials."
  }
]

export default function FAQAccordion() {
  return (
    <section className="w-full py-20 px-6">
        <div className='max-w-3xl mx-auto '>
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full shadow-2xl">
        {faqs.map((faq, index) => (
          <AccordionItem className='bg-white px-4 py-2' key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      </div>
    </section>
  )
}