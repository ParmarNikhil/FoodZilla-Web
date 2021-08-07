import './App.css';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



//class data
class RecipeDesc extends Component {
    state = {
        data: {},
        steps: [],
        step: "step",
        ingredients: []
    }

    async componentDidMount() {
        var id = this.props.match.params.id;
        var url = "https://foodzilla-salmannotkhan.vercel.app/recipe/" + id;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ data: data, steps: data.steps, ingredients: data.ingredients })
    }

    addToFavourite = () => {
        if (localStorage.getItem("fav") == null) {
            localStorage.setItem("fav", "[]");
            var old = JSON.parse(localStorage.getItem("fav"));
            old.push(this.state.data);
            localStorage.setItem("fav", JSON.stringify(old));
           
        }
        else {
            old = JSON.parse(localStorage.getItem("fav"));
            const check = old.filter(o => (o.id===this.state.data.id));
            if(check.length===0){
            old.push(this.state.data);
            localStorage.setItem("fav", JSON.stringify(old));
            }
            
        }    
                      
    }

    render() {
        let d = this.state;

        return (
            <div className="App">

                <div className="descbox">
                    <div className="descitem">
                        <img src={d.data.image} className="descimage" alt="something is wrong" /><button onClick={this.addToFavourite}>add to favourite</button>
                        <h2>{d.data.name}</h2>
                        <p>Course - {d.data.course}</p>
                        <p>Cuisine - {d.data.cuisine}</p>
                        <p>Cooking Level - {d.data.cooking_level}</p>
                        <p>Preparation Time - {d.data.prep_time} Minutes</p>
                        <p>Cooking Time - {d.data.cook_time} Minutes</p>

                    </div>
                    <div className="descitem2">
                        <div>
                            <h3>Ingredients</h3><ul>
                                {
                                    d.ingredients.map((i) => (
                                        <li key={i}>{i}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <br></br>
                        <h3>Steps</h3><ol>{
                            this.state.steps.map((step) => (
                                <div key={step}><li>{step}</li></div>
                            ))
                        }</ol>

                    </div>

                </div>




            </div>




        );
    }
}

export default withRouter(RecipeDesc);
