import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';



class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList() {
        //taking the everything from the mapStateToProps and printing the list of streams
        return this.props.streams.map(stream => {
            return(
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    }

    render(){
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams) };    //converting the objects of streams into the array of objects
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);