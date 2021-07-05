import React from 'react'
import { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./About.css"
import Button from '@material-ui/core/Button';


export default class About extends Component {


    render() {


        console.log(this.props.match.params.id)


        return (
            <div>


                <div className="TextForm">
                    <h2>Title</h2>
                    <div className="buttons">
                        <div className="bttn">
                            <Button variant="contained" color="primary">
                                Cancel
                            </Button>
                        </div>

                        <div className="bttn">
                            <Button variant="contained" color="primary">
                                Save
                            </Button>
                        </div>

                    </div>




                </div>

                <form className="">

                    <div className="child">
                        <p className="s">Name:</p>
                        <TextField id="standard-basic" label="" />
                    </div>

                    <div className="child">
                        <p className="s">ID:</p>
                        <TextField id="standard-basic" label="" />
                    </div>

                    <div className="child">
                        <p className="s">ABC:</p>
                        <TextField id="standard-basic" label="" />
                    </div>



                </form>




            </div>
        )
    }
}

// export default About;
