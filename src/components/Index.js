import React, { Component } from 'react';
import Layout from './Layout'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

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