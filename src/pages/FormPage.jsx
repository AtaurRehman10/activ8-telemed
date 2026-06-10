import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import WelcomeScreen from '../components/form/WelcomeScreen'
import Question1     from '../components/form/Question1'
import Question2     from '../components/form/Question2'
import Question3     from '../components/form/Question3'
import Question4     from '../components/form/Question4'
import Question5     from '../components/form/Question5'
import EmailStep     from '../components/form/EmailStep'
import ThankYou      from '../components/form/ThankYou'

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/2xq26puvAn1EkdtStZFS/webhook-trigger/a422585d-f136-465a-987a-642844518e07'

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

  const [step,    setStep]    = useState(0)
  const [answers, setAnswers] = useState({})

  function saveAndAdvance(data) {
    const updated = { ...answers, ...data }
    setAnswers(updated)
    if (type !== 'glp1' && step === 2) {
      setStep(6)
    } else if (step === 4 && data.triedGlp1 === 'no') {
      setStep(6)
    } else {
      setStep(s => s + 1)
    }
  }

  function handleEmailSubmit({ name, email }) {
    const payload = { ...answers, name, email, type }
    submitToWebhook(payload)
    setStep(7)
  }

  function goBack() {
    if (type !== 'glp1' && step === 6) {
      setStep(2)
    } else {
      setStep(s => Math.max(0, s - 1))
    }
  }

  if (step === 0) return <WelcomeScreen onStart={() => setStep(1)} />
  if (step === 1) return <Question1 onBack={goBack} onContinue={saveAndAdvance} />
  if (step === 2) return <Question2 onBack={goBack} onContinue={saveAndAdvance} />
  if (step === 3) return <Question3 onBack={goBack} onContinue={saveAndAdvance} />
  if (step === 4) return <Question4 onBack={goBack} onContinue={saveAndAdvance} />
  if (step === 5) return <Question5 onBack={goBack} onContinue={saveAndAdvance} />
  if (step === 6) return <EmailStep  onBack={goBack} onSubmit={handleEmailSubmit} />
  if (step === 7) return <ThankYou />
  return null
}
