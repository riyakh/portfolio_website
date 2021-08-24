import React,{Component} from 'react';

class jokes extends Component{
    state = {jokes:{}}; 
    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => co)
    }
}