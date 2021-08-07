import './App.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//class data
class Recipes extends Component {
    state = {
        show: false,
        recipe: [],
        r:true,
        lastid: 0,
        prevlastid: [],
        isVeg: "",
        taste: ["Sour", "Sweet", "Tangy", "Mild", "Spicy"],
        selectedtaste: "",
        selecteditemsid: [],
        keyword: "",
    }

    async componentDidMount() {
        var url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid + "";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ recipe: data, show: true })
    }

    changelastid = (event) => {
        event.preventDefault();
        this.setState({
            lastid: this.state.recipe[this.state.recipe.length - 1].id + 0,
            prevlastid: [this.state.recipe[0].id - 1, ...this.state.prevlastid]
        }, () => {
            console.log(this.state.lastid);

            if (this.state.isVeg !== "") {
                var url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid + "&is_veg=" + this.state.isVeg + "";
            }
            else if (this.state.selectedtaste !== "") {
                url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid + "&taste=" + this.state.selectedtaste + "";
            }
            else if(this.state.keyword !== ""){
                url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid  + "&query=" + this.state.keyword;
            }
            else if (this.state.isVeg !== "" & this.state.selectedtaste !== "") {
                url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid + "&is_veg=" + this.state.isVeg + "&taste=" + this.state.selectedtaste + "";
            }
            else {
                url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid + "";
            }

            fetch(url)
                .then(response => response.json())
                .then(data => this.setState
                    ({ recipe: data, show: true })
                )
        });


    }

    setKeyword = (event) => {
        event.preventDefault();
        this.setState({ keyword: event.target.value })
    }

    vegFilter = (event) => {
        event.preventDefault();
        document.getElementById("veg").classList.add("vegbtn");
        document.getElementById("nonveg").classList.remove("nonvegbtn");
        this.setState({ isVeg: "true" });
        this.setState({ lastid: this.state.recipe[this.state.recipe.length - 1].id + 10 }, () => {
            var url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid + "&is_veg=" + this.state.isVeg;

            fetch(url)
                .then(response => response.json())
                .then(data => this.setState
                    ({ recipe: data, show: true })
                )
        });

    }

    searchRecipe = (event) => {
        event.preventDefault();
        var url = "https://foodzilla.vercel.app/recipes?query=" + this.state.keyword;

        fetch(url)
            .then(response => response.json())
            .then(data => {this.setState
                        ({ recipe: data, show: true },()=>{ if(this.state.recipe.length===0){
                            this.setState({r:false})
                            
                        }else{
                            this.setState({r:true})
                            
                        }
                     })
                    })
    }

    nonvegFilter = (event) => {
        event.preventDefault();
        this.setState({ isVeg: "false" });
        document.getElementById("nonveg").classList.add("nonvegbtn");
        document.getElementById("veg").classList.remove("vegbtn");
        this.setState({ lastid: this.state.recipe[this.state.recipe.length - 1].id }, () => {
            var url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid + "&is_veg=" + this.state.isVeg + "";

            fetch(url)
                .then(response => response.json())
                .then(data => this.setState
                    ({ recipe: data, show: true })
                )
        });
        console.log(this.state.lastid);
    }

    tasteFilter = (event) => {
        event.preventDefault();
        this.setState({ selectedtaste: document.getElementById("tastebox").value }, () => {
            if (this.state.isVeg === "") {
                var url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid + "&taste=" + this.state.selectedtaste + "";
            }
            else {
                url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid + "&is_veg=" + this.state.isVeg + "&taste=" + this.state.selectedtaste + "";
            }


            fetch(url)
                .then(response => response.json())
                .then(data => this.setState
                    ({ recipe: data, show: true })
                )
        });
    }

    

    changelastidBackwards = (event) => {
        event.preventDefault();
        if (this.state.prevlastid[0] >= 0) {
            this.setState({ lastid: this.state.prevlastid[0] }, () => {
                console.log(this.state.lastid);
                if (this.state.isVeg !== "") {
                    var url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid + "&is_veg=" + this.state.isVeg + "";
                }
                else if (this.state.selectedtaste !== "") {
                    url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid + "&taste=" + this.state.selectedtaste + "";
                }
                else if(this.state.keyword !== ""){
                    url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid  + "&query=" + this.state.keyword;
                }
                else if (this.state.isVeg !== "" & this.state.selectedtaste !== "") {
                    url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid + "&is_veg=" + this.state.isVeg + "&taste=" + this.state.selectedtaste + "";

                }
                else {
                    url = "https://foodzilla.vercel.app/recipes?last_id=" + this.state.lastid + "";
                }
                const cpdata = this.state.prevlastid;
                cpdata.shift();
                this.setState({ prevlastid: cpdata })
                fetch(url)
                    .then(response => response.json())
                    .then(data => this.setState({ recipe: data, show: true }))
            }
            );
        }

    }

    render() {
        return (
            <div className="FilterBox">

                <div className="filterbtns">
                    <input type="text" placeholder="search recipe" onChange={this.setKeyword}></input>
                    &nbsp;<button onClick={this.searchRecipe}>🔍</button>
                    <button className="btns" id="veg" onClick={this.vegFilter}>veg</button>
                    <button className="btns" id="nonveg" onClick={this.nonvegFilter}>nonveg</button>

                    <select id="tastebox" onChange={this.tasteFilter}>
                        {this.state.taste.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>

                </div>
                {this.state.r ?
                    <div>
                         <div className="npbtns">
                    <button type="submit" className="btns" onClick={this.changelastidBackwards} >Back</button>
                    <button onClick={this.changelastid} className="btns" >Next</button>
                </div>

                        {this.state.show ?

                            <div className="cardholder">

                                {this.state.recipe.map((r) =>
                                    <div className="cards" key={r.id}>
                                        <Link to={`/RecipeDesc/${r.id}`}>

                                            <img src={r.image} alt="something" />

                                        </Link>
                                        <br></br>
                                        <div className="recipetype" style={{ fontSize: 20 }}>{r.is_veg ? <div className="indiborder"><div className="vegindicator"></div></div> : 
                                        <div className="nonindiborder"><div className="nonvegindicator"></div></div>}</div>
                                        
                                        <div className="recipename" style={{ fontSize: 20 }}>{r.name}</div>
                                        
                                        
                     
                                    </div>
                                
                                )}
                            
                            </div>
                            : <div> loading...</div>
                        }
                    
                     <div className="npbtns">
                    <button type="submit" className="btns" onClick={this.changelastidBackwards} >Back</button>
                    <button onClick={this.changelastid} className="btns" >Next</button>
                </div>
                </div>          
                    :<h2>no related data found kindly refresh the page... </h2>
                    }
            </div>

        );
    }
}

export default Recipes;
