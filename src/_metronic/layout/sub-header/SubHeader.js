/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import objectPath from "object-path";
import { withRouter } from "react-router-dom";
import { QuickActions } from "./components/QuickActions";
import * as builder from "../../ducks/builder";
import { LayoutContextConsumer } from "../LayoutContext";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


// import BreadCrumbs from "./components/BreadCrumbs";

class SubHeader extends React.Component {
  render() {
    const {
      subheaderCssClasses,
      subheaderContainerCssClasses,
      subheaderMobileToggle
    } = this.props;
    const today = new Date();
    const short_months = dt => {
      Date.shortMonths = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      return Date.shortMonths[dt.getMonth()];
    };

    return (
      <div
        id="kt_subheader"
        className={`kt-subheader ${subheaderCssClasses} kt-grid__item`}
      >
        <div className={`kt-container ${subheaderContainerCssClasses}`}>
          <div className="kt-subheader__main">
            {subheaderMobileToggle && (
              <button
                className="kt-subheader__mobile-toggle kt-subheader__mobile-toggle--left"
                id="kt_subheader_mobile_toggle"
              >
                <span />
              </button>
            )}

            <LayoutContextConsumer>
              {/*{({ subheader: { title, breadcrumb } }) => (*/}
              {({ subheader: { title } }) => (
                  <>
                  <h3 className="kt-subheader__title"></h3>
                  {/* <span className="kt-subheader__separator kt-subheader__separator--v" /> */}
                  {/*<BreadCrumbs items={breadcrumb} />*/}
                  {/*  <Fab*/}
                  {/*    variant="extended"*/}
                  {/*    size="medium"*/}
                  {/*    color="primary"*/}
                  {/*    aria-label="Add"*/}
                  {/*    className={"classes.margin"}*/}
                  {/*    style={{position: 'absolute', right: 25}}*/}
                  {/*  >*/}
                  {/*    <AddIcon style={{marginRight: 3}} />*/}
                  {/*    Create Dashboard*/}
                  {/*  </Fab>*/}
                </>
              )}
            </LayoutContextConsumer>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  subheaderCssClasses: builder.selectors.getClasses(store, {
    path: "subheader",
    toString: true
  }),
  subheaderContainerCssClasses: builder.selectors.getClasses(store, {
    path: "subheader_container",
    toString: true
  }),
  config: store.builder.layoutConfig,
  menuConfig: store.builder.menuConfig,
  subheaderMobileToggle: objectPath.get(
    store.builder.layoutConfig,
    "subheader.mobile-toggle"
  )
});

export default withRouter(connect(mapStateToProps)(SubHeader));
