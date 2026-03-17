import { useState } from 'react'
import WelcomeScreen from '../components/form/WelcomeScreen'
import Question1     from '../components/form/Question1'
import Question2     from '../components/form/Question2'
import Question3     from '../components/form/Question3'
import Question4     from '../components/form/Question4'
import Question5     from '../components/form/Question5'

export default function FormPage() {
  const [step,    setStep]    = useState(0)
  const [answers, setAnswers] = useState({})

  function saveAndAdvance(data) {
    const updated = { ...answers, ...data }
    setAnswers(updated)
    if (step === 4 && data.triedGlp1 === 'no') {
      setStep(6)
    } else {
      setStep(s => s + 1)
    }
  }

  function goBack() {
    setStep(s => Math.max(0, s - 1))
  }

  let screen = null
  if (step === 0) screen = <WelcomeScreen onStart={() => setStep(1)} />
  else if (step === 1) screen = <Question1 onBack={goBack} onContinue={saveAndAdvance} />
  else if (step === 2) screen = <Question2 onBack={goBack} onContinue={saveAndAdvance} />
  else if (step === 3) screen = <Question3 onBack={goBack} onContinue={saveAndAdvance} />
  else if (step === 4) screen = <Question4 onBack={goBack} onContinue={saveAndAdvance} />
  else if (step === 5) screen = <Question5 onBack={goBack} onContinue={saveAndAdvance} />

  if (!screen) return null
  return screen
}
