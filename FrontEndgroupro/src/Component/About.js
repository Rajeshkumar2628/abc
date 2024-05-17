import React from 'react'
export default function About() {
    return (
        <div>

            <div className='container-fluid head d-flex'>
                <div className='col-6'>
                    <h1>Take managing your finances to a whole new level.</h1>
                    <p>Some of expense tracking most popular features are now available on XpenceTrack.
                        You’ll still be able to see your expenses and account balances in one place, track your net worth, monitor your categorized monthly cash flow,
                        and find opportunities to save money and navigate complex financial decisions. Better yet, it’s free.</p>
                    <button>Sign up Now</button>
                </div>
                <div className='col-6'>
                    {/* <img src={img1} alt='imageheading' style={{width:"75vh"}} /> */}
                </div>
            </div>

            <div className='container-fluid body'>
                <h1>Keep tabs on your money in one place.</h1>
                <p>Link your financial accounts from more than 17,000 financial institutions and view your transactions across those accounts in one place.</p>
            </div>

            <div className='container-fluid body1'>
                <h1>See your wealth grow.</h1>
                <p>View your assets, debts and investments in one place and see how they factor into your net worth.</p>
                <div className='col-6' style={{ display: "flex" }}>
                    <div>
                        <h6>Track your money stats and see how your wealth grows.</h6>
                    </div>
                    <div>
                        
                        <h6>See your financial standing and make choices confidently.</h6>
                    </div>
                </div>
                <button>Sign up Now</button>
            </div>

            <div className='container-fluid body2'>
                <h1>See your spending and find ways to save.</h1>
                <p>Get monthly insights into money habits so you can refine your spending by category and identify leftover funds to save or invest.</p>
            </div>

            <div className='container-fluid body3 '>
                <h1>Every transaction, tracked.</h1>
                <p>Keep tabs on your cash flow across your accounts, so expenses don’t slip through the cracks.</p>
                <div className='col-6 div1' >
                    <div>
                        <h6>View transactions from your connected accounts in one place.</h6>
                    </div>
                    <div>
                        
                        <h6>Monitor for subscriptions, fees and other changes.</h6>
                    </div>

                </div>
                <button>Sign up Now</button>
            </div>

            <div className='container-fluid body4'>
                <h1>Make financial progress at XpenceTrackx.</h1>
                <p>Find personalized credit card and loan recommendations, open checking and savings accounts,** maintain your great credit and more on the XpenceTrackx.</p>
            </div>

            <div className='container-fluid body5'>
                {/* <div className='col-6' style={{ display: "flex" }}> */}
                <h1>Start managing your finances now.</h1>
                <p>It’s free to sign up for XpenceTrackx. From there you can link your financial accounts and assets, so you can start monitoring your net worth and growing your wealth. </p>
                <button>Get Started</button>
                {/* </div> */}
            </div>
        </div>
    )
}
