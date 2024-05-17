import React from 'react'
import './Service.css'
export default function Services() {
  return (
    <div className='main-div'>
        <h1 style={{color:"rgb(85, 75, 75)",textAlign:"center",paddingTop:"30px"}}>Services</h1>
      <div className='sub-div'>

        <div className='par'>
        <div className='s1'><i class="fa-brands fa-figma"></i></div>
        <h1>EXPENSE TRACKING</h1>
        <h6>App consolidates all expenses from different accounts automatically based on SMS.</h6>
        </div>

        <div className='par'>
        <div className='s2'><i class="fa-regular fa-thumbs-up"></i></div>
        <h1>BILL REMINDERS</h1>
        <h6>Never miss Credit Card or Utility Bill Payment and avoid paying late payment fee</h6>
        </div>

        <div className='par'>
        <div className='s3'><i class="fa-solid fa-wallet"></i></div>
        <h1>ACCOUNT BALANCE</h1>
        <h6>Know the balance of your Bank Account, Mobile Wallet or Credit Card on the fly.</h6>
        </div>

        <div className='par'>
        <div className='s4'><i class="fa-solid fa-robot"></i></div>
        <h1>AUTOMATED</h1>
        <h6>Automatic tracking & categorization based on SMS. No manual setup or entries required.</h6>
        </div>

        <div className='par'>
        <div className='s5'><i class="fa-solid fa-mobile-screen-button"></i></div>
        <h1>MUCH MORE..</h1>
        <h6>Creative representation of your expenses through graphical trends. Subscription Manager. Sync with Family and many more features.</h6>
        </div>

        <div className='par'>
        <div className='s6 '><i class="fa-regular fa-comment-dots"></i></div>
        <h1>Feed Back</h1>
        <h6>Write any kind of qurries or compilents through based on SMS.</h6>
        </div>
       
      </div>
      
    </div>
  )
}

