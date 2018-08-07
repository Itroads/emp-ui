import React, { Component } from 'react';
import Layout from './components/layout/layout'
import Header from './components/header/header'
import Content from './components/content/content'
import Footer from './components/footer/footer'

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