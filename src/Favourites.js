import './App.css';
import React, { Component } from 'react';
import {Link} from "react-router-dom";


//class data
class Favourites extends Component {
        state={
            cart:[]
        }
        componentDidMount(){
            this.setState({cart:JSON.parse(localStorage.getItem("fav"))})
        }

        removeFav = (r) => {
            document.getElementById("undobtn").style.visibility="visible";
            const data = this.state.cart;
            if(localStorage.getItem("tempForUndo")==null){
                localStorage.setItem("tempForUndo","[]");
            }
            localStorage.setItem("tempForUndo",JSON.stringify(r));
            data.splice(this.state.cart.indexOf(r),1)
            this.setState({cart:data},()=>{
                localStorage.setItem("fav",JSON.stringify(this.state.cart))
            });
        }

        undoRemove = () => {
            document.getElementById("undobtn").style.visibility="hidden";
            if(localStorage.getItem("tempForUndo")!==null){
                const removed = JSON.parse(localStorage.getItem("tempForUndo"));
                const data = JSON.parse(localStorage.getItem("fav"));
                data.push(removed);
                this.setState({cart:data},()=>{
                    localStorage.clear("tempForUndo");
                    localStorage.setItem("fav",JSON.stringify(data));
                })
            }
        }

        render() {
       
        return ( 
            <div>
                <br></br>
            <button className="btns" id="undobtn" style={{visibility:"hidden"}} onClick={this.undoRemove}>undo remove</button>

            {this.state.cart?
                <div className="cardholder">
                        {this.state.cart.map((r) =>
                               
                        <div className="favcards" key={r.id}>
                        <Link to={`/RecipeDesc/${r.id}`}>
                            <img src={r.image} alt="something" />
                        </Link>
                        <br></br>
                        <div className="recipetype" style={{ fontSize: 20 }}>{r.is_veg ? <div className="indiborder"><div className="vegindicator"></div></div> : 
                        <div className="nonindiborder"><div className="nonvegindicator"></div></div>}</div>              
                        <div className="recipename" style={{ fontSize: 20 }}>{r.name}</div>
                        <button onClick={()=>this.removeFav(r)}>remove</button>
                        </div>
                        )}

                </div>
                :
                <h1 style={{marginTop:200}}>No items found in Favourite List</h1>
                }
                     
            </div>
        );
    }
}

export default Favourites;
