"use strict"

//import react and reactDom for browser rendering
import React from "react"
import ReactDom from "react-dom"

import Moment from "moment"

//import the react-json-view component (installed with npm)
import JsonViewer from "./../../src/js/index"

import { getData } from "./get-data.js"

const appContainer = document.getElementById("app-container");
let viewData = {};

class SrvIndex extends React.Component {
    constructor() {
        super();
        this.state = { src: {} };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.render = this.render.bind(this);
    }

    componentDidMount() {
        console.log('hello');
        getData().then(res => {
            console.log('res', res);
            // console.log('res.json()', res.json());
            // body.getReader()', res.body.getReader());
            res.json().then(data => {
                console.log('data', data);

                console.log('tjos', this);
                // console.log('appContainer', appContainer);
                // const jsonViewer = appContainer.querySelector(".react-json-view");
                // const jsonViewer = document.getElementById('dev-server');
                // console.log('jsonViewer', jsonViewer);
                // jsonViewer.src = data;
                this.setState({src: data });//.setState({src:  data });
            });
        });
    }

    render() {
    //render 2 different examples of the react-json-view component
    // ReactDom.render(
        return (<div>
            <JsonViewer
                id={"json-viewer"}
                sortKeys
                // style={{ padding: "30px", backgroundColor: "white" }}
                theme="railscasts"
                src={this.state.src}
                collapseStringsAfterLength={32}
                onEdit={e => {
                    console.log("edit callback", e)
                    if (e.new_value == "error") {
                        return false
                    }
                }}
                onDelete={e => {
                    console.log("delete callback", e)
                }}
                onAdd={e => {
                    console.log("add callback", e)
                    if (e.new_value == "error") {
                        return false
                    }
                }}
                onSelect={e => {
                    console.log("select callback", e)
                    console.log(e.namespace)
                }}
                displayObjectSize={true}
                name={"dev-server"}
                enableClipboard={copy => {
                    console.log("you copied to clipboard!", copy)
                }}
                shouldCollapse={({ src, namespace, type }) => {
                    if (type === "array" && src.indexOf("test") > -1) {
                        return true
                    } else if (namespace.indexOf("moment") > -1) {
                        return true
                    }
                    return false
                }}
                defaultValue=""
            />

            <br />

        </div>)
    }
}

ReactDom.render(
    <SrvIndex />,
    appContainer
)
