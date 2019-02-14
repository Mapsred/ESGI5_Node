import React from "react";
import ToolbarHeader from "../components/ToolbarHeader";
import ToggleButton from "../components/ToggleButton";

export default class ToggleButtonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "black"
        };
    }

    toggleTheme = () => {
        console.log(this);
        this.setState({ theme: this.state.theme === "black" ? "light" : "black" });
    };

    render() {
        return (
            <React.Fragment>
                <ToggleButton toggleHandler={this.toggleTheme}/>
                <ToolbarHeader content={this.state.theme}/>
            </React.Fragment>
        )
    }
}