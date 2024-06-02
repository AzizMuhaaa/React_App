import React from "react"

class Detail extends React.Component{
  
    componentDidMount(){
        const {location}=this.props
        console.log(location);
    }

    render(){
        return(<span>Content of movie</span>)
    }
}
export default Detail
