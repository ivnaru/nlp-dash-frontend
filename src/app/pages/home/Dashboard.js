import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  Portlet,
  PortletBody,
  PortletHeader,
  PortletHeaderToolbar
} from "../../partials/content/Portlet";
import { metronic } from "../../../_metronic";
import QuickStatsChart from "../../widgets/QuickStatsChart";
import OrderStatisticsChart from "../../widgets/OrderStatisticsChart";
import OrdersWidget from "../../widgets/OrdersWidget";
import SalesBarChart from "../../widgets/SalesBarChart";
import TopicsChart from "../../widgets/TopicsChart";
import Search from "../../widgets/search";
import SentimentsChart from "../../widgets/SentimentsChart";
import DownloadFiles from "../../widgets/DownloadFiles";
import NewUsers from "../../widgets/NewUsers";
import LatestUpdates from "../../widgets/LatestUpdates";
import BestSellers from "../../widgets/BestSellers";
import RecentActivities from "../../widgets/RecentActivities";
import PortletHeaderDropdown from "../../partials/content/CustomDropdowns/PortletHeaderDropdown";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './dash.scss';

export default function Dashboard() {
  const { brandColor, dangerColor, successColor, primaryColor } = useSelector(
    state => ({
      brandColor: metronic.builder.selectors.getConfig(
        state,
        "colors.state.brand"
      ),
      dangerColor: metronic.builder.selectors.getConfig(
        state,
        "colors.state.danger"
      ),
      successColor: metronic.builder.selectors.getConfig(
        state,
        "colors.state.success"
      ),
      primaryColor: metronic.builder.selectors.getConfig(
        state,
        "colors.state.primary"
      )
    })
  );

  const chartOptions = useMemo(
    () => ({
      chart1: {
        data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
        color: brandColor,
        border: 3
      },

      chart2: {
        data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
        color: dangerColor,
        border: 3
      },

      chart3: {
        data: [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
        color: successColor,
        border: 3
      },

      chart4: {
        data: [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
        color: primaryColor,
        border: 3
      }
    }),
    [brandColor, dangerColor, primaryColor, successColor]
  );

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="row row-full-height">
            <div className="col-xl-6">
              <Portlet>
                <PortletHeader
                  title="Frequency Distribution"
                  toolbar={<div className="freq_buttons">
                      <button>ALL</button>
                      <button>DESCRIPTIVE</button>
                      <button className="active">OBJECTS</button>
                      <button>ACTIONS</button>
                    </div>}
                />

                <PortletBody>
                  <OrderStatisticsChart />
                </PortletBody>
              </Portlet>

              <div className="kt-space-20" />

              <Portlet>
                <PortletHeader
                  title="Topics"
                />

                <PortletBody>
                  <TopicsChart />
                </PortletBody>
              </Portlet>
            </div>

            <div className="col-xl-6">
              <Portlet>
                <PortletHeader
                  title="Sentiments"
                />

                <PortletBody>
                  <SentimentsChart />
                </PortletBody>
              </Portlet>

              <div className="kt-space-20" />

              <Portlet>
                <PortletHeader
                  toolbar={
                    <>
                      <InputBase
                        className={"classes.input"}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'Search Google Maps' }}
                      />
                      <IconButton className={"classes.iconButton"} aria-label="Search">
                        <SearchIcon />
                      </IconButton>
                      <Divider className={"divider"} />
                      <div className="groupBtn">
                        <ToggleButtonGroup
                          type="checkbox"
                          value={1}
                          onChange={() => {}}
                        >
                          <ToggleButton value={1}>Related</ToggleButton>
                          <ToggleButton value={2}>Opposite</ToggleButton>
                        </ToggleButtonGroup>
                      </div>

                    </>
                  }
                />

                <PortletBody>
                  <Search />
                </PortletBody>
              </Portlet>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}
