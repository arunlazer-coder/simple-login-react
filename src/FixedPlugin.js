import React, { Component } from 'react'

export default class FixedPlugin extends Component {
    render() {
        return (
           <div className="fixed-plugin">
  <div className="dropdown show-dropdown">
    <a href="#" data-toggle="dropdown">
      <i className="fa fa-cog fa-2x"> </i>
    </a>
    <ul className="dropdown-menu">
      <li className="header-title"> Sidebar Filters</li>
      <li className="adjustments-line">
        <a href="javascript:void(0)" className="switch-trigger active-color">
          <div className="badge-colors ml-auto mr-auto">
            <span className="badge filter badge-purple" data-color="purple" />
            <span className="badge filter badge-azure" data-color="azure" />
            <span className="badge filter badge-green" data-color="green" />
            <span className="badge filter badge-warning" data-color="orange" />
            <span className="badge filter badge-danger" data-color="danger" />
            <span className="badge filter badge-rose active" data-color="rose" />
          </div>
          <div className="clearfix" />
        </a>
      </li>
      <li className="header-title">Images</li>
      <li className="active">
        <a className="img-holder switch-trigger" href="javascript:void(0)">
          <img src="../assets/img/sidebar-1.jpg" alt />
        </a>
      </li>
      <li>
        <a className="img-holder switch-trigger" href="javascript:void(0)">
          <img src="../assets/img/sidebar-2.jpg" alt />
        </a>
      </li>
      <li>
        <a className="img-holder switch-trigger" href="javascript:void(0)">
          <img src="../assets/img/sidebar-3.jpg" alt />
        </a>
      </li>
      <li>
        <a className="img-holder switch-trigger" href="javascript:void(0)">
          <img src="../assets/img/sidebar-4.jpg" alt />
        </a>
      </li>
      <li className="button-container">
        <a href="https://www.creative-tim.com/product/material-dashboard" target="_blank" className="btn btn-primary btn-block">Free Download</a>
      </li>
      {/* <li class="header-title">Want more components?</li>
      <li class="button-container">
          <a href="https://www.creative-tim.com/product/material-dashboard-pro" target="_blank" class="btn btn-warning btn-block">
            Get the pro version
          </a>
      </li> */}
      <li className="button-container">
        <a href="https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html" target="_blank" className="btn btn-default btn-block">
          View Documentation
        </a>
      </li>
      <li className="button-container github-star">
        <a className="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
      </li>
      <li className="header-title">Thank you for 95 shares!</li>
      <li className="button-container text-center">
        <button id="twitter" className="btn btn-round btn-twitter"><i className="fa fa-twitter" /> · 45</button>
        <button id="facebook" className="btn btn-round btn-facebook"><i className="fa fa-facebook-f" /> · 50</button>
        <br />
        <br />
      </li>
    </ul>
  </div>
</div>

        )
    }
}
