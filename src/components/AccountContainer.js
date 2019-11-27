import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }

  handleChange() {
    //... your code here
  }

  componentDidMount(){
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
    .then (response => response.json())
    .then (transactions => this.setState({transactions}));
    }

  render() {
    console.log(this.state.transactions)
    return (
      <div className="ui grid container">

        <CategorySelector />

        <TransactionsList transactions = {this.state.transactions}/>

      </div>
    )
  }
}

export default AccountContainer
