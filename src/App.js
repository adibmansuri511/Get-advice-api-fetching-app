import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);


  return (
    <>
      <main className='d-flex justify-content-center align-items-center'>
        <div className='container'>
          <section className=''>
            <div className='row'>
              <div className='col-md-2'></div>

              <div className='col-md-8 bg-warning show-content px-4'>
                <h1 className='text-center my-4 pt-3'>Get Best Advice</h1>
                <h2 className='text-center my-5 py-4'>{advice}</h2>
                <div className='d-flex justify-content-center align-items-center my-4'>
                  <button type='button' className='py-2 px-3' onClick={getAdvice}>Get Advice</button>
                </div>
                <Message count={count} />
              </div>

              <div className='col-md-2'></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function Message(props) {
  return (
    <>
      <p className='text-center mt-3 fw-bolder fs-5'>
        You have read <strong>{props.count}</strong> piece of advice
      </p>
    </>
  );
}

export default App