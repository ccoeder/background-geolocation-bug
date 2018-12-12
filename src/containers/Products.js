import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/products";

class Products extends Component {
  componentDidMount() {
    if (this.props.products.payload.length === 0) {
      this.props.getProducts();
    }
  }

  render() {
    const { payload, isLoading } = this.props.products;

    if (isLoading) {
      return <ActivityIndicator />;
    } else {
      return payload.map((product, index) => {
        return (
          <View key={index}>
            <Text>{product.brand}</Text>
            <Text>{product.name}</Text>
          </View>
        );
      });
    }
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => {
      dispatch(fetchProducts());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
