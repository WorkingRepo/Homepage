import React, { Component } from 'react';



class App extends Component {


  render() {


    return (
      <div className="App">

        <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div className="container topnav">

            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand topnav" href="#">Hunger Feed</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

        </div>

    </nav>



    <a name="about"></a>
    <div className="intro-header">
        <div className="container">

            <div className="row">
                <div className="col-lg-12">
                    <div className="intro-message">
                        <h1>Restaurant Finder</h1>
                        <h3>Best In City</h3>
                        <hr className="intro-divider"/>
                        <div className="input-group col-md-12">
                              <input type="text" className="search-query form-control" placeholder="Search" />
                              <span className="input-group-btn">
                                  <button className="btn btn-danger" type="button">
                                      <span className=" glyphicon glyphicon-search"></span>
                                  </button>
                              </span>
                          </div>
                    </div>
                </div>
            </div>

        </div>


    </div>

  <a  name="services"></a>
    <div className="content-section-a">

        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-sm-6">
                    <hr className="section-heading-spacer"/>
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Find nearby Restaurants:<br/></h2>
                    <p className="lead">Find nearby restaurants based on your current location</p>
                </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img className="img-responsive" src="src/rest.jpg" alt="" width="500px" height="100px"/>
                </div>
            </div>

        </div>


    </div>


    <div className="content-section-b">

        <div className="container">

            <div className="row">
                <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr className="section-heading-spacer"/>
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Search for a restaurant</h2>
                    <p className="lead">Search for a particular restaurant by giving its name.</p>
              </div>
                <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img className="img-responsive" src="src/food1.jpg" alt=""/>
                </div>
            </div>

        </div>


    </div>

    <div className="content-section-a">

        <div className="container">

            <div className="row">
                <div className="col-lg-5 col-sm-6">
                    <hr className="section-heading-spacer"/>
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Find complete information about restaurants</h2>
                    <p className="lead">Visit restaurants homepage and facebook page,call them,know their opening and closing times,etc</p>
                </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img className="img-responsive" src="src/food4.jpg" alt=""/>
                </div>
            </div>

        </div>


    </div>


  <a  name="contact"></a>
    <div className="banner">

        <div className="container">

            <div className="row">
                <div className="col-lg-6">
                    <h2>Contact us</h2>
                </div>
                <div className="col-lg-6">
                    <ul className="list-inline banner-social-buttons">
                        <li>
                            hungerfeed.atak@gmail.com
                        </li>

                    </ul>
                </div>
            </div>

        </div>


    </div>

    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="list-inline">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <p className="copyright text-muted small">Copyright &copy; Hunger Feed</p>
                </div>
            </div>
        </div>
    </footer>
      </div>
    );
  }
}

export default App;
