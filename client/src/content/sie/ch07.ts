import { question } from '../build.ts'
import type { Chapter, Question } from '../types.ts'
import { section } from './section.ts'

function sourced(
  id: string,
  sectionId: string,
  stem: string,
  options: [
    { text: string; why: string; correct?: boolean },
    { text: string; why: string; correct?: boolean },
    { text: string; why: string; correct?: boolean },
    { text: string; why: string; correct?: boolean },
  ],
): Question {
  return { ...question(id, stem, options), sectionId } as Question
}

export const optionsChapter: Chapter = {
  id: 'sie-ch-options',
  number: 7,
  title: 'Options: The Choice to Buy or Sell',
  summary: 'Calls, puts, premiums, and the basic option strategies.',
  sections: [
    section(
      'sie-c7-words',
      'Options Basics',
      'Some students find this chapter challenging. Remember that you will likely only see four or five options questions on your exam. And most of your SIE exam questions will cover the basics of why investors might choose a specific options strategy as opposed to performing the profit or loss calculations.\n\nIn this section, we will examine why investors use options and teach you the terminology associated with these investments.',
      [
        sourced(
          'sie07q0001',
          'sie-c7-words',
          'About how many options questions should a candidate expect on the SIE exam?',
          [
            { text: 'One or two', why: 'A one-or-two count is thinner than the handful of options items the exam is described as including.' },
            { text: 'Twenty or more', why: 'A block of twenty or more would treat options as a major exam topic rather than a short set of questions.' },
            { text: 'A dozen', why: 'Twelve items would make options a much larger slice of the exam than the four-or-five range given.' },
            { text: 'Four or five', why: 'The exam is expected to include only about four or five options questions, and those items lean toward why an investor would choose a strategy.', correct: true },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-terminology-and-uses-of-options',
      'Terminology and Uses of Options',
      'Understanding the terminology will help you to master options. Options are securities whose underlying value is based on (derived from) the value of the underlying investments to which they are linked. For this reason, options are sometimes referred to as derivatives.\n\nThese underlying investments can be individual stocks, baskets of stocks, interest rates, and even foreign currencies. An options value will rise or fall in tandem with its linked underlying investment. Rights and warrants are other types of derivatives linked to a specific underlying stock.\n\nOptions share some of the characteristics of these other derivative securities. While some options strategies are quite complex, the basic strategies covered on the SIE Exam fall into three main objectives:\n\n• Speculation: Making a bet on a future price of the underlying security • Hedging: Protecting an existing core long or short position-individual security or portfolio • Income Generation: Creating an additional income stream from existing long or short positions\n\nWe will examine each of these strategies in depth and will show you how the calculations work as we move through the chapter. Remember, don\'t worry about the math. The exam will likely focus more on the "how" and "why" of a given option strategy as opposed to questions requiring you to do extensive profit and loss calculations.\n\nAn option is a contract between two parties. The buyer of the contract is called the option holder. When the contract is entered into, the buyer (holder) pays an amount of money called a premium to the seller (writer).\n\nThe holder is also called the owner. You might also say that the buyer is long the contract. The seller of the contract is called the option writer.\n\nThe writer is also referred to as being short the contract.\n\n• Contract buyer = contract holder = long the contract\n• Contract seller = contract writer = short the contract\n\nWhen the contract is entered into, the buyer (holder) will pay an amount of money called a premium to the seller (writer). The premium is the current market price of the contract. This premium is paid as consideration for the writer making a promise regarding the underlying security.\n\nThis promise is sometimes referred to as the writer\'s obligation. In return for paying the premium, the buyer has the right to expect that the obligation is met. Notice these two important words-rights and obligations.\n\nRights are voluntary, meaning it is the buyer\'s choice whether to exercise the contract or not. The writer took the money so their obligation is mandatory. This means the writer MUST honor their promise.\n\nOption buyers pay a premium to receive a right. Option writers receive a premium and take on an obligation. What right is the buyer entitled to?\n\nTo answer that we must determine what promise (obligation) the writer has made. And this depends on the type of option contract involved. For this next example we will assume we are talking about options that are linked to common stocks.\n\nThere are two types of option contracts: Calls and Puts.\n\nExample. A call gives the holder the right to buy the underlying stock from the writer at a fixed price at any time during the life of the option. A call gives the holder the right to "call away" the security from the writer, making these call options. If the writer is called upon to honor their obligation (if the option is exercised), the writer MUST deliver the stock to the holder at the agreed-upon contract price.\n\nCall Buyer = RIGHT to BUY stock Call Writer = OBLIGATION to SELL (deliver) stock',
      [
        sourced(
          'sie07q0002',
          'sie-c7-terminology-and-uses-of-options',
          'Why are options classified as derivatives?',
          [
            { text: 'Their value is tied to a linked underlying investment', why: 'An option\'s value is derived from the investment it is linked to, which is why these contracts are called derivatives.', correct: true },
            { text: 'The issuer sets a fixed dividend on the contract', why: 'A dividend is a feature of stock, not the reason an option\'s value moves with something else.' },
            { text: 'They are always issued by the company whose shares they cover', why: 'Being a corporate issuance is not what makes a contract a derivative; the link to an underlying value is.' },
            { text: 'They pay interest like a bond until expiration', why: 'Interest payments describe debt securities, not the derived value of an option.' },
          ],
        ),
        sourced(
          'sie07q0003',
          'sie-c7-terminology-and-uses-of-options',
          'Which of these can serve as the underlying investment for an option?',
          [
            { text: 'Only the common stock of one company', why: 'A single stock is one possible underlying, but the list also includes baskets, interest rates, and foreign currencies.' },
            { text: 'Rights and warrants issued on that same stock', why: 'Rights and warrants are other derivatives linked to a stock, not the underlyings named for options.' },
            { text: 'Foreign currencies', why: 'Foreign currencies are named alongside individual stocks, baskets of stocks, and interest rates as possible underlyings.', correct: true },
            { text: 'The premium the writer already collected', why: 'The premium is the price of the contract itself, not the investment the contract is linked to.' },
          ],
        ),
        sourced(
          'sie07q0004',
          'sie-c7-terminology-and-uses-of-options',
          'An investor who sells calls against stock already owned, mainly to collect extra cash, is pursuing which basic objective?',
          [
            { text: 'Speculation', why: 'Speculation is a bet on a future price, not the collection of an added income stream from a position already held.' },
            { text: 'Hedging', why: 'Hedging is protection of an existing long or short position, not the income objective described here.' },
            { text: 'Income generation', why: 'Creating an additional income stream from an existing long or short position is the income-generation objective.', correct: true },
            { text: 'Switching a warrant into the underlying stock', why: 'Rights and warrants are other derivatives linked to a stock. Converting one is not the income-generation objective.' },
          ],
        ),
        sourced(
          'sie07q0005',
          'sie-c7-terminology-and-uses-of-options',
          'In options vocabulary, the contract seller is the same person as the',
          [
            { text: 'holder, who is long the contract', why: 'The holder is the buyer, and that person is long the contract, the opposite side of the seller.' },
            { text: 'owner who paid the premium', why: 'The owner is another name for the buyer, the party who pays the premium.' },
            { text: 'writer, who is short the contract', why: 'The seller, the writer, and the party who is short the contract are the same side of the trade.', correct: true },
            { text: 'clearing firm that guarantees the trade', why: 'A guarantor of settlement is not the vocabulary used for the customer who sells the contract.' },
          ],
        ),
        sourced(
          'sie07q0006',
          'sie-c7-terminology-and-uses-of-options',
          'What does the buyer hand the writer when the option contract is entered into?',
          [
            { text: 'The strike price, in full, on day one', why: 'The strike is the fixed price used only if the contract is later exercised, not the amount paid to open it.' },
            { text: 'A premium, which is the contract\'s current market price', why: 'The holder pays the writer a premium, and that premium is the current market price of the contract.', correct: true },
            { text: 'A promise that the holder will exercise before expiration', why: 'The buyer\'s right is voluntary. Paying the premium does not commit the holder to exercise.' },
            { text: 'Shares of the underlying stock', why: 'Stock changes hands only if a contract is exercised, and even then the direction depends on whether it is a call or a put.' },
          ],
        ),
        sourced(
          'sie07q0007',
          'sie-c7-terminology-and-uses-of-options',
          'How do the buyer\'s right and the writer\'s obligation differ once the premium has been paid?',
          [
            { text: 'Both sides may walk away if the stock moves the wrong way', why: 'Only the buyer\'s right is voluntary. The writer who took the premium cannot refuse the promise.' },
            { text: 'The buyer must exercise, and the writer may decline', why: 'That reverses the two roles. Exercise is the buyer\'s choice; the writer\'s duty is mandatory.' },
            { text: 'Neither party has a duty until the Options Clearing Corporation assigns the stock', why: 'The writer\'s obligation exists because the premium was taken; it is not optional for the writer.' },
            { text: 'The buyer may choose to exercise, but the writer must honor the promise', why: 'Rights are voluntary for the holder. The writer, having been paid, must meet the obligation.', correct: true },
          ],
        ),
        sourced(
          'sie07q0008',
          'sie-c7-terminology-and-uses-of-options',
          'A call holder who exercises is entitled to which action from the writer?',
          [
            { text: 'Buy the underlying stock from the writer at the fixed contract price', why: 'A call is the right to call the stock away: the holder buys, and the writer must deliver at the agreed price.', correct: true },
            { text: 'Sell the underlying stock to the writer at the fixed contract price', why: 'Selling the stock to the writer is the holder\'s right on a put, not on a call.' },
            { text: 'Force the writer to pay the premium back in cash', why: 'The premium was the price of the right. Exercise uses the right to buy the stock, not to unwind the premium.' },
            { text: 'Keep the stock and require the writer to buy more shares in the market', why: 'On exercise of a call, the writer must deliver the stock to the holder at the contract price.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-call-contract',
      'Call Contract',
      'The strike price (XP) is the fixed price of the security specified in the contract at which the holder can either "call away" the security or "put" the security. This may also be called the exercise price. The strike price of option contracts is standardized and set by the Options Clearing Corporation (OCC).\n\nThe OCC creates options and helps to organize the clearing and settlement of these securities.\n\nThe contract in this image indicates that the contract has a strike price of $45, meaning that the buyer (holder) has the right to purchase 100 shares of ABC stock for $45 per share, or $4,500.\n\nThe premium represents the amount of money the buyer will pay and the seller will receive. In the image above, the contract has a premium of 3, or $3 per share. Since this contract represents 100 shares, the price in dollar terms would be $300 ($3 x 100) for the contract.\n\nIn this contract, the customer has the right to buy 100 shares of ABC stock at $45 per share (the contract\'s strike price). For that right, the customer will pay a premium of 3, or $300.',
      [
        sourced(
          'sie07q0009',
          'sie-c7-call-contract',
          'Who standardizes and sets the strike prices of listed option contracts?',
          [
            { text: 'The company that issued the underlying stock', why: 'The corporation does not set listed option strikes. That role belongs to the Options Clearing Corporation.' },
            { text: 'The buyer and writer, negotiated for each contract', why: 'Listed strikes are standardized rather than privately negotiated between the two parties.' },
            { text: 'The exchange specialist who last traded the stock', why: 'A stock specialist is not described as the party that sets option strike prices.' },
            { text: 'The Options Clearing Corporation', why: 'Strike prices are standardized and set by the OCC, which also creates the options and organizes clearing and settlement.', correct: true },
          ],
        ),
        sourced(
          'sie07q0010',
          'sie-c7-call-contract',
          'A listed call is quoted with a strike of 45 and a premium of 3. What cash amounts do those quotes represent for one contract?',
          [
            { text: 'The right to buy 100 shares for $4,500, at a premium cost of $300', why: 'A 45 strike on 100 shares is $4,500 of stock, and a premium of 3 is $3 times 100, or $300.', correct: true },
            { text: 'The right to buy 45 shares for $300, at a premium cost of $3', why: 'The strike is a per-share price, not a share count, and the premium of 3 is $300 for the 100-share contract, not $3 total.' },
            { text: 'The right to buy 100 shares for $300, at a premium cost of $4,500', why: 'Those dollar figures are swapped. $4,500 is the stock at $45, and $300 is the premium.' },
            { text: 'The right to sell 100 shares for $4,500, at a premium received of $300', why: 'A call gives the holder the right to purchase shares, not to sell them, and the holder pays the premium rather than receiving it.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-example-of-a-call-contract',
      'Example of a Call Contract',
      ' A customer buys 1 XXX Jan 50 Call @1.The customer has the right to buy 100 shares of XXX stock at $50 per share (the strike price) until the contract expires in January, no matter what happens to XXX\'s market price. For that right, the buyer would pay a premium of 1, or $100, $1 for each of the 100 shares.\n\nPut Contract\n\nThe second type of contract gives the holder the right to sell the underlying stock to the writer at a fixed price at any time during the option\'s life. A put gives the holder the right to "put" the security to the writer, making these types of contracts called Put Options. The writer MUST buy the stock from the holder at the agreed contract price if called upon to honor the obligation.\n\nPut Buyer = RIGHT to SELL (deliver) stock Put Writer = OBLIGATION to BUY stock',
      [
        sourced(
          'sie07q0011',
          'sie-c7-example-of-a-call-contract',
          'A customer buys 1 XXX Jan 50 call at 1. Which right did that customer purchase?',
          [
            { text: 'To sell 100 shares of XXX at $50 at any time through January', why: 'The right to sell at the strike belongs to a put holder. This order is a call.' },
            { text: 'To buy 100 shares of XXX at the January market price, after paying $50', why: 'The fixed price in the contract is the $50 strike. The market price does not reset that right.' },
            { text: 'To buy 50 shares of XXX at $1 until the contract expires', why: '50 is the strike price per share, and 1 is the premium, not the number of shares or the purchase price of the stock.' },
            { text: 'To buy 100 shares of XXX at $50 through the January expiration, whatever the market price', why: 'One January 50 call is the right to buy 100 shares at $50 until January, no matter where the stock trades.', correct: true },
          ],
        ),
        sourced(
          'sie07q0012',
          'sie-c7-example-of-a-call-contract',
          'If a put is exercised, what must the writer do?',
          [
            { text: 'Deliver the stock to the holder at the strike', why: 'Delivering stock is the call writer\'s obligation. A put writer is on the other side of that trade.' },
            { text: 'Refund the premium and cancel the contract', why: 'The premium is the writer\'s to keep. Exercise does not undo that payment.' },
            { text: 'Buy the stock from the holder at the agreed contract price', why: 'A put holder has the right to sell, so the writer who is assigned must buy the stock at the contract price.', correct: true },
            { text: 'Sell the stock in the open market and keep any profit above the strike', why: 'The put writer\'s duty is to buy from the holder at the fixed price, not to sell stock into the market.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-example-of-a-put-contract',
      'Example of a Put Contract',
      'A customer buys 3 XXX Jan 50 Puts @ 6.The customer has the right to sell 300 shares of XXX stock at $50 a share until the contract expires in January, no matter what happens to XXX\'s market price. For this right, the buyer pays a premium of $1,800 (3 contracts x $6 x 100 shares).',
      [
        sourced(
          'sie07q0013',
          'sie-c7-example-of-a-put-contract',
          'A customer buys 3 XXX Jan 50 puts at 6. How many shares can be sold, and what premium is paid?',
          [
            { text: 'Sell 300 shares at $50, for a premium of $1,800', why: 'Three puts cover 300 shares at the $50 strike, and 3 times $6 times 100 equals an $1,800 premium.', correct: true },
            { text: 'Sell 100 shares at $50, for a premium of $600', why: 'One contract would cover 100 shares and a $600 premium. This order is for three contracts.' },
            { text: 'Buy 300 shares at $6, for a premium of $1,800', why: 'Puts give the right to sell, not to buy, and $6 is the per-share premium rather than the stock\'s purchase price.' },
            { text: 'Sell 50 shares at $6, for a premium of $300', why: '50 is the strike and 6 is the premium quote. Neither figure is the number of shares the three contracts cover.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-open',
      'Put and Call Contract Outcomes',
      'The holder of a contract has three choices regarding the contract:\n\n• Exercise the option • Leave the option to expire • Trade the option If the Contract Is Exercised\n• Exercise the option\n• Leave the option to expire\n• Trade the option\n\nIf the Contract Is Exercised\n\nIf a call contract is exercised, the holder buys the stock at the strike price from the contract writer. The writer who is assigned the contract is obligated to sell the underlying stock at the agreed-upon strike price. If a call option is exercised, the option writer must deliver the stock one business day after the exercise date.\n\nIf a put contract is exercised, the holder sells the underlying stock at the strike price to the contract writer. The writer is obligated to buy the underlying stock at the agreed-upon exercise price.\n\nIf a put option is exercised, the put seller must pay the strike price and buy the stock one business day after the exercise date.\n\nWhy is settlement one business day? The writer might need to go to the marketplace for the stock, and a stock trade takes one business day to settle.\n\nStock options are American style, which means the contract can be exercised at any time. In contrast, most index options are European style, which means the option can only be exercised at expiration.',
      [
        sourced(
          'sie07q0014',
          'sie-c7-open',
          'Once an option is open, which three choices does the holder have?',
          [
            { text: 'Exercise it, let it expire, or trade it', why: 'The holder may exercise, leave the option to expire, or trade the contract to someone else.', correct: true },
            { text: 'Exercise it, extend it for another year, or convert it into a warrant', why: 'Extension and conversion into a warrant are not among the holder\'s three choices.' },
            { text: 'Demand cash settlement, roll the strike, or force an early assignment on the OCC', why: 'Those steps are not the three choices given to the holder of the contract.' },
            { text: 'Only exercise it or let it expire; listed options cannot be traded', why: 'Trading the option is the third choice. The holder is not limited to exercise or expiration.' },
          ],
        ),
        sourced(
          'sie07q0015',
          'sie-c7-open',
          'A put is exercised on Monday. What must the assigned writer do, and by when?',
          [
            { text: 'Deliver the shares to the holder before the market opens the same day', why: 'Delivery of shares is the call writer\'s job. A put writer pays for and buys the stock.' },
            { text: 'Pay the strike price and buy the stock one business day after the exercise date', why: 'An exercised put requires the seller to buy the stock at the strike, with that settlement one business day after exercise.', correct: true },
            { text: 'Pay the holder the premium again on the third Friday of the month', why: 'The premium was already paid to open the contract. Exercise of a put is a stock purchase at the strike.' },
            { text: 'Buy the stock within nine months, the ordinary life of the option', why: 'Nine months is a typical time until expiration, not the settlement window after exercise. Settlement is one business day.' },
          ],
        ),
        sourced(
          'sie07q0016',
          'sie-c7-open',
          'How does exercise timing differ between stock options and most index options?',
          [
            { text: 'Stock options can be exercised only at expiration; most index options can be exercised at any time', why: 'That pairing is reversed. Stock options are the American-style contracts, and most index options are European-style.' },
            { text: 'Both can be exercised only on the third Friday, because both settle in stock', why: 'The style difference is any time versus expiration only. Most index options are not described as settling in stock.' },
            { text: 'Stock options may be exercised at any time; most index options may be exercised only at expiration', why: 'Stock options are American style. Most index options are European style and can be exercised only at expiration.', correct: true },
            { text: 'Neither type can be exercised; both must be closed by a sale on an exchange', why: 'Exercise is available for both styles. The difference is when that exercise is allowed.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-if-the-contract-is-left-to-expire',
      'If the Contract Is Left to Expire',
      'If the Contract Is Left to Expire If the holder of a contract allows the contract to expire, the premium paid is lost. The premium is the maximum loss for both call and put buyers. Most options expire within nine months of issuance.\n\nSome options, known as LEAPS (Long-term Equity Anticipation Securities), can have up to a 39-month life at issuance, which is sometimes approximated as three years.\n\n Example\n\nLet\'s say the customer is long 1 XYZ 50 Call and that on the expiration date, XYZ stock is trading at $40 per share. There is no reason to exercise a right to buy $40 stock for $50 per share. This option would expire with no value. In this case, the buyer of the call would experience their maximum loss-the premium paid.\n\nFrom the writer\'s perspective, the premium is the money kept if the option that expires has no value (worthless).\n\n(worthless). This is the maximum potential gain for both call and put writers.\n\nPremium Paid = Maximum potential LOSS for option buyers Premium Received = Maximum potential PROFIT for option writers lf the Contract Is Traded Options can be traded, just like stocks and bonds.',
      [
        sourced(
          'sie07q0017',
          'sie-c7-if-the-contract-is-left-to-expire',
          'What is the most a call buyer or a put buyer can lose?',
          [
            { text: 'The strike price times 100', why: 'The strike measures the stock price in the contract. It is not the ceiling on a buyer\'s loss.' },
            { text: 'An unlimited amount if the stock collapses', why: 'Unlimited loss is the risk of a naked call writer when the stock rises, not the risk of an option buyer.' },
            { text: 'The premium paid', why: 'If the holder lets the contract expire, the premium is lost, and that premium is the maximum loss for both call and put buyers.', correct: true },
            { text: 'Nothing, because an expired contract is always closed for a credit', why: 'Expiration does not produce a credit for the buyer. The premium already paid is gone.' },
          ],
        ),
        sourced(
          'sie07q0018',
          'sie-c7-if-the-contract-is-left-to-expire',
          'How long can a LEAPS contract last when it is first issued?',
          [
            { text: 'No more than nine months, the same as every other option', why: 'Nine months is the window within which most options expire. LEAPS are the longer exception.' },
            { text: 'Until the third Friday of the current month only', why: 'The third Friday is the last trading day of an expiring equity option, not the maximum life of a LEAPS at issuance.' },
            { text: 'One business day, because that is how equity options settle', why: 'One business day is a settlement period, not the life of a LEAPS contract.' },
            { text: 'Up to 39 months, sometimes described as about three years', why: 'LEAPS can have a life of up to 39 months at issuance, a span often approximated as three years.', correct: true },
          ],
        ),
        sourced(
          'sie07q0019',
          'sie-c7-if-the-contract-is-left-to-expire',
          'A customer is long 1 XYZ 50 call. On expiration, XYZ is trading at $40. What is the outcome for the writer?',
          [
            { text: 'The writer must deliver the stock at $40', why: 'There is no reason for the holder to buy $40 stock for $50, so the call is not exercised and the writer delivers nothing.' },
            { text: 'The writer keeps the premium, which is the writer\'s maximum potential gain', why: 'A worthless expiration lets the writer keep the premium, and that premium is the maximum gain for both call and put writers.', correct: true },
            { text: 'The writer refunds the premium because the call finished out of the money', why: 'The premium is not refunded. It is the amount the writer keeps when the option expires with no value.' },
            { text: 'The writer buys the stock at $50 and sells it at $40', why: 'That purchase-and-sale is not required. The call expires with no value, so the writer\'s gain is the premium.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-if-the-contract-is-traded',
      'If the Contract Is Traded',
      'Options can be traded, just like stocks and bonds. When a buyer trades a contract, they sell the contract to someone else prior to expiration. The buyer would profit if the premium received for selling the contract exceeded what was originally paid for the contract.\n\nThe holder would lose money if the premium received was below the contract\'s purchase price. Once the trade is completed, we would say that the buyer has closed their position.\n\nLikewise, the seller of a contract can close their position by buying the same contract in the market. The short (sold) position is offset by the long position, and the seller is left with no position.\n\nOption contracts are traded on option exchanges. For example, IBM stock is listed on the New York Stock Exchange, but IBM option contracts trade on the Chicago Board Options Exchange (Cboe).\n\nOptions trades settle one business day after the trade date (T+1). The last day to trade an equity option is the third Friday of the expiration month. Option markets close at 4 p.m.\n\nEST (Eastern Standard Time), 3 p.m. CST (Central Standard Time). An options contract can also be exercised on the third Friday of the month.\n\nUnlike stocks, options are not issued by a corporation with a fixed number of shares. Standardized option contracts are issued under rules set by the Options Clearing Corporation (OCC), a subsidiary of Cboe. The OCC issues the contracts, guarantees the contracts, and acts as a clearinghouse for all listed options trades.\n\nTheir number of options outstanding is determined by demand. To keep track of the total number of open positions, each option order must state not just whether it is a buy or sell but whether it is a buy or sell that is opening or closing a position.',
      [
        sourced(
          'sie07q0020',
          'sie-c7-if-the-contract-is-traded',
          'A holder sells the option before expiration for a higher premium than the one originally paid. What has happened?',
          [
            { text: 'The holder has a profit, and the sale closes the position', why: 'Selling above the original premium produces a profit, and completing that trade closes the buyer\'s position.', correct: true },
            { text: 'The holder has a profit only if the option is also exercised the same day', why: 'The profit on a sale comes from the premium difference. Exercise is a different choice and is not required.' },
            { text: 'The holder has locked in the maximum loss, which is the higher premium', why: 'A higher premium received is a gain, not a loss. The maximum loss for a buyer is the premium originally paid.' },
            { text: 'The writer is released only if the stock is above the strike', why: 'The holder\'s closing sale is measured by the two premiums. The stock\'s relation to the strike is a separate question.' },
          ],
        ),
        sourced(
          'sie07q0021',
          'sie-c7-if-the-contract-is-traded',
          'IBM stock is listed on the New York Stock Exchange. Where do IBM option contracts trade?',
          [
            { text: 'On the New York Stock Exchange, beside the shares', why: 'The stock\'s listing exchange is not the market named for the IBM option contracts.' },
            { text: 'On the Philadelphia Stock Exchange only', why: 'Philadelphia is where foreign-currency options trade, not the market named for IBM equity options.' },
            { text: 'Only in the interbank market, in units of about $5 million', why: 'The interbank market is the 24-hour market for currencies themselves, not the exchange for IBM options.' },
            { text: 'On the Chicago Board Options Exchange', why: 'IBM shares can be listed on the NYSE while the option contracts trade on the Cboe.', correct: true },
          ],
        ),
        sourced(
          'sie07q0022',
          'sie-c7-if-the-contract-is-traded',
          'When do listed options trades settle, and what is the last day to trade an equity option?',
          [
            { text: 'They settle in nine months, and the last trade is the day the LEAPS was issued', why: 'Nine months is a typical life from issuance, not the settlement cycle of an options trade.' },
            { text: 'They settle the same calendar day, and the last trade is the first Friday of the month', why: 'Settlement is one business day after the trade date, and the last trading day is the third Friday, not the first.' },
            { text: 'They settle T+1, and the last trading day is the third Friday of the expiration month', why: 'Options trades settle one business day after the trade date, and an equity option\'s last trading day is the third Friday of the expiration month.', correct: true },
            { text: 'They settle in 39 months, and the last trade is any business day the holder chooses', why: 'Thirty-nine months is the maximum life of a LEAPS at issuance, not the settlement time of a trade.' },
          ],
        ),
        sourced(
          'sie07q0023',
          'sie-c7-if-the-contract-is-traded',
          'What does the Options Clearing Corporation do for listed options, and what determines how many contracts are outstanding?',
          [
            { text: 'The issuing corporation prints a fixed number of contracts, the way it authorizes shares', why: 'Unlike stock, options are not issued by a corporation with a fixed number of shares.' },
            { text: 'The OCC issues, guarantees, and clears the contracts, and the number outstanding depends on demand', why: 'The OCC issues and guarantees listed options and clears the trades. How many are outstanding is set by demand.', correct: true },
            { text: 'The Cboe guarantees each contract, and the NYSE decides the open interest', why: 'The OCC, a subsidiary of the Cboe, is the issuer, guarantor, and clearinghouse. Outstanding contracts follow demand.' },
            { text: 'Each writer issues a private contract, and open interest is fixed on the third Friday', why: 'Standardized contracts are issued under OCC rules. Their number is not a private issue and is not frozen on expiration Friday.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-opening-and-closing-positions',
      'Opening and Closing Positions',
      'Opening and Closing Positions When someone buys or sells a call or put, the buyer is said to be opening a position. The buyer of a call or put is opening a long position. The seller of a call or put is opening a short position.\n\nThe holder is making an opening purchase; the writer is making an opening sale. Closing a position occurs when the holder or writer of an option takes the opposite position on the same option contract. Examples:\n\n• If you are long an ABC Corporation October 20 Call and you want to close your position, you would sell a call with the same strike price and expiration date. You have successfully closed your long position.\n• If you are short an ABC Corporation October 20 Call and you want to close out your position, you would buy a call with the same strike price and expiration date. You have successfully closed your short position.',
      [
        sourced(
          'sie07q0024',
          'sie-c7-opening-and-closing-positions',
          'A customer sells a put to establish a new option position. What kind of position is that sale?',
          [
            { text: 'An opening purchase of a long put', why: 'The buyer makes the opening purchase and is long. The seller is on the short side.' },
            { text: 'A closing purchase, because the writer is buying the obligation', why: 'A closing purchase is how a short position is offset. The initial sale of the put is an opening trade.' },
            { text: 'A closing sale, because every sale reduces open interest', why: 'A sale closes a position only when it offsets a contract the customer is already long.' },
            { text: 'An opening sale of a short put', why: 'Selling a put to establish the position is an opening sale, and the seller is opening a short position.', correct: true },
          ],
        ),
        sourced(
          'sie07q0025',
          'sie-c7-opening-and-closing-positions',
          'An investor is long an ABC October 20 call and wants the position gone. Which order closes it?',
          [
            { text: 'Buy another ABC October 20 call', why: 'Buying the same call would add a second long contract. Closing a long call requires a sale.' },
            { text: 'Sell an ABC October 25 call', why: 'A different strike is not the opposite position on the same contract, so the October 20 call would remain open.' },
            { text: 'Sell an ABC November 20 call', why: 'A different expiration does not offset the October contract.' },
            { text: 'Sell an ABC October 20 call', why: 'The long call is closed by selling a call with the same strike and the same expiration.', correct: true },
          ],
        ),
        sourced(
          'sie07q0026',
          'sie-c7-opening-and-closing-positions',
          'An investor is short an ABC October 20 call. How is that short position closed?',
          [
            { text: 'Buy an ABC October 20 call', why: 'A short call is closed by buying a call with the same strike and expiration, so the short is offset.', correct: true },
            { text: 'Sell another ABC October 20 call', why: 'Another sale would add to the short position rather than take the opposite side.' },
            { text: 'Exercise the call and deliver shares at $20', why: 'Exercise is the holder\'s choice. The short investor closes by trading the opposite contract.' },
            { text: 'Let the OCC convert the call into an October 20 put', why: 'Closing requires the opposite position on the same call. A call is not described as converting into a put.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-opening-and-closing-option-positions',
      'Opening and Closing Option Positions',
      'Ways to open and close a position:\n\n• Open by buying a call. Close by selling the call.\n• Open by selling a call. Close by buying the call.\n• Open by buying a put. Close by selling the put.\n• Open by selling a put. Close by buying the put.\n\nThe closing out of a position will likely result in a gain or a loss since, over time, it is likely the premium of the option has gone up or down based on the price movement of the underlying stock.\n\nWhen an option is traded, gains and losses are calculated by subtracting the premiums.\n\nExample\n• Open: Long ABC Oct 20 call @ 1.50 ($150)\n• Close: Short ABC Oct 20 call @ 4.50 ($450)\n• Profit: (4.50 − 1.50) × 100 shares = 3 points, or $300',
      [
        sourced(
          'sie07q0027',
          'sie-c7-opening-and-closing-option-positions',
          'Which pair of trades opens a position and then closes that same position?',
          [
            { text: 'Open by selling a put, and close by selling the put again', why: 'The second sale does not offset the short put. The closing trade for a short put is a purchase.' },
            { text: 'Open by buying a call, and close by buying a put with the same strike', why: 'A put does not close a call. The closing trade has to be the opposite trade in the same type of contract.' },
            { text: 'Open by selling a put, and close by buying that put', why: 'A short put is opened with a sale and closed with a purchase of the put.', correct: true },
            { text: 'Open by buying a put, and close by exercising a call', why: 'A long put is closed by selling the put. Exercising a call is a different contract and a different choice.' },
          ],
        ),
        sourced(
          'sie07q0028',
          'sie-c7-opening-and-closing-option-positions',
          'A customer opens a long ABC October 20 call at 1.50 and closes it by selling the same call at 4.50. What is the profit?',
          [
            { text: '$150, the premium paid to open', why: '$150 is the opening debit. The profit uses the difference between the two premiums, not the opening premium alone.' },
            { text: '$450, the premium received on the closing sale', why: '$450 is the closing credit. Profit subtracts the $150 that was paid to open.' },
            { text: '$300', why: 'The premium rose by 3 points, and 3 times 100 shares is a $300 profit.', correct: true },
            { text: '$600, the sum of the two premiums', why: 'Adding the premiums double-counts both sides. The gain is the sale premium minus the purchase premium.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-options-pricing',
      'Options Pricing',
      'In this section, we will examine how options are priced. The pricing of an option will depend on the relationship between the value of the underlying asset and the contract\'s strike price. Another factor affecting pricing is the time remaining until expiration-more time until expiration generally means an option costs more.',
      [
        sourced(
          'sie07q0029',
          'sie-c7-options-pricing',
          'Two influences on an option\'s price are the stock-versus-strike relationship and which other factor?',
          [
            { text: 'The dividend the writer must pay the holder each month', why: 'A monthly dividend from writer to holder is not a pricing factor named for the contract.' },
            { text: 'How much time remains until expiration', why: 'More time until expiration generally means the option costs more, along with where the underlying sits relative to the strike.', correct: true },
            { text: 'Whether the contract was opened on the Cboe or the NYSE', why: 'The listing venue of the stock is not the pricing factor paired with the strike relationship.' },
            { text: 'The number of shares the corporation has authorized', why: 'Authorized shares fix nothing about an option premium. Price depends on the underlying versus the strike, and on time left.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-premium-determination',
      'Premium Determination',
      'Just as the market price of a stock is continuously fluctuating, the market price of options will rise and fall as the underlying stock rises and falls. But unlike stocks, options have a limited amount of time before they expire. The two primary factors affecting an option\'s price are intrinsic value and time value.\n\nIntrinsic Value\n\nAn option has intrinsic value if the option\'s strike price is better than the price of its underlying stock. For example, if a stock was trading at $57 and you owned a call with a strike price of 50, you could buy the stock for $7 a share less than the current market price. The call\'s intrinsic value is $7.\n\nAny intrinsic value will be part of the option\'s premium. The higher the intrinsic value, the higher the premium.\n\nIn the Money (Intrinsic Value) for Calls\n\nA call is in the money if the stock price is higher than the strike price of the option. If a stock was trading at 57, a call with a strike price of 50 would have an intrinsic value of 7. If the stock rose to $60, the 50 strike call would have an intrinsic value of 10.\n\nThis intrinsic value is the amount an option is in the money.\n\nExample Assume a customer wants to buy 1 ABC Jan 50 call when the market price of ABC stock is $52 per share. This contract has an intrinsic value of $2 per share. The option holder would have the right to buy ABC at $50 per share when the stock is currently trading for $52 per share.\n\nThe call contract is said to be in the money by $2. At a minimum, the option\'s premium would be 2.',
      [
        sourced(
          'sie07q0030',
          'sie-c7-premium-determination',
          'What are the two primary factors that affect an option\'s price?',
          [
            { text: 'Intrinsic value and time value', why: 'Those two factors, intrinsic value and time value, are the primary drivers of an option\'s price.', correct: true },
            { text: 'The strike price and the number of contracts the OCC has issued', why: 'Open interest is not one of the two primary price factors. Intrinsic value and time value are.' },
            { text: 'The premium already paid and the writer\'s margin', why: 'Margin is not named as a primary pricing factor. The premium itself is what intrinsic value and time value add up to.' },
            { text: 'Parity and the third-Friday close', why: 'Parity is a special case of premium versus intrinsic value. It is not listed as one of the two primary factors.' },
          ],
        ),
        sourced(
          'sie07q0031',
          'sie-c7-premium-determination',
          'A stock is trading at $57. What is the intrinsic value of a call with a strike of 50?',
          [
            { text: '$7', why: 'The call lets the holder buy at $50 while the stock is $57, so the intrinsic value is $7.', correct: true },
            { text: '$50', why: 'Fifty dollars is the strike, the fixed purchase price, not the amount the call is in the money.' },
            { text: '$57', why: 'Fifty-seven dollars is the stock\'s market price. Intrinsic value is the $7 gap between that price and the strike.' },
            { text: 'Zero, because only puts have intrinsic value', why: 'A call has intrinsic value when the stock price is above the strike. This call is in the money by $7.' },
          ],
        ),
        sourced(
          'sie07q0032',
          'sie-c7-premium-determination',
          'When is a call in the money, and what happens to a 50 strike call\'s intrinsic value if the stock rises from $57 to $60?',
          [
            { text: 'A call is in the money when the stock is below the strike, and the intrinsic value would fall from 7 to 4', why: 'A stock below the strike is out of the money for a call. A rise from $57 to $60 increases intrinsic value.' },
            { text: 'A call is in the money when the premium exceeds 10, regardless of the stock price', why: 'In-the-money status compares the stock price with the strike. The premium is not the test.' },
            { text: 'A call is in the money only when the stock equals the strike, so both prices leave intrinsic value at zero', why: 'Equal prices are at the money, which has no intrinsic value. Both $57 and $60 are above a 50 strike.' },
            { text: 'A call is in the money when the stock is above the strike, and intrinsic value would rise from 7 to 10', why: 'The call is in the money with the stock above the strike. At $60 the 50 strike call is in the money by 10, up from 7.', correct: true },
          ],
        ),
        sourced(
          'sie07q0033',
          'sie-c7-premium-determination',
          'ABC stock is at $52. A customer wants to buy 1 ABC Jan 50 call. What is the least the premium can be?',
          [
            { text: '0, because the contract still has time value to be determined', why: 'Time value can sit on top of intrinsic value, but it cannot reduce the premium below the $2 of intrinsic value.' },
            { text: '2', why: 'The call is in the money by $2, so the premium must be at least 2.', correct: true },
            { text: '50, the strike price', why: 'The strike is the price at which the stock can be called, not the minimum premium of the option.' },
            { text: '52, the current stock price', why: 'The stock price is not the premium. The minimum premium equals the $2 of intrinsic value.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-at-the-money-for-calls',
      'At the Money for Calls',
      'Assume a customer wants to buy 1 ABC Jan 50 Call with a premium of 3 when the market price of ABC stock is $50 per share. This contract has no intrinsic value (the holder can buy stock at $50, which is the same as the market price). This contract is said to be at the money.\n\nOut of the Money for Calls Assume a customer wants to buy 1 ABC Jan 50 Call @1 when the market price is $47 per share. This contract has no intrinsic value. This contract is out of the money (also termed "out the money") by $3.\n\nWhy would someone buy this call? Their hope would be that sometime between now and the expiration of the option in January, the price of ABC stock will rise above $50 per share. In this case, the premium of 1 ($100) is all time value.\n\nIn the Money (Intrinsic Value) for Puts\n\nPut options have intrinsic value when the market price of the stock falls below the strike price of the option. So, if the market price of the stock is below the strike price of the put option, the put is in the money. So, if the market price of the stock is below the strike price of the put option, the puts in the money.\n\nIf the stock falls to $45, a 50 strike put would have an intrinsic value of 5.\n\nIf the stock falls to $40, the 50 strike put would have an intrinsic value of 10.\n\nThe amount of intrinsic value is the amount that the option is in the money. Example Assume a customer wants to buy 1 ABC Jan 50 put when the market price of ABC is $44 per share. This contract has an intrinsic value of $6 per share.\n\nThe holder would have the right to sell ABC stock at $50 per share when the stock is currently trading for $44 per share. The put contract is said to be in the money by $6. At a minimum, the option\'s premium would be 6.',
      [
        sourced(
          'sie07q0034',
          'sie-c7-at-the-money-for-calls',
          'A customer looks at 1 ABC Jan 50 call quoted at 3 while ABC stock is at $50. How is that call classified?',
          [
            { text: 'In the money by 3, because the premium is 3', why: 'The premium is not intrinsic value here. The strike and the stock price are the same, so intrinsic value is zero.' },
            { text: 'Out of the money by 3', why: 'Out of the money would require the stock to be below the call\'s strike. Here the two prices match.' },
            { text: 'At the money, with no intrinsic value', why: 'Buying stock at $50 when the market is $50 adds no intrinsic value, so the call is at the money.', correct: true },
            { text: 'At parity, because the premium equals the stock price', why: 'Parity means the premium equals intrinsic value. This premium is 3 and the intrinsic value is zero, and the contract is described as at the money.' },
          ],
        ),
        sourced(
          'sie07q0035',
          'sie-c7-at-the-money-for-calls',
          'ABC stock is at $47 and a customer buys 1 ABC Jan 50 call at 1. What is that $100 premium made of?',
          [
            { text: 'All intrinsic value, because the call is in the money by $3', why: 'The stock is below the strike, so the call has no intrinsic value. It is out of the money by $3.' },
            { text: 'A refundable deposit equal to the $50 strike', why: 'The premium is the price of the contract. It is not a deposit of the strike, and this premium is time value.' },
            { text: '$3 of intrinsic value and $1 of time value', why: 'The $3 figure is how far the call is out of the money, not intrinsic value. Out-of-the-money calls have zero intrinsic value.' },
            { text: 'All time value', why: 'The call is out of the money and has no intrinsic value, so the premium of 1, or $100, is entirely time value.', correct: true },
          ],
        ),
        sourced(
          'sie07q0036',
          'sie-c7-at-the-money-for-calls',
          'A 50 strike put is compared at two stock prices. What is its intrinsic value if the stock is $45, and if the stock is $40?',
          [
            { text: 'Zero at $45, and 10 at $40', why: 'A put gains intrinsic value as the stock falls below the strike. At $45 the 50 put is already in the money.' },
            { text: '5 at $45, and 10 at $40', why: 'With the stock below the strike, the put\'s intrinsic value is 5 at $45 and 10 at $40.', correct: true },
            { text: '5 at $45, and 5 at $40', why: 'The second drop adds intrinsic value. At $40 the same 50 put is in the money by 10, not by 5.' },
            { text: '10 at $45, and 5 at $40', why: 'Those amounts are reversed. The put is deeper in the money at the lower stock price.' },
          ],
        ),
        sourced(
          'sie07q0037',
          'sie-c7-at-the-money-for-calls',
          'Intrinsic value puts a floor under the premium of a January 50 put while ABC is at $44. What is that floor?',
          [
            { text: '6', why: 'The holder can sell at $50 while the stock is $44, so the put is in the money by $6 and the premium is at least 6.', correct: true },
            { text: '0, because puts are in the money only when the stock rises', why: 'A put is in the money when the stock is below the strike. This stock is $6 below the strike.' },
            { text: '44, the market price of the stock', why: 'The stock price is not the premium. The minimum premium is the $6 of intrinsic value.' },
            { text: '50, the strike price', why: 'The strike is the sale price the put grants. It is not the minimum premium.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-at-the-money-for-puts',
      'At the Money for Puts',
      'If the strike price and the market price are the same, a put option is at the money.\n\nExample. An ABC 50 put with a premium of $3 has no intrinsic value if ABC stock is trading at $50 per share. The total premium of $3 is made up entirely of time value. This contract is at the money.\n\nOut of the Money for Puts\n\nA put is out of the money if the market price of the stock is above the strike price of the put. An ABC 50 put has no intrinsic value if ABC stock is trading at $53 per share. This contract is out of the money by $3 per share.\n\n Buyers Want More Intrinsic Value; Sellers Want None\n\nIncreasing intrinsic value is good for the option buyer since the contract is becoming more valuable. Increasing intrinsic value is bad for the option writer because their obligation is growing. The writer\'s best outcome is if the option expires worthless ($0 intrinsic value).',
      [
        sourced(
          'sie07q0038',
          'sie-c7-at-the-money-for-puts',
          'An ABC 50 put is quoted at $3 while ABC stock trades at $50. What makes up that premium?',
          [
            { text: 'Three dollars of intrinsic value, because the put is in the money', why: 'Intrinsic value would require the stock to be below the strike. Here the prices are equal.' },
            { text: 'Nothing, because an at-the-money put cannot have a premium', why: 'The put does have a $3 premium. That amount is time value rather than intrinsic value.' },
            { text: 'Parity of $3, because the premium equals the strike', why: 'The premium does not equal the $50 strike. The contract is at the money, and the premium is time value.' },
            { text: 'Entirely time value, and the put is at the money', why: 'With the strike and the market price the same, the put has no intrinsic value, so the $3 premium is all time value.', correct: true },
          ],
        ),
        sourced(
          'sie07q0039',
          'sie-c7-at-the-money-for-puts',
          'Whose position improves when intrinsic value rises, and what result does the writer prefer?',
          [
            { text: 'The writer benefits, and the writer\'s best result is a deep in-the-money expiration', why: 'Rising intrinsic value enlarges the writer\'s obligation. The writer does not want the contract to finish in the money.' },
            { text: 'The buyer benefits, and the writer is best off if the option expires worthless', why: 'More intrinsic value makes the contract more valuable for the buyer. The writer\'s best outcome is a worthless expiration with zero intrinsic value.', correct: true },
            { text: 'Both sides benefit equally, because the premium is shared', why: 'The premium was already paid. After that, rising intrinsic value helps the buyer and hurts the writer.' },
            { text: 'Neither side is affected, because intrinsic value is fixed on the trade date', why: 'Intrinsic value changes as the stock moves relative to the strike. It is not frozen when the trade is opened.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-time-value',
      'Time Value',
      'The second component of an option\'s premium is time value. This represents the extra amount above intrinsic value (if any) the buyer is willing to pay in hopes that the contract\'s value will increase over time. The longer the contract has until expiration, the greater the chance that the underlying security\'s price will move in the desired direction.\n\nAll things being equal, the longer until expiration the higher the time value.\n\nAssume it is April, and you are looking at an ABC May 45 call versus an ABC Aug 45 call. All things being equal, the August call will be more expensive since it has a longer expiration, increasing the option\'s premium. This happens because buyers are willing to pay more for a longer time to expiration, since this means there is a longer window for the stock to move in the buyer\'s favor.\n\nOn the other hand, writers will be at risk for a longer time so they will demand to be paid more.',
      [
        sourced(
          'sie07q0040',
          'sie-c7-time-value',
          'In April, an ABC May 45 call and an ABC August 45 call are compared, with everything else equal. Which costs more, and why?',
          [
            { text: 'The May call, because a nearer expiration carries more intrinsic value', why: 'Both calls have the same strike, so intrinsic value is not what separates them. The longer contract has more time value.' },
            { text: 'The May call, because writers cut the premium as expiration approaches', why: 'A shorter life reduces what buyers will pay and what writers can demand. The August call is the more expensive of the two.' },
            { text: 'They cost the same, because time value does not change with the expiration month', why: 'All else equal, more time until expiration means higher time value. The two months are not priced alike.' },
            { text: 'The August call, because buyers pay more for a longer window and writers demand more for a longer risk', why: 'The August call expires later, so its time value, and therefore its premium, is higher. Writers are at risk longer and require more premium.', correct: true },
          ],
        ),
        sourced(
          'sie07q0041',
          'sie-c7-time-value',
          'What is the time-value portion of an option premium?',
          [
            { text: 'The amount by which the stock price exceeds the strike', why: 'Stock price minus strike is intrinsic value on a call, not the extra amount paid above that intrinsic value.' },
            { text: 'The strike price itself, which stays fixed for the life of the contract', why: 'The strike is a contract term. Time value is a component of the premium above any intrinsic value.' },
            { text: 'The extra amount, above any intrinsic value, that the buyer pays for the chance the contract will gain value', why: 'Time value is that extra amount. A longer life raises it because the stock has more time to move the buyer\'s way.', correct: true },
            { text: 'The premium the writer must return if the option expires out of the money', why: 'The writer keeps the premium if the option expires worthless. Time value is not a refundable deposit.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-combining-intrinsic-and-time-value-i',
      'Combining Intrinsic and Time Value Intrinsic Value + Time Value = Premium',
      'As the option gets closer to expiration, the time value component will shrink. On the last day of trading, the option will be priced at its intrinsic value only (if any exists). If the option is at the money or out of the money, the option would have no intrinsic value and would expire with no value. Example 1 A customer buys 1 ABC Jan 50 Call @ 4 when the market price of ABC is $51. How much of the premium is time value? Answer: Since the contract is in the money by $1 per share (the holder can buy stock for $50 when it is worth $51), the remaining $3 per share is the time premium.\n\nExample 2 A customer buys 1 ABC Jan 50 Call @ 2 when the market price of ABC is $49. Answer: Since the contract is out of the money by $1 per share (the holder can buy stock for $50 when it is worth $49), its intrinsic value is $0, and the entire $2 premium is time value.\n\nAs Contract Goes In the Money-Premium Increases\n\nAs a contract moves in the money, the intrinsic value portion of the premium increases in the market to reflect the increased value. As a contract moves out of the money, the premium falls in the market to reflect the decreased value.',
      [
        sourced(
          'sie07q0042',
          'sie-c7-combining-intrinsic-and-time-value-i',
          'A customer buys 1 ABC Jan 50 call at 4 while ABC is at $51. How much of the premium is time value?',
          [
            { text: '$4, because a call has no intrinsic value until expiration', why: 'This call is already in the money by $1. Only the remaining $3 of the premium is time value.' },
            { text: '$1', why: 'One dollar is the intrinsic value, the amount the call is in the money. It is not the time premium.' },
            { text: '$3', why: 'Of the $4 premium, $1 is intrinsic value and the other $3 per share is time value.', correct: true },
            { text: 'Zero, because the call is out of the money by $1', why: 'The stock is $1 above the strike, so the call is in the money, not out of it. Time value is the other $3.' },
          ],
        ),
        sourced(
          'sie07q0043',
          'sie-c7-combining-intrinsic-and-time-value-i',
          'ABC trades at $49 when an investor pays 2 for the January 50 call. Divide that premium into intrinsic value and time value.',
          [
            { text: 'Intrinsic value of $1 and time value of $1', why: 'The $1 gap is how far the call is out of the money. Out-of-the-money intrinsic value is zero, not $1.' },
            { text: 'Intrinsic value of $2 and no time value', why: 'The call cannot be exercised for a profit at these prices, so none of the premium is intrinsic value.' },
            { text: 'No premium value at all, because the contract is out of the money', why: 'The contract still has a $2 premium. Being out of the money removes intrinsic value, not the whole premium.' },
            { text: 'Intrinsic value of zero and time value of $2', why: 'The holder would buy at $50 while the stock is worth $49, so intrinsic value is zero and the entire premium is time value.', correct: true },
          ],
        ),
        sourced(
          'sie07q0044',
          'sie-c7-combining-intrinsic-and-time-value-i',
          'What happens to an option\'s time value as expiration approaches, and how is the contract priced on the last day of trading?',
          [
            { text: 'Time value shrinks, and on the last trading day the option is priced at intrinsic value only', why: 'Time value decays toward expiration. On the last trading day only intrinsic value, if any, remains in the price.', correct: true },
            { text: 'Time value grows, and on the last trading day the premium equals the original strike', why: 'Time value shrinks as expiration nears. The last price is intrinsic value, not the strike.' },
            { text: 'Time value stays constant until the third Friday, then the premium doubles', why: 'Time value does not hold steady and then double. It shrinks, and an at- or out-of-the-money option expires with no value.' },
            { text: 'Time value is removed on the trade date, so the premium is intrinsic value from the start', why: 'Both components can be present during the life of the contract. Time value disappears as expiration arrives, not on the day the trade is opened.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-as-contract-goes-out-of-the-money-pr',
      'As Contract Goes Out of the Money-Premium Decreases',
      'In-the-money and out-of-the-money amounts are always looked at from the holder\'s perspective; an in-the-money contract is one that can be exercised to the profit of the holder. An out-of-the-money contract is one that would not be exercised. The farther a contract moves out of the money, the less it will be worth and the lower the premium.\n\nContract Is: What This Means Intrinsic Value Effect on Premium\n\nIn the Money (ITM) Exercising is profitable Has value Increases as it moves further ITM Out of the Money (OTM) Exercising is not Has no value Decreases as it moves profitable further OTM\n\nIn and Out from Each Party\'s Perspective\n\nHolders are happy when contracts are in the money since they have the right to buy (a call) or sell (a put) at a price that is better than the current market price. The more an option goes in the money, the greater the potential return for the option\'s owner. Holders (buyers) are unhappy when contracts go out of the money as the value of the option declines. Writers are unhappy when a contract is in the money because:\n\n• If assigned, put writers would be forced to buy (be put) stock at a price higher than the market.\n• If assigned, call writers would be forced to sell (deliver) stock at a price below the current market.\n\nWriters are happy when a contract is out of the money since they hope the contract will eventually expire worthless.\n\nTo summarize for call contracts: Calls are in the money when the market price is HIGHER than the strike price. Calls are at the money when the market price is the SAME as the strike price. Calls are out of the money when the market price is LOWER than the strike price. The situation is reversed for put contracts.\n\nTo summarize for put contracts:\n\nPuts are in the money when the market price is LOWER than the strike price.\n\nPuts are at the money when the market price is the SAME as the strike price.\n\nPuts are out of the money when the market price is HIGHER than the strike price.\n\nExamples of in the money and out of the money for put contracts are shown below: Example 1 A customer buys 1 ABC Jan 50 Put @ 5 when the market price of ABC stock is 48. Since the holder has the right to sell stock for $50 when it is only worth $48 in the market, the contract has an intrinsic value of $2 per share. The put is in the money by $2. Since the total premium is $5, the $3 excess premium above intrinsic value is the time value portion of the premium.\n\nExample 2 A customer buys 1 ABC Jan 50 Put @ 3 when the market price of ABC stock is 50. The holder can sell stock for $50 when it is worth $50 in the market. This contract is at the money and has no intrinsic value. The entire premium is time value. Example 3 A customer buys 1 ABC Jan 50 Put @ 1 when the market price of ABC stock is 52. The holder can sell stock for $50 that is currently worth $52. This contract is out of the money by $2 per share and has an intrinsic value of $0. The low premium of $1 reflects this and is made up entirely of time value. Parity Another term that must be known for options contracts is parity. When the market premium exactly equals the intrinsic value of the option, the contract is said to be trading at parity. For example, an ABC Jul 50 Call @ 3 is at parity when the market price of ABC stock is at 53. An ABC Jul 50 Put @ 3 is at parity when the market price of ABC stock is at $47.',
      [
        sourced(
          'sie07q0045',
          'sie-c7-as-contract-goes-out-of-the-money-pr',
          'From whose point of view are in-the-money and out-of-the-money amounts measured?',
          [
            { text: 'The writer\'s, because the writer decides whether exercise is profitable', why: 'The writer has an obligation, not the choice to exercise. Moneyness is judged from the holder\'s side.' },
            { text: 'The holder\'s', why: 'An in-the-money contract is one the holder can exercise at a profit, so these amounts are always read from the holder\'s perspective.', correct: true },
            { text: 'The OCC\'s, based on open interest', why: 'Open interest counts contracts. It is not the viewpoint used to decide whether a contract is in the money.' },
            { text: 'The exchange\'s, based on the previous night\'s settlement', why: 'Moneyness compares the holder\'s exercise right with the market. It is not an exchange accounting label.' },
          ],
        ),
        sourced(
          'sie07q0046',
          'sie-c7-as-contract-goes-out-of-the-money-pr',
          'What happens to an option\'s premium as the contract moves farther out of the money?',
          [
            { text: 'The premium rises, because exercise becomes more profitable for the holder', why: 'Exercise is not profitable on an out-of-the-money contract. Moving further out of the money lowers the premium.' },
            { text: 'The premium goes to the strike price', why: 'The strike is not the premium. A deeper out-of-the-money contract is worth less, not more.' },
            { text: 'The premium is unchanged, because only time value can move', why: 'Moving out of the money reduces value. The premium decreases as the contract goes further out.' },
            { text: 'The premium falls', why: 'An out-of-the-money contract would not be exercised. The farther it moves that way, the less it is worth and the lower the premium.', correct: true },
          ],
        ),
        sourced(
          'sie07q0047',
          'sie-c7-as-contract-goes-out-of-the-money-pr',
          'Why is an in-the-money call unwelcome to the writer if the call is assigned?',
          [
            { text: 'The writer must buy stock at a price above the market', why: 'Being forced to buy above the market is the assigned put writer\'s problem, not the call writer\'s.' },
            { text: 'The writer must sell stock at a price below the current market', why: 'An assigned call writer delivers stock at the strike, which is below the market when the call is in the money.', correct: true },
            { text: 'The writer forfeits the premium and the strike', why: 'The writer already received the premium. Assignment on a call requires delivery of stock below the market price.' },
            { text: 'The writer may refuse the assignment because the contract is in the money', why: 'The writer\'s obligation is mandatory. Being in the money is exactly when that obligation hurts.' },
          ],
        ),
        sourced(
          'sie07q0048',
          'sie-c7-as-contract-goes-out-of-the-money-pr',
          'For calls, how do the in-the-money, at-the-money, and out-of-the-money tests line up with the stock price?',
          [
            { text: 'In the money below the strike, at the money at the strike, out of the money above the strike', why: 'That is the put pattern. Calls are the reverse: in the money when the market is higher than the strike.' },
            { text: 'In the money above the strike, at the money at the strike, out of the money below the strike', why: 'A call is in the money when the market is higher than the strike, at the money when the prices match, and out of the money when the market is lower.', correct: true },
            { text: 'In the money only when the premium is zero, regardless of the stock price', why: 'Moneyness compares the market price with the strike. A zero premium is not the test.' },
            { text: 'Always the same as puts, because both use the holder\'s perspective', why: 'Both are judged from the holder\'s side, but the stock-versus-strike test for puts is the reverse of the test for calls.' },
          ],
        ),
        sourced(
          'sie07q0049',
          'sie-c7-as-contract-goes-out-of-the-money-pr',
          'An ABC January 50 put is purchased at 5 with the shares at 48. After intrinsic value is taken out, how much of that premium is time value?',
          [
            { text: '$5', why: 'Five dollars is the whole premium. Two dollars of it is intrinsic value, because the put is in the money by $2.' },
            { text: '$2', why: 'Two dollars is the intrinsic value, the amount the put is in the money, not the time-value remainder.' },
            { text: '$3', why: 'The put is in the money by $2, so $3 of the $5 premium is the excess that represents time value.', correct: true },
            { text: 'Zero, because the put is out of the money by $2', why: 'The holder can sell at $50 while the stock is worth $48, so the put is in the money, not out of it.' },
          ],
        ),
        sourced(
          'sie07q0050',
          'sie-c7-as-contract-goes-out-of-the-money-pr',
          'An ABC July 50 call is quoted at 3. At what stock price is that call trading at parity?',
          [
            { text: '$47', why: 'A stock price of $47 would put a 50 put quoted at 3 at parity. This contract is a call.' },
            { text: '$50', why: 'At $50 the call is at the money and its intrinsic value is zero, so a premium of 3 is not parity.' },
            { text: '$53', why: 'Parity means the premium equals intrinsic value. A 50 call at 3 has $3 of intrinsic value when the stock is at 53.', correct: true },
            { text: '$3', why: 'Three is the premium. Parity is reached when the stock price makes intrinsic value equal that premium.' },
          ],
        ),
        sourced(
          'sie07q0051',
          'sie-c7-as-contract-goes-out-of-the-money-pr',
          'A July 50 put priced at 3 is at parity when ABC reaches which market price?',
          [
            { text: '$53', why: '$53 is the parity price for a 50 call quoted at 3. A put\'s intrinsic value grows when the stock falls.' },
            { text: '$50', why: 'At $50 the put has no intrinsic value, so a premium of 3 is all time value, not parity.' },
            { text: '$47', why: 'At $47 the 50 put has $3 of intrinsic value, matching the premium of 3, so the put is at parity.', correct: true },
            { text: '$44', why: 'At $44 the put would have $6 of intrinsic value, which is more than the premium of 3, so it would not be at parity.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-speculative-strategies',
      'Speculative Strategies',
      'In this section we will examine how options are used to speculate on the direction of the underlying asset. Options buyers appreciate options since they can control a sizable position while only paying a relatively small premium. This provides buyers with leverage.\n\nOn the other hand, options writers take in premium up front in the hopes that the option will expire worthless (with no value).',
      [
        sourced(
          'sie07q0052',
          'sie-c7-speculative-strategies',
          'What do option buyers gain by paying a relatively small premium to control a large position?',
          [
            { text: 'Leverage', why: 'Controlling a sizable position for a relatively small premium is the leverage buyers get from options.', correct: true },
            { text: 'A guarantee that the option will expire worthless', why: 'A worthless expiration is what the writer hopes for, not a benefit the buyer receives from the small premium.' },
            { text: 'The right to set a new strike after the trade', why: 'The strike is fixed in the contract. The buyer\'s advantage from the small premium is leverage.' },
            { text: 'Elimination of the writer\'s obligation', why: 'The writer still has an obligation. The buyer\'s advantage is control of a large position for a small premium.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-types-of-speculative-strategies',
      'Types of Speculative Strategies',
      'A speculative options strategy is when the client makes a bet on the direction of the market price of the underlying security. Strategies that profit from a rising market (arrow up) are bullish strategies. Strategies that profit from falling markets (arrow down) are bearish strategies.\n\nThe purchase of a call (long call) or the sale of a put (short put) will give the speculator a profit in a rising market. These are bullish strategies.\n\nThe purchase of a put (long put) or the sale of a call (short call) will give the speculator a profit in a falling market. These are bearish strategies.\n\nRisks and Rewards\n\nThe risks and rewards are different for options buyers and sellers. You can think of options buyers as gamblers willing to make a wager in the hopes of big profits. You can think of writers as taking the role of a casino.\n\nThey are willing to "take that bet" and be paid up front because the writers think the buyer is wrong, and the contract will eventually expire with no value. Here are the basics: Buyer\'s Perspective-Pay Money Upfront but with a Significant (Sometimes Unlimited!) Upside Investors who buy options are attempting to place a wager (the premium paid) and control a stock position with a relatively small amount of money at risk. The option provides leverage in that the call or put buyer does not have to commit to buying or selling the actual stock unless they choose to exercise their right.\n\nThis provides options buyers with the ability to magnify profits by potentially controlling a much larger stock position versus buying or shorting the stock outright.\n\nExample\n\nA buyer is long one XYZ 50 Call @3. They have paid a premium of $300, but they have the right to buy 100 shares of XYZ at a price of $50 per share. That is $5,000 worth of stock that they now "control" for a premium of only $300.\n\nOptions buyers assume the risk that they must be correct in a relatively short time. Most options exist for months or weeks and if the expected movement doesn\'t occur quickly, the option will expire worthless.\n\nWhen that happens, the buyer has lost the premium, which is 100% of their investment.\n\nWriter\'s Perspective-Receive Money Upfront but Shoulder Significant Risk Investors who sell options get paid a premium upfront and their hope is that the contract will expire with no value. Time is on the writer\'s side since the time value of the contract declines each day.\n\nOptions writers are exposed to significant (sometimes unlimited) risk if the stock moves dramatically in the buyer\'s favor. Remember, options writers have an obligation that MUST be met.',
      [
        sourced(
          'sie07q0053',
          'sie-c7-types-of-speculative-strategies',
          'Which two speculative positions profit if the market rises?',
          [
            { text: 'A long put and a short call', why: 'Buying a put or selling a call profits in a falling market. Those are the bearish strategies.' },
            { text: 'A short call and a short put', why: 'The short call profits from a decline or a flat market under the strike. It is bearish, not the rising-market pair.' },
            { text: 'A long call and a long put', why: 'The long put profits from a decline, so it is not the second bullish strategy.' },
            { text: 'A long call and a short put', why: 'Buying a call or selling a put profits when the market rises. Both are bullish.', correct: true },
          ],
        ),
        sourced(
          'sie07q0054',
          'sie-c7-types-of-speculative-strategies',
          'A speculator wants to profit if the underlying price falls. Which positions match that view?',
          [
            { text: 'Buy a call or sell a put', why: 'Those two positions profit from a rising market. They are bullish, not bearish.' },
            { text: 'Buy a put or sell a call', why: 'A long put or a short call profits when the market falls. Both are bearish strategies.', correct: true },
            { text: 'Buy a call or buy the stock', why: 'Both of those positions want the price to rise. A falling market works against them.' },
            { text: 'Sell a put or sell the stock short without an option', why: 'Selling a put is bullish. The bearish option positions are the long put and the short call.' },
          ],
        ),
        sourced(
          'sie07q0055',
          'sie-c7-types-of-speculative-strategies',
          'A buyer is long 1 XYZ 50 call at 3. How much stock does that $300 premium control?',
          [
            { text: '$300 of stock, because the premium is the whole position', why: 'The $300 is the premium paid. The right itself covers the stock at $50 per share.' },
            { text: '$500 of stock, the strike times the premium', why: 'Multiplying the strike by the premium does not measure the stock under control.' },
            { text: '$5,000 of stock', why: 'The call is the right to buy 100 shares at $50, which is $5,000 of stock, controlled for a $300 premium.', correct: true },
            { text: '$5,300 of stock, the strike value plus the premium', why: 'The premium is the cost of control, not part of the stock value. The stock controlled is $5,000.' },
          ],
        ),
        sourced(
          'sie07q0056',
          'sie-c7-types-of-speculative-strategies',
          'What does an option buyer lose if the expected move does not happen before the contract expires?',
          [
            { text: 'Nothing, because time works in the buyer\'s favor', why: 'Time favors the writer, whose time value declines each day. A buyer who is wrong loses the premium.' },
            { text: 'Only the intrinsic value, while the time value is refunded', why: 'Nothing is refunded. The lost premium is the whole amount the buyer invested.' },
            { text: 'An unlimited amount, the same loss as a naked call writer', why: 'Unlimited risk belongs to the writer if the stock runs in the buyer\'s favor. The buyer\'s loss stops at the premium.' },
            { text: 'The premium, which is the entire investment', why: 'Most options last months or weeks. If the move does not come in time, the option expires worthless and the buyer loses 100% of the premium.', correct: true },
          ],
        ),
        sourced(
          'sie07q0057',
          'sie-c7-types-of-speculative-strategies',
          'Why is time described as being on the option writer\'s side?',
          [
            { text: 'The writer may exercise early and lock in the stock', why: 'Exercise is the holder\'s right. The writer has an obligation and does not choose to exercise.' },
            { text: 'The time value of the contract declines each day', why: 'The writer was paid up front and benefits as time value erodes, hoping the contract expires with no value.', correct: true },
            { text: 'The writer\'s maximum loss shrinks to the premium after the first day', why: 'The premium is the writer\'s maximum gain if the option expires worthless, not a shrinking maximum loss.' },
            { text: 'A writer can refuse assignment once time value reaches zero', why: 'The obligation must be met. Decaying time value helps the writer; it does not cancel the promise.' },
          ],
        ),
        sourced(
          'sie07q0058',
          'sie-c7-types-of-speculative-strategies',
          'How is the writer\'s risk described if the stock moves sharply in the buyer\'s favor?',
          [
            { text: 'Limited to the premium, the same ceiling that applies to the buyer', why: 'The premium is the buyer\'s maximum loss and the writer\'s maximum gain if the option expires worthless. It is not the writer\'s risk ceiling.' },
            { text: 'Limited to the strike price on every contract, including naked calls', why: 'A naked call has no cap from the strike, because the stock itself can rise without limit.' },
            { text: 'Zero, because the casino role means the writer cannot lose', why: 'Writers are compared with a casino that takes the bet, but they still shoulder significant risk if the buyer is right.' },
            { text: 'Significant, and sometimes unlimited', why: 'Writers are paid up front, but a large move in the buyer\'s favor can produce significant or even unlimited loss, because the obligation must be met.', correct: true },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-call',
      'Long Call Strategy (Bullish)',
      'Long Call Strategy (Bullish) Holder Has Right to Buy the Underlying Security\n\nAssume that a customer buys 1 ABC Jan 50 Call @ 5. During the life of the option, the customer has the right to buy 100 shares of ABC stock at $50 per share, and they pay a premium of $5 per share for this right (a total of $500). \n\nMaximum Gain = Unlimited\n\nIf the market rises, the customer can exercise their option to buy the stock for $50. They could then sell the stock in the market for its true value. In theory, the stock can rise an unlimited amount, so the maximum potential gain for a call buyer is unlimited.\n\nThis customer is bullish because they profit when the underlying stock price goes up.\n\nIf the market price drops to $50 or less, exercising the option would not make sense since the contract would be out of the money. In this case, the contract would expire worthless, and the customer would lose the premium paid. This loss of the original premium represents the buyer\'s maximum potential loss.\n\nBreakeven = Strike Price + Premium In our example, the customer must recover the $5 premium paid to break even on their option investment. They will do this if the market price rises to $55. At this point, the contract is in the money by $5, yielding a profit on the stock that exactly offsets the premium paid.\n\nUsing a T-Chart\n\nOne way to calculate an option contract\'s gain, loss, or breakeven is by setting up the problem on a T-chart. On the left side of the T will be Debits ($ Out), and on the right side will be Credits ($ In)\n\nExample\n\nA customer buys 1 ABC Jul 60 Call @ $5. We can use a T-chart to determine gain or loss and the breakeven.\n\nThe customer pays a $5 per share premium. This amount is put on the debit side of the T as a negative number. If nothing else happens and the contract expires, they lose the premium of $5 per share or $500.\n\nNow we can find the breakeven. Let\'s assume the option has been exercised.\n\nIf the customer exercises, they pay out $60 for the stock plus the $5, for the call premium. The total debit is $65 per share. To break even, the buyer must recover the $65 they paid out.\n\nSo, they would break even if the stock was worth $65 per share.\n\nRandom Gain or Loss\n\nExample Assume that the customer buys 1 ABC Jul 60 Call @ $5. The stock is now trading at $75 per share and they exercise the contract and then sell the purchased shares. What is their net gain or loss?\n\nOnce again, the customer paid $5 for the option and $60 for the stock. They then sell the stock for $75 per share. The net gain is $10 per share x 100 shares, or $1,000.\n\nTrading the Call Contract\n\nInstead of exercising, the customer could have simply traded the call contract to someone else.\n\nExample Assume that the customer sells this contract in a closing sale transaction for a $15 premium (the intrinsic value of the option).\n\nDebit Credit\n\nCredit Sell Call +15 Buy Call ($5) \n\nBuy Call ($5) Sell Call +15 a5 +$15 Net Gain = $10/share or $1000 Because the contract was never exercised, there is no stock transaction. The option was simply closed out by trading the contract. To summarize the characteristics of buying a call:\n\nCharacteristics of a Long Call\n\nMaximum Loss = Premium Paid Breakeven Point = Strike Price + Premium',
      [
        sourced(
          'sie07q0059',
          'sie-c7-call',
          'A customer buys 1 ABC Jan 50 call at 5. What is the most that customer can gain?',
          [
            { text: 'Unlimited', why: 'The holder can buy at $50 and sell at the market. Because the stock can rise without limit, the call buyer\'s maximum gain is unlimited.', correct: true },
            { text: '$500', why: '$500 is the premium paid, which is the buyer\'s maximum loss, not the maximum gain.' },
            { text: '$5,000', why: 'Five thousand dollars is 100 shares at the $50 strike, the stock the call controls, not a cap on the gain.' },
            { text: 'The strike minus the premium', why: 'Strike minus premium is the put breakeven pattern. A long call\'s gain is not capped that way.' },
          ],
        ),
        sourced(
          'sie07q0060',
          'sie-c7-call',
          'Why is the buyer of a call described as bullish?',
          [
            { text: 'The buyer profits when the underlying stock price falls below the strike', why: 'A drop to the strike or below leaves the call out of the money. That is when the buyer loses the premium.' },
            { text: 'The buyer profits when the underlying stock price goes up', why: 'The call buyer wants the stock to rise so the right to buy at the strike becomes valuable.', correct: true },
            { text: 'The buyer profits only if the stock stays exactly at the strike', why: 'A stock sitting at the strike does not produce a gain. The call needs the stock to rise.' },
            { text: 'The buyer is paid the premium and hopes the call expires', why: 'Receiving the premium and hoping for expiration is the writer\'s position. The buyer paid the premium.' },
          ],
        ),
        sourced(
          'sie07q0061',
          'sie-c7-call',
          'The same ABC Jan 50 call was bought at 5. The stock falls to $50 or lower and the call expires. What is the buyer\'s loss?',
          [
            { text: 'Unlimited, because the stock can keep falling', why: 'Further declines do not add to the call buyer\'s loss. Once the call expires, the loss stops at the premium.' },
            { text: 'Zero, because an out-of-the-money call is closed for a credit', why: 'There is no credit on expiration. Exercising would not make sense, and the premium is lost.' },
            { text: 'The premium paid, which is the maximum potential loss', why: 'At $50 or below the call is out of the money and expires worthless. Losing the original premium is as much as the buyer can lose.', correct: true },
            { text: 'The strike of $50 per share', why: 'The buyer does not pay the strike unless the call is exercised. With the stock at or below $50, exercise does not make sense.' },
          ],
        ),
        sourced(
          'sie07q0062',
          'sie-c7-call',
          'At what market price does the buyer of 1 ABC Jan 50 call at 5 break even?',
          [
            { text: '$45', why: 'Subtracting the $5 premium from the $50 strike is the breakeven pattern for a put, not for this call.' },
            { text: '$50', why: 'At $50 the call is only at the money. The buyer has not yet recovered the $5 premium.' },
            { text: '$55', why: 'Breakeven on a call is the strike plus the premium. At $55 the contract is in the money by $5, which offsets the premium paid.', correct: true },
            { text: '$60', why: 'Sixty dollars would be $10 above the strike, a profit of $5 per share after the premium, not the breakeven.' },
          ],
        ),
        sourced(
          'sie07q0063',
          'sie-c7-call',
          'On an option T-chart, which side records money paid out?',
          [
            { text: 'The left side, where debits are entered', why: 'Debits, the dollars paid out, go on the left of the T. Credits, the dollars taken in, go on the right.', correct: true },
            { text: 'The right side, where credits are entered', why: 'The right side is for credits, money coming in. Money paid out is a debit on the left.' },
            { text: 'Both sides, because every premium is both a debit and a credit to the same customer', why: 'One customer\'s premium payment is a debit. The matching credit belongs to the other side of the trade, not to both columns of this customer\'s chart.' },
            { text: 'Neither side, because the T-chart records only the strike', why: 'The T-chart is used for the dollars in and out, including the premium, so gain, loss, and breakeven can be read.' },
          ],
        ),
        sourced(
          'sie07q0064',
          'sie-c7-call',
          'A customer buys 1 ABC July 60 call at $5 and later exercises. What stock price lets the buyer recover every dollar paid out?',
          [
            { text: '$55', why: 'Fifty-five dollars would be the strike minus the premium, the breakeven direction used for puts.' },
            { text: '$60', why: 'Sixty dollars recovers the stock purchase only. The $5 premium is still unrecovered.' },
            { text: '$65', why: 'Exercise costs $60 for the stock plus the $5 premium, a $65 debit. The stock must be worth $65 for the buyer to break even.', correct: true },
            { text: '$5', why: 'Five dollars is the premium alone. Breakeven after exercise has to cover both the premium and the $60 strike.' },
          ],
        ),
        sourced(
          'sie07q0065',
          'sie-c7-call',
          'The buyer of 1 ABC July 60 call at $5 exercises when the stock is at $75 and sells the shares. What is the net gain?',
          [
            { text: '$500', why: 'Five hundred dollars is the premium paid. It is a cost in the calculation, not the net gain.' },
            { text: '$7,500', why: 'Seventy-five hundred dollars is the sale of 100 shares at $75, before subtracting the strike and the premium.' },
            { text: '$1,500', why: 'Fifteen dollars is the intrinsic value of a 60 call with the stock at 75. The net gain still subtracts the $5 premium, leaving $10 per share.' },
            { text: '$1,000', why: 'The buyer paid $5 for the call and $60 for the stock, then sold the stock at $75. The $10 per share gain on 100 shares is $1,000.', correct: true },
          ],
        ),
        sourced(
          'sie07q0066',
          'sie-c7-call',
          'Instead of exercising, that call buyer sells the contract in a closing sale at a premium of 15. What is different about the $1,000 gain?',
          [
            { text: 'The gain is larger, because the $60 strike is received in cash', why: 'The closing sale is premium in, premium out. The strike is not collected, and the gain is still $10 per share.' },
            { text: 'There is no stock transaction; the call was simply closed by trading it', why: 'Buying the call at $5 and selling it at $15 produces the same $10 per share, or $1,000, without ever buying or selling the stock.', correct: true },
            { text: 'The gain disappears, because a closing sale forfeits intrinsic value', why: 'The closing sale at 15 captures the intrinsic value in the premium. The net gain is still $1,000.' },
            { text: 'The buyer must still purchase the shares at $60 to complete the sale of the call', why: 'Selling the call closes the option. No stock is purchased, because the contract was never exercised.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-short-call-strategy-bearish',
      'Short Call Strategy (Bearish)',
      'Short Call Strategy (Bearish) Writer Has Obligation to Deliver (Sell) Shares at the Strike Price Assume that a customer sells 1 ABC Jan 50 Call @ $5.\n\nShares at the Strike Price\n\nAssume that a customer sells 1 ABC Jan 50 Call @ $5. If exercised, the customer must deliver (sell) ABC stock at $50. In return, they receive a premium of $5 per share, or $500 total.\n\nMaximum Potential Gain = Premium Received\n\nAt expiration, if the stock were trading at $50 or less, the contract would be at- or out-of-the-money and would expire with no value. The writer would keep the premium received, which is the maximum potential gain for a call writer. Short calls are bearish because the seller profits when the price of the underlying security drops or stays at or below the strike price.\n\nWhen a customer is truly speculating, they do not own the underlying stock. We would say their position is uncovered or naked. If a customer sells an uncovered call and the option is exercised, the customer must purchase the stock in the market to meet their obligation to sell. They will buy the shares at their current market price and then sell them at the $50 strike price.\n\n Since there is no limit on how high the stock can rise, the maximum potential loss is unlimited.\n\nBreakeven = Strike Price + Premium A call seller has the same breakeven as a call buyer. Either would break even if the stock price rises to the strike price plus the premium. Let\'s look some T-chart examples.\n\nExample. A customer sells 1 ABC Jul 60 Call @ $5 when the market price of ABC is $51.\n\nWhat is the breakeven point? The writer receives a $5 per share premium, so this is a credit.\n\nIf the contract expires, the gain is the $5 per share or $500.\n\nTo find the breakeven we assume that the option is exercised.\n\nThe writer receives $60 for selling the stock in addition to the $5 premium for a total of $65 per share. If the stock is selling at $65 when they buy it, they will break even.\n\nRandom Gain or Loss\n\nExample Assume a writer sells 1 ABC Jul 60 Call @ $5. The stock\'s market price rises to $75 per share, and the call is exercised. What is their net gain or loss?\n\nIf the customer buys the contract back when the market price of the stock is $75, and the premium is made up only of intrinsic value, what is their gain or loss?\n\nTo summarize the characteristics of selling a call:\n\nCharacteristics of a Short Naked Call Position\n\n• Market direction: bearish\n• Maximum gain = premium received\n• Maximum loss = unlimited\n• Breakeven point = strike price + premium',
      [
        sourced(
          'sie07q0067',
          'sie-c7-short-call-strategy-bearish',
          'A customer sells 1 ABC Jan 50 call at $5. If the stock is at $50 or below at expiration, what does the writer keep?',
          [
            { text: 'Nothing, because a short call loses the premium whenever it expires', why: 'Expiration with no value is the writer\'s favorable result. The premium is kept, not lost.' },
            { text: 'An unlimited amount, because the stock can fall without a floor', why: 'A falling stock does not increase the call writer\'s gain past the premium. Unlimited exposure is the loss if the stock rises.' },
            { text: 'The strike plus the premium, or $55 per share', why: '$55 is the breakeven stock price, not the cash the writer keeps when the call expires.' },
            { text: 'The premium, and that premium is the writer\'s maximum gain', why: 'At $50 or below the call is at or out of the money and expires worthless. Keeping the premium is as much as the call writer can make.', correct: true },
          ],
        ),
        sourced(
          'sie07q0068',
          'sie-c7-short-call-strategy-bearish',
          'Why is a short call a bearish position?',
          [
            { text: 'The seller profits when the underlying price rises through the strike', why: 'A rise through the strike works against the call writer and can lead to assignment.' },
            { text: 'The seller profits when the underlying price drops or stays at or below the strike', why: 'The short call keeps the premium when the stock finishes at or below the strike, so the position is bearish.', correct: true },
            { text: 'The seller profits only when the stock rises by more than the premium', why: 'A rise of more than the premium pushes the short call past breakeven and into a loss.' },
            { text: 'The seller is bullish, the same market view as the call buyer', why: 'The call buyer is the bullish side. The seller wants the opposite move, or no move above the strike.' },
          ],
        ),
        sourced(
          'sie07q0069',
          'sie-c7-short-call-strategy-bearish',
          'A speculator sells a call and does not own the underlying stock. What is that call called?',
          [
            { text: 'Covered', why: 'A covered call is written against stock the customer already owns, so the shares are available to deliver.' },
            { text: 'Uncovered, or naked', why: 'A speculative short call, with no stock owned, is uncovered or naked.', correct: true },
            { text: 'Protective', why: 'A protective position hedges stock the customer already holds. This seller has no stock.' },
            { text: 'At the money', why: 'At the money describes the stock price versus the strike. It does not describe whether the writer owns the shares.' },
          ],
        ),
        sourced(
          'sie07q0070',
          'sie-c7-short-call-strategy-bearish',
          'Why can the loss on a naked short call be unlimited?',
          [
            { text: 'Because the premium can be larger than the strike', why: 'The premium is the writer\'s maximum gain. The unlimited loss comes from the stock price, not from the size of the premium.' },
            { text: 'Because every short option, including a short put, has unlimited loss', why: 'A short put\'s loss is limited by the stock falling to zero. The unlimited case here is the naked call, since the stock has no ceiling.' },
            { text: 'Because the writer loses both the premium and the strike if the call expires', why: 'If the call expires, the writer keeps the premium. The unlimited loss appears when the stock rises and the call is exercised.' },
            { text: 'Because the stock can rise without limit, and the writer must buy it in the market to deliver at the strike', why: 'An exercised uncovered call forces a purchase at the market and a sale at the strike. There is no cap on how high that market price can go.', correct: true },
          ],
        ),
        sourced(
          'sie07q0071',
          'sie-c7-short-call-strategy-bearish',
          'A customer sells 1 ABC July 60 call at $5. Where is that writer\'s breakeven?',
          [
            { text: '$55', why: 'Strike minus premium is the breakeven on a put. This short call breaks even above the strike.' },
            { text: '$60', why: 'At $60 the writer still has the $5 premium as a cushion. Buying the stock at $60 to deliver it would leave that premium as a gain.' },
            { text: '$65', why: 'The writer takes in $60 on delivery plus the $5 premium. Buying the stock at $65 uses up both amounts, which is the breakeven.', correct: true },
            { text: '$51, the stock price when the call was sold', why: 'The market price at the time of the sale is not the breakeven. Breakeven is the strike plus the premium.' },
          ],
        ),
        sourced(
          'sie07q0072',
          'sie-c7-short-call-strategy-bearish',
          'How does a call seller\'s breakeven compare with a call buyer\'s breakeven?',
          [
            { text: 'The seller\'s breakeven is the strike minus the premium', why: 'Subtracting the premium is the put formula. Call buyers and call sellers share the strike-plus-premium breakeven.' },
            { text: 'They are the same: the strike price plus the premium', why: 'Both the call buyer and the call seller break even if the stock rises to the strike plus the premium.', correct: true },
            { text: 'The seller breaks even at the strike, and the buyer breaks even at the premium', why: 'Neither breakeven is the strike alone or the premium alone. Both use strike plus premium.' },
            { text: 'Only the buyer has a breakeven; the seller\'s gain is unlimited', why: 'The seller\'s maximum gain is the premium, not an unlimited amount, and the seller has the same breakeven as the buyer.' },
          ],
        ),
        sourced(
          'sie07q0073',
          'sie-c7-short-call-strategy-bearish',
          'A naked short call is summarized by which set of results?',
          [
            { text: 'Bullish, maximum gain unlimited, maximum loss equal to the premium, breakeven at the strike minus the premium', why: 'That mix describes the long call\'s gain and loss, and it uses the put breakeven. A naked short call is bearish.' },
            { text: 'Bullish, maximum gain equal to the premium, maximum loss equal to the strike minus the premium', why: 'A premium gain with a strike-minus-premium loss fits a short put, which is bullish. This position is a naked call.' },
            { text: 'Bearish, maximum gain unlimited, maximum loss equal to the premium', why: 'The unlimited result and the premium are swapped. The premium is the gain, and the loss is the unlimited one.' },
            { text: 'Bearish, maximum gain equal to the premium, maximum loss unlimited, breakeven at the strike plus the premium', why: 'A naked short call is bearish. The most the writer can keep is the premium, the loss has no cap, and breakeven is the strike plus the premium.', correct: true },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-put',
      'Long Put Strategy (Bearish)',
      'Long Put Strategy (Bearish)\n\nHolder Has Right to Sell Shares at the Strike Price\n\nAssume that a customer buys 1 ABC Jan 50 Put @ $5. The holder has the right to sell ABC stock at $50 during the option\'s life, and they pay a premium of $5 per share ($500) for this right.\n\n Maximum Gain = Strike Price - Premium\n\nIf the stock price falls, the holder can exercise the option and sell the stock for $50. The farther the stock falls, the greater the option goes in the money.\n\nThe maximum gain would be if the stock price fell to zero. In that case, the long put holder has the right to sell worthless stock for $50 per share. The gain would be the strike price of $50, minus the premium of $5, for a maximum gain of $45 per share.\n\nThe contract would have no intrinsic value if the stock price remains at $50 or higher. At expiration, the put would be worthless. The premium paid represents the maximum loss for a long put.\n\nSo, we now know that the maximum loss for an option buyer, either call or put, is the premium. Breakeven = Strike Price -- Premium To break even, the customer must recover the $5 premium. If the market price falls to $45, the contract will be in the money by $5.\n\nBreakeven for puts is the strike price minus the premium.\n\nNote: The maximum gain for a long put investor is the breakeven x $100\n\nChart Examples\n\nA customer buys 1 ABC Jul 60 Put @ $5. What is the maximum potential loss? What is the maximum potential gain? What is the breakeven point?\n\nThe customer pays a $5 per share. If nothing else happens and the contract expires worthless, the loss would be the premium times 100 shares, or $500. Let\'s look at the breakeven.\n\nFirst, the customer buys the put. Then, we will assume that the option is exercised, and the customer sells the stock at the strike What is the market price at which the customer would break even? If the customer exercises the option, they receive $60 for selling the stock, offset by the premium paid of $5.\n\nIf exercised, they will need to buy the stock. To break even, the market price would be $55. Now let\'s look at the maximum gain for the 1 ABC Jul 60 Put @ $5 contract.\n\nThe maximum gain occurs if the stock falls to $O.\n\nNotice: This is the same as the breakeven of $55 x $100 per options contract.\n\nRandom Gain or Loss\n\nThe customer buys an XYZ Mar 60 Put @5. Assume that the stock has fallen to $45, and the customer exercises the put. What is their gain/loss?\n\nInstead of exercising, the holder could have simply traded the put. Assume that the holder sells the put on the day of expiration for its intrinsic value of $15. What is their net gain or loss?\n\nTo summarize the characteristics of buying a put:\n\nCharacteristics of a Long Put Position\n\n• Market direction: bearish\n• Maximum gain = strike price − premium\n• Maximum loss = premium paid\n• Breakeven point = strike price − premium',
      [
        sourced(
          'sie07q0074',
          'sie-c7-put',
          'A customer buys 1 ABC Jan 50 put at $5. What can the holder do during the life of the option?',
          [
            { text: 'Buy 100 shares at $50, after receiving a $500 premium', why: 'Buying at the strike is a call. This customer paid the $500 premium for a put.' },
            { text: 'Sell ABC at $50, having paid a $500 premium for that right', why: 'The long put is the right to sell at the $50 strike. The $5 premium is $500 for the 100-share contract.', correct: true },
            { text: 'Force the writer to sell ABC at $5', why: 'Five dollars is the premium per share, not the price at which the stock is sold. The sale price is the $50 strike.' },
            { text: 'Sell ABC at the market and charge the writer the $50 strike as a fee', why: 'Exercise sells the stock to the writer at the strike. The strike is the sale price, not a separate fee.' },
          ],
        ),
        sourced(
          'sie07q0075',
          'sie-c7-put',
          'If ABC falls to zero, what is the maximum gain per share on a long ABC Jan 50 put bought at $5?',
          [
            { text: '$5', why: 'Five dollars is the premium, which is the most the put buyer can lose, not the most the buyer can gain.' },
            { text: 'Unlimited', why: 'Unlimited gain belongs to a call buyer in a rising market. A put\'s gain stops when the stock reaches zero.' },
            { text: '$50', why: 'Fifty dollars is the strike received for the worthless stock, before the $5 premium is subtracted.' },
            { text: '$45', why: 'Worthless stock can be sold at the $50 strike. Subtracting the $5 premium leaves a maximum gain of $45 per share.', correct: true },
          ],
        ),
        sourced(
          'sie07q0076',
          'sie-c7-put',
          'A long put finishes with the stock at the strike or higher. What is the holder\'s maximum loss?',
          [
            { text: 'The premium paid', why: 'At the strike or above, the put has no intrinsic value and expires worthless. For either a call buyer or a put buyer, the maximum loss is the premium.', correct: true },
            { text: 'The strike price', why: 'The holder does not pay the strike on a put. The loss on a worthless put is the premium.' },
            { text: 'Unlimited', why: 'A stock that rises does not create an unlimited loss for the put holder. The put simply expires.' },
            { text: 'The strike minus the premium', why: 'Strike minus premium is the breakeven, and also the maximum gain per share if the stock falls to zero, not the maximum loss.' },
          ],
        ),
        sourced(
          'sie07q0077',
          'sie-c7-put',
          'Where does the buyer of the ABC Jan 50 put at $5 break even?',
          [
            { text: '$55', why: 'Adding the premium to the strike is the call breakeven. Put breakeven subtracts the premium.' },
            { text: '$50', why: 'At $50 the put is only at the money. The $5 premium has not been recovered.' },
            { text: '$45', why: 'Put breakeven is the strike minus the premium. At $45 the put is in the money by $5, which offsets the premium.', correct: true },
            { text: '$5', why: 'Five dollars is the premium itself. The breakeven stock price is $45, not the premium.' },
          ],
        ),
        sourced(
          'sie07q0078',
          'sie-c7-put',
          'A customer buys 1 ABC July 60 put at $5. If the put expires worthless, what dollar loss does the customer have?',
          [
            { text: '$5', why: 'Five dollars is the per-share premium. The contract covers 100 shares, so the dollar loss is 100 times that premium.' },
            { text: '$500', why: 'The $5 premium times 100 shares is a $500 loss if the put expires worthless.', correct: true },
            { text: '$6,000', why: 'Six thousand dollars would be 100 shares at the $60 strike, not the premium lost on expiration.' },
            { text: '$5,500', why: 'Fifty-five hundred dollars is the breakeven of $55 times 100, which is the maximum gain figure, not the loss if the put expires.' },
          ],
        ),
        sourced(
          'sie07q0079',
          'sie-c7-put',
          'The buyer of 1 ABC July 60 put at $5 exercises and therefore must buy the shares in the market. At what market price does the position break even?',
          [
            { text: '$65', why: 'Adding the premium to the strike is the call breakeven. This put holder receives the strike and has already paid the premium.' },
            { text: '$60', why: 'Receiving $60 covers the sale price only. The $5 premium still has to be offset by buying the stock for less.' },
            { text: '$55', why: 'The holder receives $60 and has paid a $5 premium. Buying the stock at $55 is the price that breaks even.', correct: true },
            { text: '$5', why: 'The premium is $5 per share, but breakeven is a stock price: the $60 strike minus that premium.' },
          ],
        ),
        sourced(
          'sie07q0080',
          'sie-c7-put',
          'For a long put, how is the maximum dollar gain related to the breakeven?',
          [
            { text: 'It is unlimited, the same figure used for a long call', why: 'A long call\'s gain is unlimited. A long put\'s maximum gain is finite because the stock cannot fall below zero.' },
            { text: 'It is the premium times 100', why: 'Premium times 100 is the maximum loss if the put expires worthless, not the maximum gain.' },
            { text: 'It is the breakeven times $100', why: 'On the July 60 put at $5, the $55 breakeven times $100 is the maximum gain, the same result as the stock falling to zero.', correct: true },
            { text: 'It is the strike times the premium', why: 'Multiplying the strike by the premium is not the stated maximum gain. The stated link is breakeven times $100.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-short-put-strategy-bullish',
      'Short Put Strategy (Bullish)',
      ' Writer Has Obligation to Buy Shares at the Strike Price\n\nAssume a customer sells 1 ABC Jan 50 Put @ $5. The customer receives a premium of $5 per share. In turn, they are obligated to buy the underlying stock for $50 if the option is exercised.\n\nMaximum Potential Gain = Premium Received If the stock\'s market price is $50 or higher, the put has no intrinsic value.\n\nAt expiration, the option will expire worthless, The writer would then earn their maximum gain: the premium they received. The premium is the maximum gain for an option seller, either for puts or calls.\n\nSince the put seller receives their maximum gain if the underlying stock\'s price stays above the strike price, selling a put is a bullish position.\n\nThe writer can afford to lose the $5 premium and still break even. If the market price falls to $45, the put is in the money by $5.',
      [
        sourced(
          'sie07q0081',
          'sie-c7-short-put-strategy-bullish',
          'A customer sells 1 ABC Jan 50 put at $5. When does that writer earn the maximum gain, and what market view does the position express?',
          [
            { text: 'When the stock falls to zero, which makes the short put bearish', why: 'A fall toward zero is when the put writer loses. The maximum gain occurs in the other direction.' },
            { text: 'Only if the writer exercises and buys the stock at $5', why: 'Writers do not exercise. The $5 is the premium received, and the obligation is to buy at $50 if the holder exercises.' },
            { text: 'When the stock falls by exactly $5, which is a neutral position', why: 'A $5 decline puts this put in the money by $5. That is the area of breakeven, not the maximum gain.' },
            { text: 'When the stock stays at or above the strike, which makes selling a put bullish', why: 'At $50 or higher the put expires worthless and the writer keeps the premium. Profiting above the strike is a bullish stance.', correct: true },
          ],
        ),
        sourced(
          'sie07q0082',
          'sie-c7-short-put-strategy-bullish',
          'What obligation does the seller of that ABC Jan 50 put take on, and how far in the money is the put if the stock falls to $45?',
          [
            { text: 'Deliver stock at $50; at $45 the put is out of the money by $5', why: 'Delivering stock is a call writer\'s duty. A put is in the money, not out of it, when the stock falls below the strike.' },
            { text: 'Buy stock at $50 if exercised; at $45 the put is in the money by $5', why: 'The put writer must buy at the $50 strike if assigned. A drop to $45 leaves the put in the money by $5, the same $5 the writer can afford to lose and still break even.', correct: true },
            { text: 'Buy stock at $45; the premium raises the purchase price to $50', why: 'The purchase obligation is the $50 strike. Forty-five dollars is the market price in this example, not a new strike.' },
            { text: 'Sell stock at $55; at $45 the put is in the money by $10', why: 'The writer is not selling, and the in-the-money amount is the $5 gap between $50 and $45, not $10.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-breakeven-is-the-same-for-buyers-and',
      'Breakeven Is the Same for Buyers and Sellers',
      'Breakeven Is the Same for Buyers and Sellers The breakeven for buyers and sellers is the same. For calls, it is the strike price plus the premium. For puts, it is the strike price minus the premium.\n\nMaximum Potential Loss = Strike Price - Premium The lower the price of the stock falls, the more the put seller stands to lose. With the ABC Jan 50 Put @ $5 position, if the stock fell to zero, the seller would be obligated to buy worthless stock for $50 per share. The writer\'s loss would be $50 offset by the $5 per-share premium.\n\nThe maximum loss for a short put is the strike price minus the premium. Note: The maximum loss for a short put investor is the breakeven x $100 Debit Credit Sell Put ($5) Buy Stock $50 Breakeven = $45 Sell +$0 +$5 -$50 Net Loss = $45 x 100 shares = $4,500 Note: The maximum loss for a short put investor is the breakeven x $100',
      [
        sourced(
          'sie07q0083',
          'sie-c7-breakeven-is-the-same-for-buyers-and',
          'Buyers and sellers of the same option share a breakeven. How is that price computed for calls and for puts?',
          [
            { text: 'Calls use the strike minus the premium; puts use the strike plus the premium', why: 'That swaps the two formulas. Calls add the premium and puts subtract it.' },
            { text: 'Both calls and puts use the strike plus the premium', why: 'Only calls add the premium. Put breakeven is the strike minus the premium.' },
            { text: 'Calls use the strike plus the premium; puts use the strike minus the premium', why: 'The breakeven is the same for the buyer and the seller. Calls add the premium to the strike, and puts subtract it.', correct: true },
            { text: 'Each side has its own breakeven, and the two prices differ by twice the premium', why: 'The buyer and the seller of a given option do not have different breakevens. The price is the same for both.' },
          ],
        ),
        sourced(
          'sie07q0084',
          'sie-c7-breakeven-is-the-same-for-buyers-and',
          'A customer is short 1 ABC Jan 50 put at $5 and the stock falls to zero. What is the writer\'s loss?',
          [
            { text: '$500, limited to the premium received', why: 'The $500 premium reduces the loss. It is the writer\'s maximum gain if the put expires, not the loss when the stock falls to zero.' },
            { text: 'Unlimited, the same result as a naked short call', why: 'A short put cannot lose more than the stock falling to zero. The unlimited loss belongs to the naked call.' },
            { text: '$5,000, with no credit for the premium', why: 'Paying $50 for worthless stock would be $5,000, but the $5 premium offsets that loss down to $45 per share.' },
            { text: '$4,500', why: 'The writer must buy worthless stock at $50, offset by the $5 premium. The $45 per share loss on 100 shares is $4,500.', correct: true },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-debit-credit',
      'Debit Credit',
      'Sell Put ($5) Buy Stock $50 Breakeven = $45 Sell +$0 +$5 -$50 Net Loss = $45 x 100 shares = $4,500\n\nShort Put Example\n\nA customer sells 1 ABC Jul 60 Put @ $5 What is the maximum potential gain? If the put expires worthless, the seller earns the $5 premium, for a $500 maximum gain. What is the breakeven?\n\nIf the option is exercised the customer must buy the stock at $60. This is offset by the premium received of $5. To break even, they must be able to sell the stock for $55 in the market.\n\nNote that the maximum potential loss would be the breakeven x 100 shares, or $5,500.\n\nActual Gain or Loss\n\nAssume a customer sells an ABC 60 put. ABC stock falls to $45. If the put is exercised, what is the sellers gain/loss?\n\n• Buy the stock at the $60 strike price: −$60\n• Premium received for selling the put: +$5\n• Sell the stock in the market: +$45\n• Net loss = $10 × 100 shares = $1,000\n\nTo summarize the characteristics of selling a put:\n\nCharacteristics of Selling a Put\n\n• Market direction: bullish\n• Maximum gain = premium\n• Maximum loss = (strike price − premium) × $100 per contract\n• Breakeven point = strike price − premium',
      [
        sourced(
          'sie07q0085',
          'sie-c7-debit-credit',
          'A customer sells 1 ABC July 60 put at $5 and the put expires worthless. What is the maximum gain?',
          [
            { text: '$500', why: 'A worthless expiration leaves the seller with the $5 premium, and $5 times 100 shares is a $500 maximum gain.', correct: true },
            { text: '$5,500', why: '$5,500 is the maximum loss, the $55 breakeven times 100. It is not the gain on a worthless expiration.' },
            { text: '$6,000', why: 'Six thousand dollars is 100 shares at the $60 strike. The writer does not receive the strike when the put expires.' },
            { text: 'Unlimited', why: 'The short put\'s gain is capped at the premium. Unlimited gain is the long call\'s result.' },
          ],
        ),
        sourced(
          'sie07q0086',
          'sie-c7-debit-credit',
          'On that short ABC July 60 put at $5, what is the breakeven, and what is the maximum potential loss?',
          [
            { text: 'Breakeven at $65, and a maximum loss of $500', why: '$65 adds the premium to the strike, which is the call breakeven. The $500 premium is this writer\'s maximum gain.' },
            { text: 'Breakeven at $60, and a maximum loss of $6,000', why: 'The $5 premium lowers the breakeven below the strike. The loss is not the full strike with no credit for the premium.' },
            { text: 'Breakeven at $55, and a maximum loss of $5,500', why: 'Assignment means buying at $60 against a $5 premium, so the stock must be sold at $55 to break even. That breakeven times 100 is a $5,500 maximum loss.', correct: true },
            { text: 'Breakeven at $55, and a maximum loss of $1,000', why: '$55 is the breakeven, but $1,000 is the loss in a different example, with the stock at $45, not the maximum if the stock falls to zero.' },
          ],
        ),
        sourced(
          'sie07q0087',
          'sie-c7-debit-credit',
          'A customer sells an ABC 60 put and the stock falls to $45. The put is exercised. What is the seller\'s result?',
          [
            { text: 'A $1,000 loss', why: 'The seller buys at the $60 strike, keeps the $5 premium, and the stock is worth $45. The net $10 per share loss on 100 shares is $1,000.', correct: true },
            { text: 'A $1,500 loss', why: 'The $15 drop from $60 to $45 ignores the $5 premium already received. The net loss is $10 per share.' },
            { text: 'A $500 gain', why: 'The $500 premium is a credit in the T-chart, but it does not cover the loss on buying at $60 and being left with stock worth $45.' },
            { text: 'A $4,500 loss', why: '$4,500 is the maximum loss on a 50 strike put at $5 if the stock falls to zero. This put is struck at 60 and the stock is at $45.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-speculative-options-strategies-summa',
      'Speculative Options Strategies Summary',
      'Here is a summary of the four basic option positions. SP means strike price, and BE means breakeven.\n\n• Long call (bullish): maximum gain = unlimited. Maximum loss = premium. Breakeven = SP + premium.\n• Long put (bearish): maximum gain = BE × $100. Maximum loss = premium. Breakeven = SP − premium.\n• Naked (uncovered) call writer (bearish): maximum gain = premium. Maximum loss = unlimited. Breakeven = SP + premium.\n• Naked (uncovered) put writer (bullish): maximum gain = premium. Maximum loss = BE × $100. Breakeven = SP − premium.\n\nNotice that the profit and loss for the buyer and writer of a given option is a mirror image, while the breakeven point is the same.',
      [
        sourced(
          'sie07q0088',
          'sie-c7-speculative-options-strategies-summa',
          'On a summary of speculative positions, what is true of the buyer and the writer of the same option?',
          [
            { text: 'Their profits and losses are mirror images, and they share the breakeven', why: 'What the buyer gains, the writer loses, and the other way around. The breakeven point itself is the same for both.', correct: true },
            { text: 'They share the same maximum gain, and their breakevens differ by the premium', why: 'The maximum gain is not shared. The call buyer\'s unlimited gain is the call writer\'s unlimited loss, while the breakeven stays the same.' },
            { text: 'Both have unlimited gains, and only the writer has a breakeven', why: 'Unlimited gain is the long call\'s result. The writer of that call has unlimited loss, and both sides have a breakeven.' },
            { text: 'Their results are identical, including the maximum loss', why: 'Identical results would not be a mirror. The buyer\'s maximum loss is the writer\'s maximum gain.' },
          ],
        ),
        sourced(
          'sie07q0089',
          'sie-c7-speculative-options-strategies-summa',
          'How does the summary describe a naked call writer compared with a naked put writer?',
          [
            { text: 'Both are bullish, and both have unlimited maximum loss', why: 'Only the naked call writer has unlimited loss. The naked put writer is the bullish side, and that loss is the breakeven times $100.' },
            { text: 'The call writer is bearish with unlimited loss and breakeven at the strike plus the premium; the put writer is bullish with maximum loss equal to the breakeven times $100', why: 'Both naked writers keep at most the premium. The call writer is bearish and can lose without limit, with breakeven at strike plus premium. The put writer is bullish, with breakeven at strike minus premium and maximum loss of that breakeven times $100.', correct: true },
            { text: 'The call writer is bullish with breakeven at the strike minus the premium; the put writer is bearish with unlimited loss', why: 'That reverses both the market views and the loss limits. A rising stock hurts the naked call, not the naked put.' },
            { text: 'The call writer can gain an unlimited amount; the put writer\'s maximum gain is the breakeven times $100', why: 'Unlimited gain, and a maximum gain of breakeven times $100, belong to the long call and the long put. Both writers\' maximum gain is the premium.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-bearish-bullish',
      'Bearish Bullish',
      'Notice that the profit and loss for the buyer and writer of a given option is a mirror image, while the breakeven point is the same: The call buyer has unlimited upside, while the call writer has unlimited downside. The call buyer\'s maximum loss is the premium paid, while the call writer\'s maximum gain is the premium. received.\n\n• Breakeven for both the call buyer and the call writer is the strike price plus the premium.\n\nThe put buyer\'s maximum gain is the put seller\'s maximum loss (breakeven x $100). The put buyer\'s maximum loss is the premium paid, while the put writer\'s maximum gain is the premium received.\n\n• The same mirroring applies to buyers and sellers of puts. The put buyer\'s maximum gain is the put seller\'s\n\n• Breakeven for both the put buyer and the put writer is the strike price minus the premium.',
      [
        sourced(
          'sie07q0090',
          'sie-c7-bearish-bullish',
          'How do a call buyer\'s results mirror a call writer\'s results?',
          [
            { text: 'The buyer has unlimited upside and can lose only the premium; the writer has unlimited downside and can gain only the premium', why: 'The call buyer\'s unlimited gain is the writer\'s unlimited loss. The buyer\'s maximum loss, the premium paid, is the writer\'s maximum gain.', correct: true },
            { text: 'The buyer has unlimited downside; the writer has unlimited upside', why: 'That reverses the mirror. Unlimited upside is the buyer\'s, and unlimited downside is the writer\'s.' },
            { text: 'Both can lose an unlimited amount, and both keep the premium if the call expires', why: 'Only the writer keeps the premium on a worthless expiration. The buyer\'s loss on that expiration is the premium, not an unlimited amount.' },
            { text: 'Both break even at the strike minus the premium', why: 'Call breakeven, for both the buyer and the writer, is the strike plus the premium.' },
          ],
        ),
        sourced(
          'sie07q0091',
          'sie-c7-bearish-bullish',
          'What is the mirror relationship on a put, and where do both the put buyer and the put writer break even?',
          [
            { text: 'The put buyer\'s maximum gain is the put seller\'s maximum loss, and both break even at the strike minus the premium', why: 'That gain and loss equal the breakeven times $100. The buyer\'s maximum loss is the premium, which is the writer\'s maximum gain, and both break even at the strike minus the premium.', correct: true },
            { text: 'The put buyer\'s maximum loss is unlimited, and both break even at the strike plus the premium', why: 'Unlimited loss is the naked call writer\'s result. Put breakeven subtracts the premium from the strike.' },
            { text: 'The put writer gains the breakeven times $100, and the buyer breaks even at a different price', why: 'Breakeven times $100 is the put buyer\'s maximum gain and the put seller\'s maximum loss. The breakeven price is the same for both.' },
            { text: 'Both break even at the strike, and the premium is ignored', why: 'The premium is subtracted from the strike for both the put buyer and the put writer. The strike alone is not the breakeven.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-hedge',
      'Protective Strategies',
      'Option contracts can be used to hedge (protect against a loss) a stock position taken by a customer. The four basic option positions can be used to either fully or partially hedge a stock position.',
      [
        sourced(
          'sie07q0092',
          'sie-c7-hedge',
          'What can the four basic option positions do for a customer who already has a stock position?',
          [
            { text: 'Replace the stock with a derivative that has no risk', why: 'A hedge protects a stock position the customer has taken. It does not erase the position or remove every risk.' },
            { text: 'Fully or partially hedge that stock position', why: 'Options can protect against a loss on a stock position, and the four basic positions can hedge it either fully or only in part.', correct: true },
            { text: 'Guarantee a profit equal to the strike', why: 'Hedging is protection against a loss. It is not a promise that the stock position will earn the strike.' },
            { text: 'Only speculate on a stock the customer does not own', why: 'Speculation is a separate objective. The hedge uses the option to protect a stock position already taken.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-fully-hedge-a-long-stock-position-bu',
      'Fully Hedge a Long Stock Position: Buy a Put',
      'If a customer owns stock, they will lose money if the market drops. To hedge against this they can protect, or hedge their position, by purchasing a put option on the stock. If the stock declines, the gain from the put will offset the loss from the stock.\n\nAssume that a customer buys 100 shares of ABC stock at $60 per share. They believe that the stock is a worthwhile investment and wish to hold on to the position. This "worried bull" is concerned that the market may drop, dragging the stock\'s price down, and they want to hedge against this possibility.\n\n If Market Drops, Customer Can Sell Stock at the Strike Price\n\nThe customer buys 1 ABC Jul 60 Put @ $5 as a hedge. If the stock drops, the customer can always exercise the put and sell the stock for $60, no matter how far the market price falls.\n\n Maximum Loss = Premium Paid\n\nIf the market price of the stock falls, the customer is hedged, protected. They will simply exercise the put and sell the stock at the strike price. If they do, their loss is limited to the $500 premium.\n\nThe customer is not exposed to any market loss on the stock during the contract\'s life. If the stock price rises, the option will expire with no value, and the customer will lose the $500 premium, which was simply the cost of the protection.\n\n Maximum Potential Gain = Unlimited\n\nIn a rising market, the customer\'s potential gain is still unlimited. The put would expire worthless, and the customer would sell the stock at whatever price the market dictated. If the market price of the stock rises, the put will expire out of the money.\n\nThe customer will sell the stock at the higher market price.',
      [
        sourced(
          'sie07q0093',
          'sie-c7-fully-hedge-a-long-stock-position-bu',
          'A customer owns stock and wants protection if the market drops. Which option provides that hedge?',
          [
            { text: 'Buy a call', why: 'Buying a call hedges a short stock position. The owner of stock is worried about a drop, which a put protects.' },
            { text: 'Sell a call', why: 'Selling a call against long stock is an income strategy and only a partial hedge, not the full protection described for a purchased put.' },
            { text: 'Buy a put', why: 'The gain on a purchased put offsets the loss on stock the customer already owns if the market drops.', correct: true },
            { text: 'Sell a put', why: 'Selling a put adds an obligation to buy more stock. It does not give the owner the right to sell the shares already held.' },
          ],
        ),
        sourced(
          'sie07q0094',
          'sie-c7-fully-hedge-a-long-stock-position-bu',
          'A worried bull owns 100 shares of ABC bought at $60 and buys 1 ABC July 60 put at $5. If the stock collapses, what can the customer do?',
          [
            { text: 'Exercise the put and sell the stock for $60, however low the market goes', why: 'The put locks in a sale at the $60 strike for the life of the contract, which is why this long stock position is hedged.', correct: true },
            { text: 'Exercise the call and buy 100 more shares at $60', why: 'The hedge purchased here is a put, the right to sell. There is no call to exercise.' },
            { text: 'Sell the put and keep a sale price of $5 for the stock', why: 'Five dollars is the premium paid for the put, not the price at which the stock can be sold. The sale price is the strike.' },
            { text: 'Nothing, because a put protects only a short stock position', why: 'The put is the hedge for stock the customer owns. A call is the hedge used for a short stock position.' },
          ],
        ),
        sourced(
          'sie07q0095',
          'sie-c7-fully-hedge-a-long-stock-position-bu',
          'While that protective July 60 put is open, what is the customer\'s maximum loss?',
          [
            { text: 'Unlimited, because the stock can fall to zero', why: 'Without the put, a fall to zero would wipe out the stock. The put lets the customer sell at the strike, so the stock loss is hedged.' },
            { text: 'Zero, because a hedge removes the cost of the put as well', why: 'The hedge does not make the premium free. That $500 premium is the limited loss.' },
            { text: '$6,000, the cost of the 100 shares', why: 'The shares can be sold at the $60 strike through the put. The customer does not lose the entire stock cost.' },
            { text: '$500, the premium paid', why: 'Exercising the put sells the stock at the strike. During the life of the contract the customer is not exposed to a market loss on the stock, and the loss is limited to the $500 premium.', correct: true },
          ],
        ),
        sourced(
          'sie07q0096',
          'sie-c7-fully-hedge-a-long-stock-position-bu',
          'ABC rises and the protective put expires. What remains true for the stock owner?',
          [
            { text: 'The upside is capped at the $60 strike', why: 'A cap at the strike is what happens when the customer writes a call. The purchased put does not limit a rising stock.' },
            { text: 'The potential gain is still unlimited, and the expired put cost $500', why: 'In a rising market the put expires out of the money and the $500 premium is the cost of protection. The stock can still be sold at whatever higher price the market sets.', correct: true },
            { text: 'The customer must sell the stock at $60 even though the put expired', why: 'An expired put imposes no sale. The customer sells at the higher market price.' },
            { text: 'The writer of the put delivers additional shares at $5', why: 'The premium is the cost of the hedge, not a price at which extra shares are delivered. The put simply expires.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-fully-hedge-a-short-stock-position-b',
      'Fully Hedge a Short Stock Position: Buy a Call',
      'Conversely, if a customer has taken a short position in a security, they will lose money if the market price of the stock rises. The potential loss is unlimited. To hedge against this, they can protect their investment by purchasing a call option on the stock.\n\nAny loss on the stock will be offset by the gain from the option.\n\nAssume that a customer sells short 100 shares of ABC stock at $60 per share. At some point, they will need to buy ABC stock to replace the shares they sold short. They are bearish and believe that the stock price will fall.\n\nThis "worried bear" is concerned that the market may rise instead, forcing them to buy the stock at a loss to close their position. They want to hedge against this possibility.\n\nThe customer buys 1 ABC Jul 60 Call @ $5 as a hedge. If the stock rises, the customer can always exercise the call and buy the stock for $60, no matter how far the market price rises.\n\nIf the stock\'s price falls, they let the call expire and buy the stock in the market at the lower price to cover their short stock position.\n\n Maximum Loss = Premium\n\nThe customer is fully hedged, protected, if the market price of the stock rises. They will simply exercise the call and buy the stock at the strike price to cover the short stock position. If they do this, their loss is limited to the $500 call premium.\n\nMaximum Gain = Initial Stock Price − Call Premium\n\nAssume that the customer shorted the stock at $60 a share. If the market price of the stock falls to zero, the shorted stock is now worthless, and they made $6,000 for 100 shares. The call will expire with no value for a loss of the $500 premium.',
      [
        sourced(
          'sie07q0097',
          'sie-c7-fully-hedge-a-short-stock-position-b',
          'A customer is short stock and will lose if the price rises. Which option hedges that risk?',
          [
            { text: 'Buy a put', why: 'A purchased put hedges stock the customer owns. The short seller needs protection against a rise.' },
            { text: 'Sell a put', why: 'A put sold against short stock is an income strategy and only a partial hedge. The full hedge described here is a purchased call.' },
            { text: 'Buy a call', why: 'The purchased call gains if the stock rises, offsetting the loss on the short stock.', correct: true },
            { text: 'Sell a call', why: 'Selling a call adds an obligation to deliver stock. It does not cap the loss on shares already sold short.' },
          ],
        ),
        sourced(
          'sie07q0098',
          'sie-c7-fully-hedge-a-short-stock-position-b',
          'A worried bear shorted 100 shares of ABC at $60 and bought 1 ABC July 60 call at $5. What can the customer do if the stock rises?',
          [
            { text: 'Exercise the call and buy the stock at $60, however high the market goes', why: 'The call locks in a purchase at $60 to cover the short, which is the protection the worried bear bought.', correct: true },
            { text: 'Exercise a put and sell another 100 shares at $60', why: 'The hedge is a call, the right to buy. The customer is already short and does not need another sale.' },
            { text: 'Let the loss run, because a call cannot be exercised above the strike', why: 'The call can be exercised to buy at $60 no matter how far above the strike the market rises.' },
            { text: 'Require the call writer to pay the short sale price of $60 as a cash penalty', why: 'Exercise buys the stock at the strike. It is not a cash penalty equal to the short sale price.' },
          ],
        ),
        sourced(
          'sie07q0099',
          'sie-c7-fully-hedge-a-short-stock-position-b',
          'If ABC rises while that protective call is open, what is the short seller\'s maximum loss?',
          [
            { text: 'Unlimited, the ordinary risk of a short stock position', why: 'An unhedged short can lose without limit. Exercising the call buys the stock at the strike and removes that open-ended loss.' },
            { text: 'The rise in the stock plus the $500 premium', why: 'The rise is offset by exercising the call. The loss does not grow with the stock; it stays at the premium.' },
            { text: '$6,000', why: '$6,000 is what the short sale brought in. It is not the loss when the short can be covered at the same $60 price.' },
            { text: '$500, the call premium', why: 'Covering at the strike limits the loss to the $500 paid for the call. The customer is fully hedged if the stock rises.', correct: true },
          ],
        ),
        sourced(
          'sie07q0100',
          'sie-c7-fully-hedge-a-short-stock-position-b',
          'The short sale was at $60 and the hedge was a $5 call. If the stock later falls to zero, what stock profit and option result does the customer have?',
          [
            { text: 'A $6,000 profit on the short stock, minus the $500 call that expires worthless', why: 'The short sale at $60 gains $6,000 if the stock falls to zero. The call is left to expire, and its $500 premium is lost. Maximum gain equals the initial stock price minus the call premium.', correct: true },
            { text: 'A $6,000 profit, and the call is exercised to buy more shares at $60', why: 'There is no reason to exercise a call when the stock is worthless. The customer lets the call expire and buys in the market at the lower price.' },
            { text: 'A $500 profit, because the call premium is the most a short seller can make', why: 'The premium is the cost of the hedge, not the profit on the short stock. The stock gain at zero is $6,000.' },
            { text: 'An unlimited profit, because a falling stock has no floor', why: 'The stock cannot fall below zero, so the gain is not unlimited. The call premium also reduces that gain.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-options-income-strategies',
      'Options Income Strategies',
      'Strategies involve selling (writing) option positions against an established stock position. The premium received from selling the option enhances the yield from the underlying security. This strategy will also provide a partial hedge.\n\nContracts are sold for a partial hedge AND to generate additional income. The amount of protection is limited to the \'amount of premium received.\n\nAn overriding factor needed to understand income strategies is that the customer\'s stock position comes first and determines their overall bullish or bearish bias. Writing an option gives extra income from the stock position, but the investor\'s primary goal is to generate a gain from the stock position. Income strategies are best used during periods when the market is expected to be stable.\n\nThe customer does not anticipate big market swings and is simply looking to take in additional income. These strategies are not suitable in a volatile market.',
      [
        sourced(
          'sie07q0101',
          'sie-c7-options-income-strategies',
          'How much protection does an income strategy give the stock position it is written against?',
          [
            { text: 'Full protection down to a stock price of zero', why: 'Full protection even if the stock falls to zero comes from buying a put, not from the premium collected in an income strategy.' },
            { text: 'Protection limited to the premium received', why: 'The sold contract is a partial hedge and an income stream. The protection stops at the premium that was taken in.', correct: true },
            { text: 'No protection, because the premium is paid by the customer', why: 'In an income strategy the customer writes the option and receives the premium. That premium is the limited protection.' },
            { text: 'Protection equal to the strike price', why: 'The strike is not the hedge. The partial protection equals the premium received.' },
          ],
        ),
        sourced(
          'sie07q0102',
          'sie-c7-options-income-strategies',
          'When is an income strategy most suitable, and what sets the investor\'s bullish or bearish bias?',
          [
            { text: 'In a volatile market, with the option alone deciding the market view', why: 'Income strategies are not suitable when big swings are expected. The stock position, not the option, sets the overall bias.' },
            { text: 'When the customer has no stock position and wants unlimited speculation', why: 'Income strategies are written against an established stock position. Unlimited speculation is a different objective.' },
            { text: 'Only when the customer expects the stock to double, so the premium can be ignored', why: 'A large expected move is the setting these strategies are not built for. The premium is the added income, not something to ignore.' },
            { text: 'When the market is expected to be stable, and the stock position comes first', why: 'The customer does not expect large moves and wants extra income. The existing stock position determines whether the overall stance is bullish or bearish.', correct: true },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-covered-call-strategy-equals-long-st',
      'Covered Call Strategy Equals Long Stock Plus Short Call',
      ' Covered Call Strategy = Long Stock + Short Call\n\nThe first income strategy is to sell a call option against a long stock position. This is known as covered call writing. The customer is covered because they have the stock to deliver if the call is exercised.\n\nAssume that a customer buys 100 shares of XXX stock at $70. The customer expects that, over the long term, the stock will appreciate. But in the short term, they expect the price to be stable.\n\nTo enhance their return, the customer writes an XXX Jul 70 Call @ $5.\n\n The customer\'s position now is:\n\nLong 100 shares of XXX stock @ $70\n\nShort 1 XXX Jul 70 Call @ $5\n\nIf the stock price stays the same, the call will expire worthless. The customer still owns the stock and gets to keep the $5 call premium.\n\nCovered Calls Limit the Upside Potential of the Stock\n\nWhat if the stock price rises, say to $80 per share? If the customer had not sold the call, their stock would be worth $10 per share more than they paid for it.\n\nBut, if the customer\'s option is exercised, they will be obligated to deliver the stock for the $70 strike price, keeping the $5 premium. By writing a call, the customer is limiting the upside potential of their stock position. If the price of the stock rises above the strike price of the call, the stock will be called away.\n\nWriting Calls Only Offers Limited Protection (a Limited Hedge) We now know that a customer who is long stock can use two option strategies. They can buy a put or sell a call. Buying a put gives the owner the right to sell the stock at the strike regardless of how far the stock falls.\n\nThis gives the stock owner full protection even if the stock falls to zero.\n\nWhat happens to a covered call writer if the stock price falls to zero? If the market falls, the call expires with no value, and the writer keeps the premium. But their stock is now worthless.\n\nHow much protection did the covered call writer get? Sadly, only the amount of the premium received.\n\nCovered call writing is a strategy that can generate additional income, but it limits the upside potential of the stock position. It does provide some protection, but only the amount of the premium. It is only a partial hedge.\n\nThe only protection is the amount of the premium.',
      [
        sourced(
          'sie07q0103',
          'sie-c7-covered-call-strategy-equals-long-st',
          'What makes a short call covered?',
          [
            { text: 'The writer owns a put with the same strike', why: 'A put is a different hedge. Coverage for a short call comes from owning the stock that may have to be delivered.' },
            { text: 'The writer already owns the stock that would be delivered if the call is exercised', why: 'Covered call writing is a short call against a long stock position. The shares are on hand if the call is assigned.', correct: true },
            { text: 'The writer posts cash equal to the strike with the OCC', why: 'Cash collateral is not the definition used here. The customer is covered by having the stock.' },
            { text: 'The call is at the money, so assignment is impossible', why: 'Moneyness does not prevent assignment. Coverage is about having the shares to deliver.' },
          ],
        ),
        sourced(
          'sie07q0104',
          'sie-c7-covered-call-strategy-equals-long-st',
          'A customer buys 100 shares of XXX at $70 and writes 1 XXX July 70 call at $5. The stock price does not move. What does the customer end up with?',
          [
            { text: 'The stock plus the $5 premium, because the call expires', why: 'With the price unchanged the call expires worthless. The customer keeps both the shares and the $5 premium.', correct: true },
            { text: 'A closed stock position and no premium', why: 'The stock is not called away when the price stays at $70. The premium is kept.' },
            { text: 'A loss of $5 per share and no stock', why: 'The $5 is premium received, not a loss, and the long stock remains.' },
            { text: 'An obligation to buy 100 more shares at $75', why: 'The written contract is a call struck at $70. It does not obligate the customer to buy additional shares.' },
          ],
        ),
        sourced(
          'sie07q0105',
          'sie-c7-covered-call-strategy-equals-long-st',
          'XXX then rises to $80 and the July 70 call is exercised. How is the stock position affected?',
          [
            { text: 'The customer keeps the shares and the extra $10 rise, plus the $5 premium', why: 'Without the call, the stock would be worth $10 more than the $70 cost. Exercise takes that upside away.' },
            { text: 'The call expires, because a covered call cannot be exercised in the money', why: 'An in-the-money call can be exercised. That is exactly when the stock is called away.' },
            { text: 'The customer must buy the shares back at $80 and loses the premium', why: 'The covered writer delivers shares already owned. There is no repurchase at $80, and the premium is kept.' },
            { text: 'The shares are delivered at the $70 strike, and the customer keeps the $5 premium', why: 'Writing the call limits the upside. Above the strike the stock is called away at $70, and the premium kept is $5.', correct: true },
          ],
        ),
        sourced(
          'sie07q0106',
          'sie-c7-covered-call-strategy-equals-long-st',
          'A stockholder can buy a put or sell a call. What does buying the put provide that the covered call does not?',
          [
            { text: 'Extra income and only a partial hedge', why: 'Income plus a partial hedge is what writing the call provides. The purchased put is the fuller protection.' },
            { text: 'Full protection, including the right to sell at the strike even if the stock falls to zero', why: 'The put holder can sell at the strike no matter how far the stock falls, so the stock owner is fully protected even at zero.', correct: true },
            { text: 'A chance to have the stock called away above the strike', why: 'Being called away is the consequence of the short call, and it limits upside rather than protecting a decline.' },
            { text: 'Nothing, because both strategies have the same downside protection', why: 'The two are not equal. The put protects the full decline; the covered call protects only the premium.' },
          ],
        ),
        sourced(
          'sie07q0107',
          'sie-c7-covered-call-strategy-equals-long-st',
          'The covered call writer\'s stock falls to zero. How much of that loss did the short call offset?',
          [
            { text: 'The entire loss, because the call can be exercised to sell the worthless stock at the strike', why: 'Exercise of a call is the writer\'s obligation to deliver, not a right to sell. With the stock at zero the call expires.' },
            { text: 'The strike price, paid by the call holder in cash', why: 'The call holder does not pay the strike when the call expires out of the money. No stock is delivered.' },
            { text: 'Nothing, because a worthless call means the premium is returned', why: 'The premium is not returned. Keeping it is the limited protection the writer got.' },
            { text: 'Only the premium received', why: 'The call expires worthless and the premium is kept, but the stock is worthless. The protection equals that premium and nothing more.', correct: true },
          ],
        ),
        sourced(
          'sie07q0108',
          'sie-c7-covered-call-strategy-equals-long-st',
          'Which description fits covered call writing as an income strategy?',
          [
            { text: 'It produces additional income, limits the stock\'s upside, and hedges only to the extent of the premium', why: 'The short call brings in premium, caps the upside if the stock is called away, and is only a partial hedge.', correct: true },
            { text: 'It produces additional income and leaves both the upside and the downside completely unchanged', why: 'The upside is limited once the stock rises above the strike. The downside is cushioned by the premium.' },
            { text: 'It fully hedges the stock and leaves the upside unlimited', why: 'Full protection with unlimited upside is the purchased-put hedge. A covered call is only partial, and it caps the upside.' },
            { text: 'It removes the stock position and replaces it with unlimited gain', why: 'The customer still owns the stock unless it is called away. Unlimited gain belongs to a long call, not to covered call writing.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-covered-put-strategy-equals-short-st',
      'Covered Put Strategy Equals Short Stock Plus Short Put',
      'The second income strategy is to sell a put option against a short stock position. Once again, this strategy will generate additional income but will also limit the potential gain on the short position. It will offer some protection (the option premium), but engaging in covered writing only offers a partial hedge.\n\nAssume a customer has sold short 100 shares of XXX stock at $70 and writes 1 XXX Jan 70 Put @ $5.\n\n The customer\'s original position is:\n\nSell Short 100 Shares of XXX @ $70\n\nSell 1 XXX Jul 70 Put @ $5\n\nIf the market stays at $70, the put will expire worthless. The customer still has the same short stock position, and they have earned the $5 premium.\n\nLimited Gain on the Short Position\n\nWhen a customer shorts stock, they are bearish and want the price to fall. But if the market falls below the strike price on the put, the contract will be exercised, and the customer will have to buy the stock at the strike price.\n\nIn our example, the customer does not enjoy the gain on the short stock position since they are obligated to buy at the same price they shorted stock for ($70). In this case, they only earned the premium of $5 per share.\n\nLimited Hedge\n\nConversely, if the market rises, the put expires and the investor keeps the $5 premium. But they are still short the stock. In a rising market, the maximum loss is theoretically an infinite amount.\n\nBy selling the put, the investor gained a partial hedge, partial protection. But that is limited to the amount of the premium.',
      [
        sourced(
          'sie07q0109',
          'sie-c7-covered-put-strategy-equals-short-st',
          'What two positions make up a covered put income strategy?',
          [
            { text: 'Long stock and a short call', why: 'Long stock plus a short call is the covered call, the first income strategy.' },
            { text: 'Short stock and a short put', why: 'The covered put writes a put against stock the customer has already sold short.', correct: true },
            { text: 'Short stock and a long call', why: 'A long call against short stock is the full hedge for a worried bear, not the income strategy.' },
            { text: 'Long stock and a long put', why: 'A long put against long stock is the full hedge for a worried bull. No option is written.' },
          ],
        ),
        sourced(
          'sie07q0110',
          'sie-c7-covered-put-strategy-equals-short-st',
          'A customer is short 100 shares of XXX at $70 and writes a 70 put at $5. The market stays at $70. What does the customer keep?',
          [
            { text: 'The short stock position and the $5 premium', why: 'At $70 the put expires worthless. The short stock remains, and the $5 premium has been earned.', correct: true },
            { text: 'A flat position, because the put is assigned at $70', why: 'The put is not described as being exercised while the market stays at $70. It expires worthless.' },
            { text: 'The premium, but the short stock is closed at a $5 loss', why: 'There is no $5 loss on the stock. The $5 is premium earned, and the short position is still open.' },
            { text: 'Neither the premium nor the short, because both expire', why: 'Only the option expires. The short stock position continues, and the premium is kept.' },
          ],
        ),
        sourced(
          'sie07q0111',
          'sie-c7-covered-put-strategy-equals-short-st',
          'The market falls below the strike of that short 70 put. What happens to the gain on the short stock?',
          [
            { text: 'It is unlimited, because a covered put has no cap on a decline', why: 'The short put is exercised below the strike, so the customer must buy at $70 and does not keep a larger stock gain.' },
            { text: 'The put expires and the short stock can be covered at zero', why: 'Below the strike the put is exercised. It does not expire, and the cover price is the strike.' },
            { text: 'The customer buys at the lower market price and also keeps an extra $70', why: 'The obligation is to buy at the strike, not at the lower market price. The strike is not collected as an extra credit.' },
            { text: 'The customer must buy at $70, the same price used for the short sale, and keeps only the $5 premium', why: 'The decline does not become a larger profit. Assignment buys the stock at the strike, and the gain is the $5 premium.', correct: true },
          ],
        ),
        sourced(
          'sie07q0112',
          'sie-c7-covered-put-strategy-equals-short-st',
          'If the market rises instead, what protection has the covered put writer actually bought?',
          [
            { text: 'Full protection, because the short put caps a rising stock', why: 'A rising stock makes the put expire. The short stock is still open, and a short stock loss in a rising market is theoretically infinite.' },
            { text: 'A partial hedge equal to the premium, while the loss on the short stock can still be infinite', why: 'The put expires and the $5 premium is kept, but that is only partial protection. The remaining short stock can lose without a theoretical limit.', correct: true },
            { text: 'A locked purchase at $5, so the short is covered no matter how high the stock goes', why: 'Five dollars is the premium kept, not a purchase price. The call, not the short put, would lock in a purchase at the strike.' },
            { text: 'None, because the premium must be refunded when the put expires', why: 'The premium is kept when the put expires. It is small protection, not a refund.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-index-options',
      'Index Options',
      'While most options are linked to a single underlying security, index options are tied to a collection or "basket" of securities. These underlying assets could be stocks or even currencies. Index options permit investors to make bets \'on the overall direction of a given market as opposed to the price movement of a specific security.',
      [
        sourced(
          'sie07q0113',
          'sie-c7-index-options',
          'What does an index option let an investor bet on?',
          [
            { text: 'The price of one specific stock', why: 'A single underlying security is what most options are linked to. An index option is linked to a basket.' },
            { text: 'The overall direction of a market, rather than one security', why: 'Index options are tied to a collection of securities, so the bet is on the market\'s direction rather than one stock\'s price.', correct: true },
            { text: 'The premium of a covered call on a single share', why: 'A covered call is a stock-plus-option income strategy. It is not what an index option is tied to.' },
            { text: 'Only the dividend of the largest company in the index', why: 'The underlying is the basket, which can be stocks or even currencies, not one company\'s dividend.' },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-index-options-2',
      'Index Options',
      'OEX-Options Exchange Index, Issued American Style\n\nThe very first option was the OEX-the Options Exchange Index-which is based on the Standard & Poor\'s (S&P) 100 Index, a subset of the bigger S&P 500 Index. Because it was the first index option, it was modeled after stock options, which were (and still are) issued American style (exercisable at any time). European-style options can only be exercised at expiration.\n\nIndex Options Have a Large Notional Value\n\nThe notional value is the value of the underlying asset. Assume that the OEX is currently at 1,700. One contract covers a notional value of 1,700 x 100 (the contract multiplier) = $170,000 of stocks in the portfolio.\n\nThis is the same multiplier as a stock option. If a stock were trading at $100, an option on that stock would cover\n\n$100 x 100 shares = $10,000 of value.\n\nOEX options are popular with institutional portfolio managers, who can use them to hedge their portfolio, generate income, or speculate on the market\'s direction. For example, if an institutional portfolio manager wants to hedge a portfolio, they can simply buy OEX put contracts rather than buying puts on all the stocks in the portfolio.\n\nWhen an Index Option Is Exercised, the Settlement Is Made in Cash This differs from stock options. When a stock option is exercised, the seller must either buy or sell the given stock. When an index option is exercised, there is no delivery of stock; rather, the writer pays the holder the intrinsic value of the option (times the multiplier of 100) in cash on the next business day.\n\nAll Index Options Created after OEX Are Generally European Style All later options contracts created are European style-where they can be traded anytime but can only be exercised at expiration. Over the years, the Chicago Board Options Exchange (Cboe) has issued many other index option contracts. Some of the bigger ones are:\n\nSPX: Standard and Poor\'s 500 Index\n\n• DJX: Dow Jones Industrial Average\n• VIX (Volatility Index): Volatility Index (based on S&P 500 Index volatility)\n\nNDX: Nasdaq 100 Index\n\nRUT: Russell 2000 Index (Small Cap stocks)\n\nVIX Option\n\nVIX stands for Volatility Index. The VIX is often called the fear gauge because when prices are falling rapidly, volatility increases. This causes the VIX index to rise.\n\nMost investors trade from the long side, so they are fearful in a bear market. In a bull market most investors are happy, so the level of fear (VIX) will fall. So, the VIX value moves in the opposite direction to general market price movements.\n\nIn a rising market, VIX values will fall; in a falling market, VIX values will rise.',
      [
        sourced(
          'sie07q0114',
          'sie-c7-index-options-2',
          'What is the OEX based on, and when can it be exercised?',
          [
            { text: 'The S&P 100, and it is American style, so it can be exercised at any time', why: 'OEX, the Options Exchange Index, tracks the S&P 100. As the first index option, it was modeled on stock options and issued American style.', correct: true },
            { text: 'The S&P 500, and it can be exercised only at expiration', why: 'The S&P 500 is the larger index of which the S&P 100 is a subset. Exercise only at expiration is European style, which came later.' },
            { text: 'The Dow Jones Industrial Average, and it settles in the 30 stocks', why: 'The Dow is the DJX. OEX is the S&P 100 contract, and index exercise does not deliver the stocks.' },
            { text: 'The Nasdaq 100, and it can be exercised only on the third Friday', why: 'The Nasdaq 100 is the NDX. OEX was built to be exercisable at any time, like a stock option.' },
          ],
        ),
        sourced(
          'sie07q0115',
          'sie-c7-index-options-2',
          'The OEX is at 1,700. What notional value does one contract cover?',
          [
            { text: '$1,700', why: '1,700 is the index level. One contract multiplies that level by 100.' },
            { text: '$17,000', why: 'A multiplier of 10 would produce $17,000. The contract multiplier is 100, the same multiplier used for a stock option.' },
            { text: '$170,000', why: 'Notional value is the index level times the multiplier: 1,700 times 100 equals $170,000 of stocks.', correct: true },
            { text: '$10,000', why: '$10,000 is the value of a stock option when the stock is at $100, or $100 times 100 shares. It is not the OEX notional value.' },
          ],
        ),
        sourced(
          'sie07q0116',
          'sie-c7-index-options-2',
          'An institutional manager wants to hedge a broad portfolio. What can OEX puts do for that portfolio?',
          [
            { text: 'Replace a separate put on every stock in the portfolio', why: 'OEX puts let the manager hedge, generate income, or speculate without buying puts on each stock in the portfolio.', correct: true },
            { text: 'Deliver every stock in the S&P 100 if the market falls', why: 'Exercise of an index option does not deliver stock. Settlement is in cash.' },
            { text: 'Remove the need for a hedge, because index puts have no notional value', why: 'The OEX contract has a large notional value. Managers use the puts as the hedge, not as a reason to skip one.' },
            { text: 'Guarantee that the portfolio will rise with the S&P 100', why: 'A put hedges a decline. It does not guarantee that the portfolio will rise.' },
          ],
        ),
        sourced(
          'sie07q0117',
          'sie-c7-index-options-2',
          'How does exercise of an index option differ from exercise of a stock option?',
          [
            { text: 'The index writer delivers the stocks in the basket within nine months', why: 'Nine months is a typical option life. Index exercise does not deliver stock at all.' },
            { text: 'Both settle by delivery of 100 shares on the third Friday', why: 'Stock-option exercise is the side that buys or sells the stock. An index option does not deliver shares.' },
            { text: 'The index writer pays the holder the intrinsic value times 100 in cash on the next business day', why: 'There is no stock delivery. The cash payment is the intrinsic value multiplied by 100, due the next business day.', correct: true },
            { text: 'The holder pays the writer the premium again, in cash, at expiration', why: 'The premium was already paid to open the contract. Exercise cash flow on an index option is intrinsic value times the multiplier, from writer to holder.' },
          ],
        ),
        sourced(
          'sie07q0118',
          'sie-c7-index-options-2',
          'Which exercise style applies to index contracts created after the OEX, and which index tracks small-cap stocks?',
          [
            { text: 'American style, and the small-cap contract is the DJX', why: 'Later contracts are generally European style. The DJX is the Dow Jones Industrial Average, not the small-cap index.' },
            { text: 'American style, and the small-cap contract is the NDX', why: 'American style is the OEX and stock options. The NDX is the Nasdaq 100, not the Russell 2000 small-cap index.' },
            { text: 'European style, and the small-cap contract is the VIX', why: 'The later style is European, but the VIX measures S&P 500 volatility. It is not the small-cap stock index.' },
            { text: 'European style, and the small-cap contract is the RUT', why: 'Contracts created after the OEX can be traded at any time but exercised only at expiration. The Russell 2000, the RUT, is the small-cap index.', correct: true },
          ],
        ),
        sourced(
          'sie07q0119',
          'sie-c7-index-options-2',
          'The VIX is called the fear gauge. How does it move relative to the broad market?',
          [
            { text: 'It rises when the market rises and falls when the market falls', why: 'That would be the same direction as stock prices. The VIX moves the other way.' },
            { text: 'It falls in a rising market and rises in a falling market', why: 'Rapid declines increase volatility, so the VIX rises. In a bull market fear falls, and so does the VIX.', correct: true },
            { text: 'It stays flat, because volatility is fixed by the contract multiplier', why: 'The multiplier scales contract value. It does not freeze the VIX, which moves opposite the market.' },
            { text: 'It rises only at expiration, because the VIX is European style', why: 'The fear-gauge description is about market direction and volatility, not about the expiration-only exercise rule.' },
          ],
        ),
        sourced(
          'sie07q0120',
          'sie-c7-index-options-2',
          'A stock is at $100. Using the same multiplier as the OEX, what value does one stock option cover?',
          [
            { text: '$100', why: '$100 is the stock price. The contract covers 100 shares.' },
            { text: '$1,000', why: 'A multiplier of 10 would produce $1,000. The stock option uses the same 100 multiplier as the OEX.' },
            { text: '$170,000', why: '$170,000 is the notional value of an OEX contract when the index is at 1,700, not the value of this stock option.' },
            { text: '$10,000', why: 'The multiplier is 100, so a $100 stock means the option covers $10,000 of value.', correct: true },
          ],
        ),
      ],
    ),
    section(
      'sie-c7-foreign-currency-options',
      'Foreign Currency Options',
      'Foreign Currency Markets\n\nForeign currency values relative to the dollar affect U.S. business activity, and both U.S. and overseas financial markets. Foreign currencies are traded 24 hours a day in the "interbank" market. Trading is unregulated between domestic and foreign banks in very large units (usually $5 million minimum).\n\nThe exchange rates between currencies "float"; the value of currencies is determined in the marketplace.\n\nOptions on Foreign Currencies\n\nOptions on foreign currencies are traded on the Philadelphia Stock Exchange (PHLX). They can be used to speculate on the direction of the currencies\' values. For example, if you believe that the Japanese yen will strengthen, then buy yen calls.\n\nIf you believe that the Canadian dollar will weaken, then buy Canadian dollar puts.\n\nHedging with Foreign Currency Options\n\nImporters and exporters can also use these contracts. Suppose an importer needs to pay for a shipment expected in two months from Britain in pounds. To protect against the pound rising (and hence costing more dollars), they can buy pound calls and lock in a fixed cost for the currency.\n\nInvestors would use these contracts to protect against currency fluctuations. For example, if a U.S investor had a large position in Japanese stocks, they could use yen put contracts to protect against a fall in the yen.\n\nTrades Settle Next Business Day, European Style\n\nForeign currency option trades settle next business day through the Options Clearing Corporation. The contracts are available only as "European Style\'"-which can be exercised only at expiration but can still be traded. European-style options are more attractive to institutional writers of contracts that do not want an unexpected exercise.\n\nThe contracts are like stock index options. If the contract is "in the money" at expiration, the holder could perform a closing trade to realize the profit or could exercise at expiration, with the last day to trade being the third Friday of the month, just like stock and index options.',
      [
        sourced(
          'sie07q0121',
          'sie-c7-foreign-currency-options',
          'How are foreign currencies themselves traded in the interbank market?',
          [
            { text: 'Twenty-four hours a day, unregulated, between banks, usually in units of at least $5 million, at floating rates', why: 'Interbank currency trading runs around the clock, is unregulated, uses very large units, and the rates float with the market.', correct: true },
            { text: 'Only during exchange hours, in 100-unit contracts set by the OCC', why: 'A 100 multiplier and OCC terms describe listed options. The currencies themselves trade in the interbank market in much larger size.' },
            { text: 'Once a day, at rates fixed by the Philadelphia Stock Exchange', why: 'The PHLX is where currency options trade. Cash currencies trade 24 hours a day, and the rates float rather than being fixed.' },
            { text: 'Only at expiration, in European-style contracts', why: 'European style is a feature of the listed currency option, not of the interbank market where the currencies themselves trade.' },
          ],
        ),
        sourced(
          'sie07q0122',
          'sie-c7-foreign-currency-options',
          'Where are options on foreign currencies traded, and which contract fits a view that the yen will strengthen?',
          [
            { text: 'On the Cboe, by buying yen puts', why: 'Currency options are traded on the Philadelphia Stock Exchange. A stronger yen is a reason to buy yen calls, not yen puts.' },
            { text: 'On the Philadelphia Stock Exchange, by buying yen calls', why: 'PHLX lists the currency options. Expecting the yen to strengthen is expressed by buying yen calls.', correct: true },
            { text: 'In the interbank market, by selling yen in $5 million units', why: 'The interbank market is where the currencies themselves trade. A listed bet that the yen strengthens is a yen call.' },
            { text: 'On the NYSE, by buying a yen futures contract', why: 'The venue named for these options is the PHLX, and the bullish currency trade described is a call, not a future.' },
          ],
        ),
        sourced(
          'sie07q0123',
          'sie-c7-foreign-currency-options',
          'A trader believes the Canadian dollar will weaken. Which option matches that view?',
          [
            { text: 'Canadian dollar calls', why: 'Calls fit a currency that is expected to strengthen, the same pattern used for a stronger yen.' },
            { text: 'A short put on the Canadian dollar, because writers want the currency to fall', why: 'The stated trade for a weaker Canadian dollar is to buy the puts, not to write them.' },
            { text: 'Yen puts, because every weak-currency view uses the yen', why: 'The yen example was the strengthening case, and it used calls. The Canadian dollar has its own puts.' },
            { text: 'Canadian dollar puts', why: 'A weaker Canadian dollar is a reason to buy Canadian dollar puts.', correct: true },
          ],
        ),
        sourced(
          'sie07q0124',
          'sie-c7-foreign-currency-options',
          'A U.S. importer must pay pounds for British goods arriving in two months and is worried the pound will rise. What hedge fits?',
          [
            { text: 'Buy pound calls', why: 'Pound calls lock in a purchase price for the currency, so a rising pound does not raise the dollar cost of the shipment.', correct: true },
            { text: 'Buy pound puts', why: 'Puts would fit a fear that the pound will fall. The importer is hurt if the pound rises and the goods cost more dollars.' },
            { text: 'Buy yen puts', why: 'Yen puts are the example used by a U.S. investor protecting Japanese stocks against a weaker yen, not by an importer paying pounds.' },
            { text: 'Sell pound calls', why: 'Selling calls collects a premium but does not lock in the purchase price of the pounds the importer must pay.' },
          ],
        ),
        sourced(
          'sie07q0125',
          'sie-c7-foreign-currency-options',
          'Which facts describe listed foreign-currency options?',
          [
            { text: 'They settle next business day through the OCC, they are European style only, and the last trading day is the third Friday', why: 'Settlement is the next business day at the OCC. The contracts can be traded but exercised only at expiration, and the last trade is the third Friday, as with stock and index options. Writers like European style because exercise is not a surprise.', correct: true },
            { text: 'They settle in the currency the same day, and they are American style', why: 'Same-day delivery of the currency is not the settlement described. These contracts are available only as European style.' },
            { text: 'They settle in 39 months, and they can be exercised at any time', why: 'Thirty-nine months is the maximum life of a LEAPS at issuance. Currency options are exercised only at expiration.' },
            { text: 'They are issued by the foreign central bank and cannot be traded before expiration', why: 'The contracts clear through the OCC and can still be traded. European style limits exercise, not trading.' },
          ],
        ),
      ],
    ),
  ],
}
