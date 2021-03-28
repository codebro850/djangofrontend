import React,{Component} from 'react';


class ErrorBoundry extends Component {
constructor(props){
super(props);
this.state=
{
    haserror:false
}
}
componentDidCatch(error,info){
    this.setState({haserror:true});


}
render(){
           if(this.state.haserror){
               return(
                   <h2>OOPs something went wrong!!</h2>
               );
           }
           return this.props.children;
}


}
export default ErrorBoundry;