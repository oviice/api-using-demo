import React, { Component } from 'react'
import axios from '../../node_modules/axios'
export default class ApiCalling extends Component {

    constructor(){
        super()
        this.state={
            myData:[]
        }
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(Response=>{
            console.log(Response.data)
            this.setState({myData:Response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render() {
        const mylist=this.state.myData
        const countryList =mylist.map(list=>{
        return(<li>{list.name}</li>)
        })
        return (
            <div>
                <ul>
                    {countryList}
                </ul>

            </div>
        )
    }
}
