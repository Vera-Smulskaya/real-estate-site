import { Component } from "react";
import { Redirect } from "react-router-dom";
import { PropertyList } from "../components/propertyList.jsx";
import { AuthError } from "../components/authError.jsx";
import { FullScreenPage } from "../components/fullScreenPage.jsx";
import { LoadMoreBtn } from "../components/loadMoreBtn.jsx";
import { Loading } from "../components/loading.jsx";
import { ButtonAdd } from "../components/buttonAdd.jsx";
import { withRouter } from "react-router-dom";
import { DeletePropertyConfirm } from "../components/deletePropertyConfirm.jsx";

class Properties extends Component {
  state = {
    page: 1,
    pages: null,
    properties: [],
    isLoading: true,
    isLoadingMore: false,
    propertyToDelete: null,
  };

  componentDidMount() {
    this.getProperties();
  }

  getProperties() {
    this.setState({ isLoading: true });

    fetch(
      `/api/properties/?agentEmail=${this.props.user.email}&page=${this.state.page}`
    )
      .then((data) => data.json())
      .then((data) => this.setState({ ...data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  showMore = async () => {
    this.setState(
      (state) => ({ page: state.page + 1, isLoadingMore: true }),
      () => {
        fetch(
          `/api/properties?agentEmail=${this.props.user.email}&page=${this.state.page}`
        )
          .then((data) => data.json())
          .then((data) =>
            this.setState((state) => ({
              properties: [...state.properties, ...data.properties],
            }))
          )
          .catch((error) => this.setState({ error }))
          .finally(() => this.setState({ isLoadingMore: false }));
      }
    );
  };

  openDeleteModal(propertyToDelete) {
    this.setState({ propertyToDelete });
  }

  closeDeleteModal() {
    this.setState({ propertyToDelete: null });
  }

  render() {
    const {
      page,
      pages,
      properties,
      error,
      isLoading,
      isLoadingMore,
      propertyToDelete,
    } = this.state;
    const { user } = this.props;
    const isOpenModal = Boolean(propertyToDelete);
    const content = isLoading ? (
      <Loading />
    ) : (
      <PropertyList
        properties={properties}
        onDelete={(propertyToDelete) => this.openDeleteModal(propertyToDelete)}
      />
    );

    const button = isLoadingMore ? (
      <Loading />
    ) : (
      <LoadMoreBtn
        handleClick={this.showMore}
        page={page}
        pages={pages}
        properties={properties}
      />
    );

    if (error) {
      return <AuthError error={error} />;
    }

    if (!user.email) {
      return <Redirect to="/" />;
    }

    return (
      <FullScreenPage user={user} withToggler={true}>
        {content}
        {button}

        {isOpenModal && (
          <DeletePropertyConfirm
            isOpened={isOpenModal}
            property={propertyToDelete}
            onClose={() => this.closeDeleteModal()}
            onConfirm={() => this.getProperties()}
          />
        )}
        <ButtonAdd path="/properties/create">+ Add new property</ButtonAdd>
      </FullScreenPage>
    );
  }
}

export default withRouter(Properties);
