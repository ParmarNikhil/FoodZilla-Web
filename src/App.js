import './App.css';
import React, { Component } from 'react';


//class data
class App extends Component {
  state = {
    show:false,
    recipe:[],
    lastid:0,
    isVeg:"",
    taste:["Sour","Sweet","Tangy","Mild","Spicy"],
    selectedtaste:"",
    showdesc:false
  }

  async componentDidMount(){
    var url = "https://foodzilla.vercel.app/recipes?last_id="+ this.state.lastid + "";
    const response = await fetch(url);
    const data = await response.json();
    
    this.setState({recipe:data,show:true},()=>{console.log(this.state.recipe)})
    console.log(this.state.recipe)
    // console.log(data.results[0]);
  }

  changelastid = (event) => {
    
    console.log(document.getElementById("tastebox").value);
    event.preventDefault();
    this.setState({lastid:this.state.recipe[this.state.recipe.length-1].id+10},()=>{
    if(this.state.isVeg!==""){
      var url = "https://foodzilla.vercel.app/recipes?last_id="+ this.state.lastid + "&is_veg=" + this.state.isVeg + "" ;
    }
    else if(this.state.selectedtaste!=="") {
       url = "https://foodzilla.vercel.app/recipes?last_id="+ this.state.lastid + "&taste=" + this.state.selectedtaste + "" ;
    }
    else if (this.state.isVeg!=="" & this.state.selectedtaste!==""){
      url = "https://foodzilla.vercel.app/recipes?last_id="+ this.state.lastid + "&is_veg=" + this.state.isVeg + "&taste=" + this.state.selectedtaste + "" ;

    }
    else{
      url = "https://foodzilla.vercel.app/recipes?last_id="+ this.state.lastid + "";
    }

    fetch( url )
      .then(response=>response.json())
        .then(data=>this.setState
      ({recipe:data,show:true})
      )
    });
    console.log(this.state.lastid);
        
  }

  vegFilter = (event) => {  
    event.preventDefault();
    this.setState({isVeg:"true"});
    this.setState({lastid:this.state.recipe[this.state.recipe.length-1].id+10},()=>{
    var url = "https://foodzilla.vercel.app/recipes?last_id="+ this.state.lastid + "&is_veg=" + this.state.isVeg + "" ;
    
    fetch( url )
      .then(response=>response.json())
        .then(data=>this.setState
      ({recipe:data,show:true})
      )
    });
    console.log(this.state.lastid);
  }
  
  nonvegFilter = (event) => {  
    event.preventDefault();
    this.setState({isVeg:"false"});
    this.setState({lastid:this.state.recipe[this.state.recipe.length-1].id+10},()=>{
    var url = "https://foodzilla.vercel.app/recipes?last_id="+ this.state.lastid + "&is_veg=" + this.state.isVeg + "" ;
    
    fetch( url )
      .then(response=>response.json())
        .then(data=>this.setState
      ({recipe:data,show:true})
      )
    });
    console.log(this.state.lastid);
  }
  
  tasteFilter = (event) =>{
    event.preventDefault();
    this.setState({selectedtaste:document.getElementById("tastebox").value},()=>{
      var url = "https://foodzilla.vercel.app/recipes?last_id="+ this.state.lastid + "&taste=" + this.state.selectedtaste + "" ;
    
      fetch( url )
        .then(response=>response.json())
          .then(data=>this.setState
        ({recipe:data,show:true})
        )
      });
  }

  changelastidBackwards = (event) => {
    console.log(this.state.isVeg);
    event.preventDefault();
    this.setState({lastid:this.state.recipe[this.state.recipe.length-1].id-10},()=>{
      if(this.state.isVeg!==""){
        var url = "https://foodzilla.vercel.app/recipes?last_id="+ this.state.lastid + "&is_veg=" + this.state.isVeg + "" ;
      }
      else{
        url = "https://foodzilla.vercel.app/recipes?last_id="+ this.state.lastid + "";
      }
      
      fetch( url )
        .then(response=>response.json())
          .then(data=>this.setState
        ({recipe:data,show:true})
        )
      });
      console.log(this.state.lastid);
    }

  render(){ 
    return (
      <div className="App">
        
      {this.state.showdesc ?
      <div>description</div>  
    :
        <div>

<h1>FoodZilla</h1>
        <div className="filterbtns">        
          <button className="btns" onClick={this.vegFilter}>veg</button>
          <button className="btns" onClick={this.nonvegFilter}>nonveg</button>
          <select id="tastebox" onChange={this.tasteFilter}>  
          {this.state.taste.map((t)=>(
            <option key={t} value={t}>{t}</option>
          ))}
          </select>
            
        </div>
      <div className="npbtns"> 
        <button type="submit" onClick={this.changelastidBackwards} >Back</button>
        <button onClick={this.changelastid} >Next</button>
      </div>

        {this.state.show ?
        
        <div className="cardholder">
         {/* {this.state.recipe[this.state.recipe.length-1].id} */}
          {this.state.recipe.map((r)=>
          <div className="cards" key={r.id}>
            <img src={r.image} alt="something"/>
            <br></br>
            <div className="recipename" style={{fontSize:20}}>{r.name}</div>
            <div className="recipetype" style={{fontSize:20}}>type:{r.is_veg ? "veg" : "nonveg"}</div>
         
            
            </div>
            
        )}
        
        </div>  
          :<div>
            loading...  
          </div>
      }
        </div>
    }

      </div>
      
    );
  }
}

export default App;
