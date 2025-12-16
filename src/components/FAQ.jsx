import React, { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Why do prediction markets limit capital?",
      answer: "Prediction markets cap bet size to manage risk and maintain market integrity. Most platforms limit individual positions to $25-$50, which means even forecasters with a strong edge can only generate trivial returns. This structural limitation prevents skilled traders from scaling their strategies."
    },
    {
      question: "How does your evaluation process work?",
      answer: "We evaluate traders based on accuracy and consistency, not bankroll size. You'll demonstrate your predictive edge through our evaluation process, showing consistent performance over time. We judge on measurable metrics: prediction accuracy, risk management, and statistical consistency."
    },
    {
      question: "What happens after I pass the evaluation?",
      answer: "Once you demonstrate consistent predictive accuracy, we provide capital so you can scale your edge. You'll trade with larger positions using the same strategies that proved successful during evaluation. Your skill matters more than your bankroll."
    },
    {
      question: "How are profits split?",
      answer: "Profit splits are competitive and vary by plan. Traders receive a significant portion of profits, typically 80% across all plans. This ensures you're rewarded fairly for your performance while we cover capital and operational costs."
    },
    {
      question: "What if I have strong percentage returns but low absolute PnL?",
      answer: "This is exactly the problem we solve. If you're consistently accurate but limited by $50 position sizes, your percentage returns don't translate to meaningful profit. We provide the capital to scale those same successful strategies, turning your proven edge into real PnL impact."
    },
    {
      question: "How do I get started?",
      answer: "Click the Login button to access our platform at app.plip.xyz. Choose a plan that matches your experience level, complete the evaluation process, and start scaling your prediction market edge. No ideology, no grand vision—just a practical solution to capital constraints."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know about our platform</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

