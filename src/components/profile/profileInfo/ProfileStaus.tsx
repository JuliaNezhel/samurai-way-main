import React from "react";

type ProfileStausProps = {
  status: string
}

export class ProfileStaus extends React.Component<ProfileStausProps> {
  state = {
    editMode: false,
  };

  activateEditMode(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  render(): React.ReactNode {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status}{" "}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}></input>
          </div>
        )}
      </div>
    );
  }
}
