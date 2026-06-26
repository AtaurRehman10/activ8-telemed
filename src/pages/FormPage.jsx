import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import WelcomeScreen from '../components/form/WelcomeScreen'
import Question1     from '../components/form/Question1'
import Question2     from '../components/form/Question2'
import Question3     from '../components/form/Question3'
import Question4     from '../components/form/Question4'
import Question5     from '../components/form/Question5'
import AssessmentQuestion from '../components/form/AssessmentQuestion'
import EmailStep     from '../components/form/EmailStep'
import ThankYou      from '../components/form/ThankYou'
import { hormoneQuestions, digestiveQuestions } from '../data/assessmentQuestions'

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/2xq26puvAn1EkdtStZFS/webhook-trigger/a422585d-f136-465a-987a-642844518e07'

const ASSESSMENTS = {
  hormones:  hormoneQuestions,
  digestive: digestiveQuestions,
}

function submitToWebhook(data) {
  fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).catch(() => {})
}

export default function FormPage() {
  const { search } = useLocation()
  const type = new URLSearchParams(search).get('type') || 'glp1'
  const assessment = ASSESSMENTS[type]

  const [step,    setStep]    = useState(0)
  const [answers, setAnswers] = useState({})

  const emailStep    = assessment ? 2 + assessment.length : 6
  const thankYouStep = emailStep + 1

  function saveAndAdvance(data) {
    const updated = { ...answers, ...data }
    setAnswers(updated)
    if (!assessment && step === 4 && data.triedGlp1 === 'no') {
      setStep(6)
    } else {
      setStep(s => s + 1)
    }
  }

  function handleEmailSubmit({ name, email }) {
    const payload = { ...answers, name, email, type }
    submitToWebhook(payload)
    setStep(thankYouStep)
  }

  function goBack() {
    if (!assessment && step === 6 && answers.triedGlp1 === 'no') {
      setStep(4)
    } else {
      setStep(s => Math.max(0, s - 1))
    }
  }

  if (step === 0) return <WelcomeScreen onStart={() => setStep(1)} />
  if (step === 1) return <Question1 onBack={goBack} onContinue={saveAndAdvance} />

  if (assessment) {
    const qIndex = step - 2
    if (qIndex >= 0 && qIndex < assessment.length) {
      const question = assessment[qIndex]
      return (
        <AssessmentQuestion
          key={question.field}
          question={question}
          stepNumber={qIndex + 1}
          totalSteps={assessment.length}
          onBack={goBack}
          onContinue={value => saveAndAdvance({ [question.field]: value })}
        />
      )
    }
  } else {
    if (step === 2) return <Question2 onBack={goBack} onContinue={saveAndAdvance} />
    if (step === 3) return <Question3 onBack={goBack} onContinue={saveAndAdvance} />
    if (step === 4) return <Question4 onBack={goBack} onContinue={saveAndAdvance} />
    if (step === 5) return <Question5 onBack={goBack} onContinue={saveAndAdvance} />
  }

  if (step === emailStep)    return <EmailStep onBack={goBack} onSubmit={handleEmailSubmit} />
  if (step === thankYouStep) return <ThankYou />
  return null
}
