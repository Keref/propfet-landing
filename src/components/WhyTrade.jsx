import React from 'react'
import './WhyTrade.css'

const WhyTrade = () => {
  const points = [
    {
      title: "Capital Access",
      description: "Turn a proven edge into meaningful profit. Prediction markets cap bet size, limiting returns for skilled forecasters. We bridge that gap."
    },
    {
      title: "Fair Evaluation",
      description: "Judged on accuracy and consistency, not bankroll size. Your skill should matter more than your bankroll."
    },
    {
      title: "Scalable Structure",
      description: "Grow from $50 positions to institutional-level size. Same decisions, different scale."
    }
  ]

  return (
    <section className="why-trade">
      <div className="why-trade-container">
        <div className="why-trade-header">
          <h2 className="why-trade-title">Why Trade With Us?</h2>
          <p className="why-trade-subtitle">
            Most people who trade prediction markets do not lose because they lack skill — they lose because they lack <strong>capital</strong>.
          </p>
          <p className="why-trade-description">
            Prediction markets are one of the rare places where an individual can actually have an informational edge. But if your max bet is $25 or $50, even a strong edge produces a trivial PnL. Good forecasters stay small not because they want to, but because they can't scale.
          </p>
          <p className="why-trade-description">
            <strong>We provide capital to forecasters who demonstrate consistent predictive accuracy, so they can scale their edge meaningfully.</strong>
          </p>
        </div>
        <div className="why-trade-points">
          {points.map((point, index) => (
            <div key={index} className="why-trade-point">
              <div className="point-number">{index + 1}</div>
              <h3 className="point-title">{point.title}</h3>
              <p className="point-description">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyTrade

