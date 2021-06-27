import React from 'react';


class Note extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    console.log("constructor");
  }

  componentDidMount() {
  }

  addNote = () => {
    console.log("add note");
    let notes = this.state.notes;
    notes.push({
      title: "",
      duration: "",
      isEditingTitle: false,
      isEditingDuration: false
    });
    this.setState({
      notes: notes
    });
  };

  handleTitleChange = (e, index) => {
    let notes = this.state.notes;
    notes[index].title = e.target.value;
    this.setState({
      notes: notes
    });
  };

  handleDurationChange = (e, index) => {
    let notes = this.state.notes;
    notes[index].duration = e.target.value;
    this.setState({
      notes: notes
    });
  };

  handleClickTitle = (e, index) => {
    console.log('click title: ', e, index);

    let notes = this.state.notes;
    notes[index].isEditingTitle = true;
    this.setState({
      notes: notes
    });
  };

  handleClickDuration = (e, index) => {
    console.log('click duration: ', e, index);

    let notes = this.state.notes;
    notes[index].isEditingDuration = true;
    this.setState({
      notes: notes
    });
  };

  handleBlurTitle = (e, index) => {
    console.log('blur title: ', e, index);
    let notes = this.state.notes;
    notes[index].isEditingTitle = false;
    this.setState({
      notes: notes
    });
  };

  handleBlurDuration = (e, index) => {
    console.log('blur duration: ', e, index);
    let notes = this.state.notes;
    notes[index].isEditingDuration = false;
    this.setState({
      notes: notes
    });
  };

  render() {
    let notes = this.state.notes;
    return (
      <div>
        {notes.map((note, index) => {
          return (
            <div key={index}>
              {note.isEditingTitle ? (
                <input
                  autoFocus
                  type="text"
                  value={note.title}
                  onChange={(e) => {this.handleTitleChange(e, index)}}
                  onBlur={(e) => {this.handleBlurTitle(e, index)}}
                />
              ) : (
                <span
                  style={{display: 'inline-block', width:'150px', height: '15px'}}
                  onClick = {(e) => {this.handleClickTitle(e, index)}}
                >
                {"   " + note.title}
              </span>
              )}

              {note.isEditingDuration ? (
                <input
                  autoFocus
                  type = "text"
                  value = {note.duration}
                  onChange={(e) => {this.handleDurationChange(e, index)}}
                  onBlur={(e) => {this.handleBlurDuration(e, index)}}
                />
              ) : (
                <span
                  style={{display: 'inline-block', width:'150px', height: '15px'}}
                  onClick = {(e) => {this.handleClickDuration(e, index)}}
                >
                {"   " + note.duration}
              </span>
              )}
            </div>
          )
        })}
        <button onClick={this.addNote}>
          Add note
        </button>
      </div>
    );
  }
}

export default Note;
