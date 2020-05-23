import React, { Component } from 'react'

export default class MainPanel extends Component {
    render() {
        return (
           <div className="main-panel">
  <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
    <div className="container-fluid">
      <div className="navbar-wrapper">
        <a className="navbar-brand" href="/#">Dashboard</a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
        <span className="sr-only">Toggle navigation</span>
        <span className="navbar-toggler-icon icon-bar" />
        <span className="navbar-toggler-icon icon-bar" />
        <span className="navbar-toggler-icon icon-bar" />
      </button>
      <div className="collapse navbar-collapse justify-content-end">
        <form className="navbar-form">
          <div className="input-group no-border">
            <input type="text" defaultValue className="form-control" placeholder="Search..." />
            <button type="submit" className="btn btn-white btn-round btn-just-icon">
              <i className="material-icons">search</i>
              <div className="ripple-container" />
            </button>
          </div>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/#">
              <i className="material-icons">dashboard</i>
              <p className="d-lg-none d-md-block">
                Stats
              </p>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="material-icons">notifications</i>
              <span className="notification">5</span>
              <p className="d-lg-none d-md-block">
                Some Actions
              </p>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/#">Mike John responded to your email</a>
              <a className="dropdown-item" href="/#">You have 5 new tasks</a>
              <a className="dropdown-item" href="/#">You're now friend with Andrew</a>
              <a className="dropdown-item" href="/#">Another Notification</a>
              <a className="dropdown-item" href="/#">Another One</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="/#" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="material-icons">person</i>
              <p className="d-lg-none d-md-block">
                Account
              </p>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
              <a className="dropdown-item" href="/#">Profile</a>
              <a className="dropdown-item" href="/#">Settings</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="/#">Log out</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* End Navbar */}
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-warning card-header-icon">
              <div className="card-icon">
                <i className="material-icons">content_copy</i>
              </div>
              <p className="card-category">Used Space</p>
              <h3 className="card-title">49/50
                <small>GB</small>
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons text-danger">warning</i>
                <a href="/#">Get More Space...</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-success card-header-icon">
              <div className="card-icon">
                <i className="material-icons">store</i>
              </div>
              <p className="card-category">Revenue</p>
              <h3 className="card-title">$34,245</h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">date_range</i> Last 24 Hours
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-danger card-header-icon">
              <div className="card-icon">
                <i className="material-icons">info_outline</i>
              </div>
              <p className="card-category">Fixed Issues</p>
              <h3 className="card-title">75</h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">local_offer</i> Tracked from Github
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-info card-header-icon">
              <div className="card-icon">
                <i className="fa fa-twitter" />
              </div>
              <p className="card-category">Followers</p>
              <h3 className="card-title">+245</h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">update</i> Just Updated
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card card-chart">
            <div className="card-header card-header-success">
              <div className="ct-chart" id="dailySalesChart" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Daily Sales</h4>
              <p className="card-category">
                <span className="text-success"><i className="fa fa-long-arrow-up" /> 55% </span> increase in today sales.</p>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">access_time</i> updated 4 minutes ago
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-chart">
            <div className="card-header card-header-warning">
              <div className="ct-chart" id="websiteViewsChart" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Email Subscriptions</h4>
              <p className="card-category">Last Campaign Performance</p>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">access_time</i> campaign sent 2 days ago
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-chart">
            <div className="card-header card-header-danger">
              <div className="ct-chart" id="completedTasksChart" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Completed Tasks</h4>
              <p className="card-category">Last Campaign Performance</p>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">access_time</i> campaign sent 2 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* <div className="col-lg-6 col-md-12">
          <div className="card">
            <div className="card-header card-header-tabs card-header-primary">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <span className="nav-tabs-title">Tasks:</span>
                  <ul className="nav nav-tabs" data-tabs="tabs">
                    <li className="nav-item">
                      <a className="nav-link active" href="#profile" data-toggle="tab">
                        <i className="material-icons">bug_report</i> Bugs
                        <div className="ripple-container" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#messages" data-toggle="tab">
                        <i className="material-icons">code</i> Website
                        <div className="ripple-container" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#settings" data-toggle="tab">
                        <i className="material-icons">cloud</i> Server
                        <div className="ripple-container" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="tab-content">
                <div className="tab-pane active" id="profile">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Create 4 Invisible User Experiences you Never Knew About</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane" id="messages">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane" id="settings">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                          </button>
                          <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-lg-12 col-md-12">
          <div className="card">
            <div className="card-header card-header-warning">
              <h4 className="card-title">Employees Stats</h4>
              <p className="card-category">New employees on 15th September, 2016</p>
            </div>
            <div className="card-body table-responsive">
              <table className="table table-hover">
                <thead className="text-warning">
                  <tr><th>ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Vehicle Type</th>
                    <th>Reg No</th>
                    <th>New Work Count</th>
                    <th>In Progress Count</th>
                    <th>Completed Count</th>
                    <th>Rejected</th>
                  </tr></thead>
                <tbody>
                  
                  <tr>
                    <td>{this.props.values.userid}</td>
                    <td>{this.props.values.name}</td>
                    <td>{this.props.values.role}</td>
                    <td>{this.props.values.vehicle_type}</td>
                    <td>{this.props.values.reg_no}</td>
                    <td>{this.props.values.new_work_count}</td>
                    <td>{this.props.values.in_progress_count}</td>
                    <td>{this.props.values.completed_count}</td>
                    <td>{this.props.values.rejected}</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer">
    <div className="container-fluid">
      <nav className="float-left">
        <ul>
          <li>
            <a href="https://www.creative-tim.com">
              Creative Tim
            </a>
          </li>
          <li>
            <a href="https://creative-tim.com/presentation">
              About Us
            </a>
          </li>
          <li>
            <a href="http://blog.creative-tim.com">
              Blog
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/license">
              Licenses
            </a>
          </li>
        </ul>
      </nav>
      <div className="copyright float-right">
        ©
        , made with <i className="material-icons">favorite</i> by
        <a href="https://www.creative-tim.com" >Creative Tim</a> for a better web.
      </div>
    </div>
  </footer>
</div>

        )
    }
}
