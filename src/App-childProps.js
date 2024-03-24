import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Step />
      {/* <Step /> */}
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <>
      {/* 事件觸發函數通常會單獨寫出來，但如果不複雜可以直接寫在 event listener 內 */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              color="#fff"
              HandleOnClick={handlePrevious}
            >
              {/* 開始標籤與結束標籤間的值會當成 children prop 傳到 Button Component 中 */}
              <span>👈</span>Previous
            </Button>

            <Button bgColor="#7950f2" color="#fff" HandleOnClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step} </h3>
      {children}
    </div>
  );
}

function Button({ bgColor, color, HandleOnClick, children }) {
  return (
    <button
      style={{ background: bgColor, color: color }}
      onClick={HandleOnClick}
    >
      {children}
    </button>
  );
}
