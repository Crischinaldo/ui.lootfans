import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import Footer from "../../components/Footer/Footer";
// sidebar nav config
import Navigation from '../../components/Navbar/Navigation.jsx';
// routes config
import routes from '../../routes';
import navigation from "../../_nav";

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

  signOut(e) {
    e.preventDefault();
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">

        <div className="app-body">
          <Suspense>
            <Navigation config={navigation}/>
          </Suspense>

          <main className="main">

            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : null;
                  })}

                </Switch>
              </Suspense>
            </Container>
          </main>

        </div>
          <Suspense fallback={this.loading()}>
            <Footer />
          </Suspense>
      </div>

    );
  }
}

export default DefaultLayout;
