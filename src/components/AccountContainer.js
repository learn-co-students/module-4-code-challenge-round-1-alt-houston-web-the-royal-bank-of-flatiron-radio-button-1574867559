import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  // constructor() {
  //   super()
  //   //... your code here
  // }

  state={
    transactions: transactions,
    filteredList: []
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then( resp => resp.json() )
    .then( transactionsData => 
      this.setState({
        transactions: transactionsData
      }))
  }

  handleChanged = (category) => {
    // console.log(category)
    let filteredArray = this.state.transactions.filter( transaction => transaction.category === category )
    this.setState({
      filteredList: filteredArray
    })
    // console.log('we filtered!', this.state.filteredList)
    // console.log('does this pass through?')
  }

  
  render() {
    console.log(this.state.transactions)
    console.log(this.state.filteredList)
    return (
      <div className="ui grid container">

        <CategorySelector handleChanged={this.handleChanged}/>

        <TransactionsList 
        transactions={this.state.filteredList.length > 0 ? this.state.filteredList : this.state.transactions }
        
        />

      </div>
    )
  }
}

export default AccountContainer
