import './App.css';
import React, { Component } from 'react';


//class data
class App extends Component {
  state = {
    show:false,
    recipe:[],
    lastid:0,
    prevlastid: [],
    isVeg:"",
    taste:["Sour","Sweet","Tangy","Mild","Spicy"],
    selectedtaste:"",
    showdesc:false
  }

  async componentDidMount(){
    var url = "https://foodzilla.vercel.app/recipes?last_id="+ this.state.lastid + "";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({recipe:data,show:true})
  }

  changelastid = (event) => {
    event.preventDefault();
    this.setState({lastid:this.state.recipe[this.state.recipe.length-1].id+0,
    prevlastid:[this.state.recipe[0].id-1,...this.state.prevlastid]},()=>{
    console.log(this.state.lastid);

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

        
  }

  vegFilter = (event) => {  
    event.preventDefault();
    document.getElementById("veg").classList.add("vegbtn");
    document.getElementById("nonveg").classList.remove("nonvegbtn");
    this.setState({isVeg:"true"});
    this.setState({lastid:this.state.recipe[this.state.recipe.length-1].id+10},()=>{
    var url = "https://foodzilla.vercel.app/recipes?last_id="+ this.state.lastid + "&is_veg=" + this.state.isVeg + "" ;
    
    fetch( url )
      .then(response=>response.json())
        .then(data=>this.setState
      ({recipe:data,show:true})
      )
    });

  }
  
  nonvegFilter = (event) => {  
    event.preventDefault();
    this.setState({isVeg:"false"});
    document.getElementById("nonveg").classList.add("nonvegbtn");
    document.getElementById("veg").classList.remove("vegbtn");
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
  }

  changelastidBackwards = (event) => {
    event.preventDefault(); 
      if(this.state.prevlastid[0]>=0)
      {
        this.setState({lastid:this.state.prevlastid[0]},()=>{
          console.log(this.state.lastid);
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
          const cpdata = this.state.prevlastid;
          cpdata.shift();
          this.setState({prevlastid:cpdata})
          fetch( url )
            .then(response=>response.json())
              .then(data=>this.setState({recipe:data,show:true}))
          }
          
          );
      }
      
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
          <button className="btns" id="veg" onClick={this.vegFilter}>veg</button>
          <button className="btns" id="nonveg" onClick={this.nonvegFilter}>nonveg</button>
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
