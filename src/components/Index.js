import React, { Component } from 'react';
import Layout from './Layout/Layout'
import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'

class Index extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    )
  }
}

export default Index;