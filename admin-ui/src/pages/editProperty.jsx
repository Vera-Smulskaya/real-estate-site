import { Component } from "react";
import { PropertyForm } from "../components/propertyForm";
import { ModalWindow } from "../components/modalWindow";
import { withRouter } from "react-router-dom";

class EditProperty extends Component {
  state = {
    property: {},
    isLoading: true,
    isModalOpen: false,
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`/api/properties/${id}`)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            if (this.props.match.path === "/properties/:id/edit") {
              this.setState({ property: data, isModalOpen: true });
            }
          });
        } else {
          this.setState({
            error: `Property with id`,
          });
        }
      })
      .catch(() => this.setState({ error: "Something went wrong" }))
      .finally(() => this.setState({ isLoading: false }));
  }

  close() {
    this.props.history.push("/properties");
  }

  editProperty(values) {
    const { id } = values;

    this.setState({ isLoading: true });
    fetch(`/api/properties/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...values,
      }),
    })
      .then((data) => data.json())
      .then(({ success }) => {
        if (success) {
          this.props.onEdit();
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        this.close();
      });
  }

  render() {
    const { property, isModalOpen } = this.state;

    return (
      <ModalWindow open={isModalOpen}>
        <PropertyForm
          defaultValues={property.property}
          onSubmit={(values) => {
            this.editProperty(values);
          }}
          onClose={() => this.close()}
          buttonName="Edit"
        />
      </ModalWindow>
    );
  }
}

export default withRouter(EditProperty);
