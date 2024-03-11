import React from "react";

type ProfileStatusProps = {
  status: string;
  updateStatus: (status: string) => void;
};

export class ProfileStatus extends React.Component<ProfileStatusProps> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    this.setState({
      editMode: true,
    });
    console.log(this.props.status);
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(
    prevProps: Readonly<ProfileStatusProps>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {

    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render(): React.ReactNode {
    return (
      <div style={{ backgroundColor: "red", width: "200px", height: "20px" }}>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status || "----"}
            </span>
          </div>
        )}
        'ggg'
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode.bind(this)}
              value={this.state.status}
              onChange={this.onStatusChange}
            ></input>
          </div>
        )}
      </div>
    );
  }
}
