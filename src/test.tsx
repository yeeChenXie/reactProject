import * as React from 'react';

interface Props {
    aaa: string
}
interface State {
    bbb: number,
    name?: string
}

export class Test extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            name: '2333',
            bbb: 2
        }
    }
    render() {
        let { name, bbb } = this.state
        let { aaa } = this.props
        return (
            <div style={{ color: '#fe465d' }}>{name},{bbb},{aaa}</div>
        )
    }
}