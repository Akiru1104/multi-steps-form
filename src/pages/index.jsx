import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Header } from "../components/layer/Header";
import {
  ContactInfo,
  PrivateInfo,
  ProfileImage,
  Success,
} from "../components/steps";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-neutral-100 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white rounded-xl p-6 shadow">
        <Header />

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <ContactInfo />
              <button onClick={() => setStep(2)}>Continue 1/3 →</button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <PrivateInfo />
              <button onClick={() => setStep(1)}>← Back</button>
              <button onClick={() => setStep(3)}>Continue 2/3 →</button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <ProfileImage />
              <button onClick={() => setStep(2)}>← Back</button>
              <button onClick={() => setStep(4)}>Continue 3/3 →</button>
            </motion.div>
          )}

          {step === 4 && <Success />}
        </AnimatePresence>
      </div>
    </div>
  );
}
