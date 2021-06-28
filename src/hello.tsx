import * as React from "react";
import {Test} from './test'

export interface HelloProps { compiler: string }
export interface HelloState { name: string, sex?: number }

export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(HelloProps: HelloProps) {
        super(HelloProps)
        this.state = {
            name: 'zhangsan',
            sex: 1
        }
    }
    render() {
        return (
            <div>
                <Test aaa='sss'></Test>
                {this.test("333")}
                <h1>Hello from {this.props.compiler} and !</h1>;
                <div>
                    <span></span>
                </div>
            </div>
        )
    }
    test(params?: string) {
        return <div>{params}</div>
    }
}