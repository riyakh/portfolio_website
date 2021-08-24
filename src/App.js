 import React, {Component} from 'react';
 import Projects from './Projects';
 import Social_Profiles from './SocialProfiles';
 import profile from './Assets/profile.jpg';
 import Title from './Title';

 class App extends Component{
     state ={displayBio:false};
    //  constructor(){
    //      super();
    //      this.state = {displayBio:false};
    //      //console.log('readMore', this);
    //     // this.readMore = this.readMore.bind(this);
    //      //this.readLess = this.readLess.bind(this);
    //      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    //  }

    /*  readMore(){
       //  console.log('readMore', this);
         this.setState({ displayBio: true});
     }

     readLess(){
         this.setState({displayBio:false});
     } */

     toggleDisplayBio = ()=>{
         this.setState({displayBio : !this.state.displayBio})
     }
     render(){
         return(
             <div>
                 <img src={profile} style={{width:125, height:135, margin:'20px', borderRadius:'100px'}}/>
                 <h1>Hello</h1>
                 <p>My name is Riya. </p>
                 <Title/>
                 <p>I'm looking forward to work on meaningful projects</p>
                {
                    this.state.displayBio ?(<div>
                                                <p>I live in India and code everyday</p>
                                                <p>My favourite language is javascript and  I think reat.js is awesome.</p>
                                                <button onClick={this.toggleDisplayBio}>Show Less</button>
                                                </div>) :
                                                 (<div>
                                                    <button onClick={this.toggleDisplayBio}>Read More</button>
                                                 </div>)
                }
                <hr/>
                <Projects/>
                <hr/>
                <Social_Profiles></Social_Profiles>
             </div>

         )
     }

 }
 export default App;