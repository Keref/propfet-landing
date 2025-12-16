import React from 'react'
import './Plans.css'

const Plans = () => {
  const plans = [
    {
      name: "Starter",
      capital: "$1,000",
      profitShare: "80%",
      step1Goal: "$50",
      step2Goal: "$100",
      maxDailyLoss: "$50",
      maxDrawdown: "$100",
      evaluationFee: "$50"
    },
    {
      name: "Professional",
      capital: "$2,000",
      profitShare: "90%",
      step1Goal: "$100",
      step2Goal: "$200",
      maxDailyLoss: "$100",
      maxDrawdown: "$200",
      evaluationFee: "$100"
    },
    {
      name: "Advanced",
      capital: "$5,000",
      profitShare: "90%",
      step1Goal: "$250",
      step2Goal: "$500",
      maxDailyLoss: "$250",
      maxDrawdown: "$500",
      evaluationFee: "$199"
    },
    {
      name: "Elite",
      capital: "$10,000",
      profitShare: "90%",
      step1Goal: "$500",
      step2Goal: "$1000",
      maxDailyLoss: "$500",
      maxDrawdown: "$1,000",
      evaluationFee: "$349"
    }
  ]

  return (
    <section id="plans" className="plans">
      <div className="plans-container">
        <div className="plans-header">
          <h2 className="plans-title">Choose Your Plan</h2>
          <p className="plans-subtitle">
            Select the capital level that matches your trading goals and experience
          </p>
        </div>
        <div className="plans-table-wrapper">
          <table className="plans-table">
            <thead>
              <tr>
                <th></th>
                {plans.map((plan, index) => (
                  <th key={index}>
                    <div className="plan-header-cell">
                      <div className="plan-capital">{plan.capital}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feature-label">Profit Share</td>
                {plans.map((plan, index) => (
                  <td key={index} className={plan.popular ? 'popular-cell' : ''}>
                    {plan.profitShare}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="feature-label">Step 1 Goal</td>
                {plans.map((plan, index) => (
                  <td key={index} className={plan.popular ? 'popular-cell' : ''}>
                    {plan.step1Goal}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="feature-label">Step 2 Goal</td>
                {plans.map((plan, index) => (
                  <td key={index} className={plan.popular ? 'popular-cell' : ''}>
                    {plan.step2Goal}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="feature-label">Max Daily Loss</td>
                {plans.map((plan, index) => (
                  <td key={index} className={plan.popular ? 'popular-cell' : ''}>
                    {plan.maxDailyLoss}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="feature-label">Max Drawdown</td>
                {plans.map((plan, index) => (
                  <td key={index} className={plan.popular ? 'popular-cell' : ''}>
                    {plan.maxDrawdown}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="feature-label">Evaluation Fee</td>
                {plans.map((plan, index) => (
                  <td key={index} className={plan.popular ? 'popular-cell' : ''}>
                    {plan.evaluationFee}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="plans-action">
          <a 
            href="https://app.plip.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="plan-button"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}

export default Plans

