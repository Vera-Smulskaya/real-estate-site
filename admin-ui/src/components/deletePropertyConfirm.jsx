import React, { Component } from "react";
import { Confirm } from "./confirm.jsx";

export class DeletePropertyConfirm extends Component {
  deleteProperty() {
    const { property, onClose, onConfirm } = this.props;

    fetch(`/api/properties/${property.id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(({ success }) => {
        if (success) {
          onConfirm();
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        onClose();
      });
  }

  render() {
    const { isOpened, property, onClose } = this.props;

    return (
      <Confirm
        open={isOpened}
        message={`Are you sure to delete property "${property.title}"`}
        onClose={onClose}
        onConfirm={() => this.deleteProperty()}
        confirmButtonText="Delete"
      />
    );
  }
}
